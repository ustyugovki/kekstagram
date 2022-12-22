/**
 * @type {[min: number, max: number]}
 */
const AVATAR_RANGE = [1, 6];

/**
 * @type {NumberRange}
 */
const LIKES_RANGE = [15, 200];

/**
 * @type {NumberRange}
 */
const COMMENTS_RANGE = [1, 25];

const MESSAGES = [
  'Клёвая фотография',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

const DESCRIPTIONS = ['описание 1', 'описание 2', 'описание 3', 'описание 4', 'описание 5'];

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


/**
 * @returns {generateComment}
 */
const generateComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInt(...AVATAR_RANGE)}.svg`,
  message: getRandomArrayItem(MESSAGES),
  name: getRandomArrayItem(NAMES)
});


/**
 * @param {number} num
 * @returns {generateComment[]}
 */
const generateArrayComments = (num) => Array.from({length: num}, (_, index) => generateComment(index + 1));


/**
 * @param {number} id
 * @returns {generateImage}
 */
const generateImage = (id) => ({
  id: generateId(),
  url: `photos/${id}.jpg`,
  description: getRandomArrayItem(DESCRIPTIONS),
  likes: getRandomInt(...LIKES_RANGE),
  comments: generateArrayComments(getRandomInt(...COMMENTS_RANGE))
});


/**
 * @returns {generateImage[]}
 */
const generateArrayImages = () => Array.from({length: ARRAY_MAX_COUNT}, (_, index) => generateImage(index + 1));

export {generateArrayImages};
