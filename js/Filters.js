var filterForImages = document.querySelector('.img-filters');
filterForImages.classList.remove('img-filters--inactive');

var popularPhoto = document.querySelector('#filter-popular');
var newPhoto = document.querySelector('#filter-new');
var discussedPhoto = document.querySelector('#filter-discussed');
var dom = document.querySelector('.pictures');


newPhoto.addEventListener('click', function () {
  discussedPhoto.classList.remove('img-filters__button--active');
  popularPhoto.classList.remove('img-filters__button--active');
  newPhoto.classList.add('img-filters__button--active');
  pictures_DOM.innerHTML = '';
  for(let i = 25; i > 0 ; i--) {
    pictures__elements[i] = createElement();
    fragment.appendChild(pictures__elements[i]);
    pictures_DOM.appendChild(fragment);
  }
});

popularPhoto.addEventListener('click', function () {
  newPhoto.classList.remove('img-filters__button--active');
  discussedPhoto.classList.remove('img-filters__button--active');
  popularPhoto.classList.add('img-filters__button--active');
});

discussedPhoto.addEventListener('click', function () {
  newPhoto.classList.remove('img-filters__button--active');
  popularPhoto.classList.remove('img-filters__button--active');
  discussedPhoto.classList.add('img-filters__button--active');
});


