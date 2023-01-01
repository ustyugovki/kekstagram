import {generateArrayImages} from './data-generation.js';

// Контейнер для карточек
const similarListElement = document.querySelector('.pictures');

// @ts-ignore
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('a');

const similarImages = generateArrayImages();

const similarListFragment = document.createDocumentFragment();

similarImages.forEach(({url, likes, comments}) => {
  const imageElement = similarPictureTemplate.cloneNode(true);

  imageElement.querySelector('.picture__img').src = url;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments.length;

  similarListElement.appendChild(imageElement);
});

similarListElement.appendChild(similarListFragment);
