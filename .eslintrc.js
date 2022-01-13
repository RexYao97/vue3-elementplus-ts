module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    //自己写一些想配置的规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    
    // 配置文件依赖 devDependencies 关闭校验
    'import/no-extraneous-dependencies': [
      1,
      { devDependencies: ['**/*.config.js', '**/*.config.ts'] },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'config',
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // 换行制式忽略LF以及CRLF
    'linebreak-style': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        //这里写覆盖vue文件的规则
      },
    },
  ],
  //   vue3.2 这些变量不需要import 所以需要设置为全局变量
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  settings: {
    //   别名依赖
    'import/resolver': {
      typescript: { project: path.join(__dirname, './tsconfig.json') },
    },
  },
};
