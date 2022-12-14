const MIN = 1;
const MAX = 25;
const clearArray = [];
const commentLength = 40;


/**
 * Генерирует рандомное число
 * @param {number} min
 * @param {number} max
 */
const getRandomInt = (min, max) => {
  if (!Number.isInteger(min) || min < 0 || !Number.isInteger(max) || max < 0 || max < min) {
    return NaN;
  }
  // почему при round появляется undefined ???
  return Math.floor(Math.random() * (max - min) + min);
};


/**
 * Генерирует массив определенного диапазона
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 */
const getClearArray = (min, max) => {
  for (let i = min; i <= max; ++i) {
    clearArray[i - 1] = i;
  }
  return clearArray;
};
// console.log(getClearArray(MIN, MAX));


/**
 * Генерирует неповторяющийся рандомный массив из диапазона
 * @param {number[]} array
 */
const getRandomArray = (array) => {
  let currentIndex = array.length - 1;
  let randomIndex = 0;
  let temp = 0;

  for (currentIndex; currentIndex >= 0; currentIndex--) {
    randomIndex = getRandomInt(MIN, MAX);

    // Here's a JavaScript implementation of the Durstenfeld shuffle,
    // an optimized version of Fisher-Yates:
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;

    // for ES6/ECMAScript 2015
    // [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
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
