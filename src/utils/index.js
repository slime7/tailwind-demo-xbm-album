export function debounce(fn, wait) {
  let t;
  // eslint-disable-next-line func-names
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

export function throttle(fn, wait) {
  let t;
  let l = +new Date();
  // eslint-disable-next-line func-names
  return function (...args) {
    const c = +new Date();
    clearTimeout(t);

    if (c - l >= wait) {
      fn.apply(this, args);
      l = c;
    } else {
      t = setTimeout(() => fn.apply(this, args), wait);
    }
  };
}

export const firstUpperCase = ([first, ...rest]) => (first ? `${first.toUpperCase()}${rest.join('')}` : '');
