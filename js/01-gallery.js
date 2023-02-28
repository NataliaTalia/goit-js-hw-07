import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = createMarkup(galleryItems);

galleryRef.innerHTML = markup;

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            data-source = "${original}"
            alt="${description}" 
            title="${description}">
            </a>
            </div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", (e) => {
    e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  console.log("target", e.target);

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

instance.show();

galleryRef.addEventListener('keydown', (e) => {
    if(e.code === "Escape") {
        instance.close();
    }
})
});


