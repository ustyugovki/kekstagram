const ARRAY_MIN_COUNT = 1;
const ARRAY_MAX_COUNT = 25;
// почему при вставке во внутрь функции, числа повторяются?
const checkGeneratedId = [];


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
 */
const generateId = () => {
  while (checkGeneratedId.length < ARRAY_MAX_COUNT) {
    const id = getRandomInt(ARRAY_MIN_COUNT, ARRAY_MAX_COUNT);

    // если получаемый id отсутствует в массиве, добавляем в конец
    if (!checkGeneratedId.includes(id)) {
      checkGeneratedId.push(id);

      return id;
    }
  }
};


/**
 * @template Item
 * @param {Item[]} items
 */
const getRandomArrayItem = (items) => {
  const lastIndex = Math.max(0, items.length - 1);
  const index = getRandomInt(0, lastIndex);

  return items[index];
};


export {ARRAY_MAX_COUNT, getRandomInt, generateId, getRandomArrayItem};
