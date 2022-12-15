const ARRAY_MIN_COUNT = 1;
const ARRAY_MAX_COUNT = 25;
// почему при вставке во внутрь функции, цисла повторяются?
const generatedIds = [];


/**
 * Генерирует рандомное число
 * @param {number} min
 * @param {number} max
 */
const getRandomInt = (min, max) => {
  if (!Number.isInteger(min) || min < 0 || !Number.isInteger(max) || max < 0 || max < min) {
    return NaN;
  }
  // почему при floor всё умирает ???
  return Math.round(Math.random() * (max - min) + min);
};


/**
 * Проверяет число из getRandomInt на повторение
 * @returns number
 */
const generateId = () => {
  while (generatedIds.length < ARRAY_MAX_COUNT) {
    const id = getRandomInt(ARRAY_MIN_COUNT, ARRAY_MAX_COUNT);

    // если получаемый id отсутствует в массиве, добавляем в конец
    if (!generatedIds.includes(id)) {
      generatedIds.push(id);

      return id;
    }
  }
};


/**
 * Генерирует неповторяющийся рандомный массив из диапазона
 * @param {number} length
 */
const generateRandomArray = (length) => Array.from({length}, generateId);

generateRandomArray(ARRAY_MAX_COUNT);
// console.log(generateRandomArray(ARRAY_MAX_COUNT));

