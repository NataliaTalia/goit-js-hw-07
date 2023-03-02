import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef = document.querySelector(".gallery");

const markup = createMarkup(galleryItems);

galleryRef.innerHTML = markup;
const lightbox = new SimpleLightbox('.gallery a', { captionData: 'alt', captionPosition: 'bottom', captionDelay: 250 });


function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            data-source = "${original}"
            alt="${description}" 
            title="${description}">
            </a>
            </li>`;
    })
    .join("");
}

galleryRef.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') {
        return;
    }


})

