export const hasClass = (dom: Element, className: string) => {
  // 如果不存在dom或者样式类，直接返回
  if (!dom || !className) {
    return false;
  }
  const reg = new RegExp(`\\b${className}\\b`, 'ig');
  return reg.test(dom.className);
  // dom.className += ' className';
};

export const addClass = (dom: Element, className: string) => {
  // 如果不存在dom或者样式类，直接返回
  if (!dom || !className) {
    return;
  }
  // 如果已经存在这个样式了，也直接返回
  if (hasClass(dom, className)) {
    return;
  }
  if (dom.className === '') {
    dom.className += className;
  } else {
    dom.className += ` ${className}`;
  }
};

export const removeClass = (dom: Element, className: string) => {
  // 如果不存在dom或者样式类，直接返回
  if (!dom || !className) {
    return;
  }
  if (hasClass(dom, className)) {
    const reg = new RegExp(`\\b${className}\\b`, 'ig');
    dom.className = dom.className.replace(reg, '');
  }
};
