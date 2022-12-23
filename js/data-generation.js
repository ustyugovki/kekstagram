import {ARRAY_MAX_COUNT, getRandomInt, generateId, getRandomArrayItem} from './util.js';

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
