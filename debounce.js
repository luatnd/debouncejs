/**
 * Read more about debounce here: https://davidwalsh.name/javascript-debounce-function
 * 
 * @param fn
 * @param delay
 * @returns {function()}
 */
export default (fn, delay) => {
  let tmpId;
  return (...params) => {
    clearTimeout(tmpId);
    tmpId = setTimeout(() => {
      fn(...params);
    }, delay)
  }
}
