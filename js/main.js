import {generateArrayImages} from './data-generation.js';

// Контейнер для карточек
const similarListImage = document.querySelector('.pictures');

// @ts-ignore
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('a');

const similarImages = generateArrayImages();

const similarListFragment = document.createDocumentFragment();

const bigPictureCancel = document.querySelector('.big-picture__cancel');

similarImages.forEach(({id, url, likes, description, comments}) => {
  const imageElement = similarPictureTemplate.cloneNode(true);

  imageElement.querySelector('.picture__img').id = id;
  imageElement.querySelector('.picture__img').src = url;
  imageElement.querySelector('.picture__img').alt = description;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments.length;

  similarListFragment.append(imageElement);
});

similarListImage.append(similarListFragment);


// Image dialog
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');

similarListImage.addEventListener('click', (evt) => {
  evt.preventDefault();

  bigPicture.classList.remove('hidden');

  if (evt.target['tagName'] === 'IMG') {
    const likesCount = document.querySelector('.social__likes .likes-count');
    const commentsCountStart = document.querySelector('.social__comment-count .comments-count--start');
    const commentsCountEnd = document.querySelector('.social__comment-count .comments-count--end');

    const socialCommentsLoader = document.querySelector('.social__comments-loader');

    bigPictureImage['src'] = evt.target['src'];
    likesCount.textContent = String(similarImages[evt.target['id'] - 1].likes);
    commentsCountStart.textContent = String(5);
    commentsCountEnd.textContent = String(similarImages[evt.target['id'] - 1].comments.length);
    socialCommentsLoader.classList.remove('hidden');

    if (5 >= similarImages[evt.target['id'] - 1].comments.length) {
      commentsCountStart.textContent = String(similarImages[evt.target['id'] - 1].comments.length);
      socialCommentsLoader.classList.add('hidden');
    }

    // Контейнер для карточек
    const similarListComment = document.querySelector('.social__comments');
    similarListComment.innerHTML = '';

    const itemsCount = similarImages[evt.target['id'] - 1].comments.length;

    for (let i = 0; i < itemsCount; i++) {
      // li
      const commentItem = document.createElement('li');
      commentItem.classList.add('social__comment');

      // img
      const imageCommentItem = document.createElement('img');
      imageCommentItem.classList.add('social__picture');
      imageCommentItem.src = similarImages[evt.target['id'] - 1].comments[i].avatar;
      imageCommentItem.alt = 'Аватар комментатора фотографии';
      imageCommentItem.width = 35;
      imageCommentItem.height = 35;
      commentItem.insertAdjacentElement('beforeend', imageCommentItem);

      // p
      const textCommentItem = document.createElement('p');
      textCommentItem.classList.add('social__text');
      textCommentItem.textContent = similarImages[evt.target['id'] - 1].comments[i].message;
      commentItem.insertAdjacentElement('beforeend', textCommentItem);

      similarListComment.append(commentItem);

    }

    let ITEMS_COUNT_PER_CLICK = 5;
    const socialComment = document.querySelectorAll('.social__comment');


    for (let i = 1; i < socialComment.length; i++) {
      if (i >= ITEMS_COUNT_PER_CLICK) {
        socialComment[i].classList.add('hidden');
      }
    }

    const clickclack = () => {
      ITEMS_COUNT_PER_CLICK += 5;
      socialCommentsLoader.classList.remove('hidden');

      for (let i = 1; i < socialComment.length; i++) {
        if (i <= ITEMS_COUNT_PER_CLICK - 1) {
          socialComment[i].classList.remove('hidden');
          commentsCountStart.textContent = String(i + 1);
        }
      }

      if (ITEMS_COUNT_PER_CLICK >= socialComment.length) {
        socialCommentsLoader.classList.add('hidden');
      }
    };

    socialCommentsLoader.addEventListener('click', clickclack);

  }

});

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});
