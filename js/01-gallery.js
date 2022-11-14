import { galleryItems } from './gallery-items.js';

const galleryPlace = document.querySelector('.gallery');

galleryPlace.innerHTML = createMarkup(galleryItems);

galleryPlace.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName != "IMG") {
    return;
  }
  
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}">
  `)
  instance.show();

  galleryPlace.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}



function createMarkup(array) {
  const markup = array
  .map((item) => {
          return `
          <a class="gallery__link" href="${item.original}">
          <img data-modal-open
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          />
          </a>
          `;
        })
        .join('');
    return markup;
}
