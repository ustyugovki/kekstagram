const MIN = 1;
const MAX = 25;
const clearArray = [];
const commentLength = 40;


/**
 * @param {number} min
 * @param {number} max
 */
const getRandomInt = (min, max) => {
  if (!Number.isInteger(min) || min < 0 || !Number.isInteger(max) || max < 0 || max < min) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min) + min);
};


const getClearArray = (minIn, maxIn) => {
  for (let i = minIn; i <= maxIn; ++i) {
    clearArray[i - 1] = i;
  }

  return clearArray;
};


const getRandomArray = (array) => {
  let currentIndex = array.length - 1;
  let randomIndex;

  for (currentIndex; currentIndex > 0; currentIndex--) {
    randomIndex = Math.floor(getRandomInt(MIN, MAX));
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
getRandomArray(getClearArray(MIN, MAX));
// console.log(getRandomArray(getClearArray(MIN, MAX)));


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
checkLengthString('Длина комментария проверена', commentLength);
// console.log(checkLengthString('Длина комментария проверена', commentLength));
