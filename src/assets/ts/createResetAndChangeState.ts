import { cloneDeep } from 'lodash-es';

interface ResetAndChangeState<S = Record<string, any>> {
  resetState: (state: S) => void;
  resetCustomState: (state: S, key: string | Array<string>) => void;
  changeState: (state: S, payload: Record<string, any>) => void;
}
export default function createResetAndChangeState<T = Record<string, any>>(
  defaultState: T
): ResetAndChangeState<T> {
  // 缓存住原始的defaultState
  const defaultStateCopy = cloneDeep(defaultState);
  return {
    resetState(state) {
      // 重置state
      for (const i in state) {
        if ({}.hasOwnProperty.call(defaultStateCopy, i)) {
          // 递归赋值
          state[i] = cloneDeep(defaultStateCopy[i]);
        } else {
          delete state[i];
        }
      }
    },
    // 初始化自定义keys
    resetCustomState(state, keys) {
      keys = typeof keys === 'string' ? [keys] : keys;
      for (const key of keys) {
        if (key.indexOf('.') <= -1) {
          if (!{}.hasOwnProperty.call(state, key)) {
            console.error(`state的属性${key}不存在`);
          } else {
            // 如果不包含'.'直接赋值
            state[key as keyof T] = defaultStateCopy[key as keyof T];
            console.log(key, '重置为', defaultStateCopy[key as keyof T]);
          }
        } else {
          try {
            const arr = key.split('.');
            const arrLength = arr.length;
            if (arrLength > 6) {
              // 最多6层，如果超出6层提示错误，直接返回，表示vuex数据涉及有问题，级别太深
              console.error('数据深度超出6层，请调整vuex数据');
              return;
            }
            // eslint-disable-next-line no-underscore-dangle
            let _state = state;
            // eslint-disable-next-line no-underscore-dangle
            let _defaultStateCopy = defaultStateCopy;
            let length = 0;
            // eslint-disable-next-line no-underscore-dangle
            let _key = ''; // 用于提示
            for (const i of arr) {
              _key = `${_key}>${i}`;
              // 如果不存在默认值 直接删除
              if (typeof _defaultStateCopy[i as keyof T] === 'undefined') {
                delete _state[i as keyof T];
                console.error(key, '中的', i, '不存在');
                console.error('state删除', _key);
                break;
              }
              if (length < arrLength - 1) {
                (_state as any) = _state[i as keyof T];
              }
              (_defaultStateCopy as any) = _defaultStateCopy[i as keyof T];
              length += 1;
            }

            if (length === arrLength) {
              console.log(key, '重置为', _defaultStateCopy);
              // 恢复默认值
              const lastKey = arr[arrLength - 1];
              (_state as any)[lastKey] = cloneDeep(_defaultStateCopy);
            }
          } catch (e) {
            console.error(`state的属性${key}不存在`);
          }
        }
      }
    },
    changeState(state, payload) {
      // 修改state
      for (const i in payload) {
        if ({}.hasOwnProperty.call(payload, i)) {
          if (i.indexOf('.') <= -1) {
            // 如果不包含'.'直接赋值

            state[i as keyof T] = payload[i];
          } else {
            // 如果key值包含'.'，可以精确赋值，如payload为{'a.b.c': 20}，则覆盖state.a.b.c为20
            try {
              const arr = i.split('.');
              const arrLength = arr.length;
              if (arrLength > 6) {
                // 最多6层，如果超出6层提示错误，直接返回，表示vuex数据涉及有问题，级别太深
                console.error('数据深度超出6层，请调整vuex数据');
                return;
              }
              const cacheState = state[arr[0] as keyof T] as any;
              switch (arrLength) {
                case 2:
                  cacheState[arr[1]] = payload[i];
                  break;
                case 3:
                  cacheState[arr[1]][arr[2]] = payload[i];
                  break;
                case 4:
                  cacheState[arr[1]][arr[2]][arr[3]] = payload[i];
                  break;
                case 5:
                  cacheState[arr[1]][arr[2]][arr[3]][arr[4]] = payload[i];
                  break;
                case 6:
                  cacheState[arr[1]][arr[2]][arr[3]][arr[4]][arr[5]] =
                    payload[i];
                  break;
                default:
                  break;
              }
            } catch (e) {
              // console.log(e);
              console.error(`state的属性${i}不存在`);
            }
          }
        }
      }
    },
  };
}
