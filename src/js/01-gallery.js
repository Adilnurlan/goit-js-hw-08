import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryItemsMarkup = document.querySelector(".gallery");
const galleryFoo = galleryMarkup(galleryItems);

galleryItemsMarkup.insertAdjacentHTML("afterbegin", galleryFoo);

function galleryMarkup(galleries) {
  return galleries
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});