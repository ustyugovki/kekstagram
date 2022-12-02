const MIN_INTEGER = 1;
const MAX_INTEGER = 25;
const commentLength = 40;

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

getRandomInt(MIN_INTEGER, MAX_INTEGER);
// console.log(getRandomInt(MIN_INTEGER, MAX_INTEGER));


/**
 * @param {string} value
 * @param {number} valueParam
 */
const checkLengthString = (value, valueParam) => {
  if (value.length > valueParam) {
    throw new Error(`Комментарий превышает ${valueParam} символов!!!`);
  }

  return value;
};

checkLengthString('Проверка длины комментария', commentLength);
// console.log(checkLengthString('Проверка длины комментария', commentLength));
