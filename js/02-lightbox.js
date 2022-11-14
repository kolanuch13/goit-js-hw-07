import { galleryItems } from './gallery-items.js';

const galleryPlace = document.querySelector('.gallery');

galleryPlace.innerHTML = createMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { fadeSpeed: 250, });

function createMarkup(array) {
  const markup = array
  .map((item) => {
          return `
          <a href="${item.original}"> <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/></a>
          `;
        })
        .join('');
    return markup;
}
