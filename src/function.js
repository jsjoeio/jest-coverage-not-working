export default string => {
  if (!string || typeof string !== 'string') {
    throw new TypeError('capitalize() only accepts strings.');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
