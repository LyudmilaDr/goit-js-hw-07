import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector(".gallery");
const imagesMarkup = createPictureGallery(galleryItems);
galleryImages.insertAdjacentHTML("beforeend", imagesMarkup);
function createPictureGallery(galleryItems){
    return galleryItems
    .map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href = "${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join("");
}
galleryImages.addEventListener("click",(event) => {
event.preventDefault();
if(event.target.nodeName !== "IMG"){
    return;
}
const pictureBig = event.target.getAttribute("data-source");
const instance = basicLightbox.create(`<img src="${pictureBig}"width="800" height="600">`);
instance.show();
});
console.log(basicLightbox);

console.log(galleryItems);
