/**
 * @param {number} min
 * @param {number} max
 */
const getRandomInt = (min, max) => {
  if (!Number.isInteger(min) || min < 0 || !Number.isInteger(max) || max < 0 || max < min) {
    return NaN;
  }

  return Math.round((max - min) * Math.random() + min);
};

getRandomInt(1, 25);
// console.log(getRandomInt(1, 25));
