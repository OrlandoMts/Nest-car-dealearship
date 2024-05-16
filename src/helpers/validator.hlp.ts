export const isNumber = value => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
