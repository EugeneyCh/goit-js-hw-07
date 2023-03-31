import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createImgCardsMarkup(images) {
  const markup = images
    .map(({ preview, original, description }) => {
      return `
      
        <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");

  return markup;
}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`,
  
    { onShow: (instance) => {
      window.addEventListener("keydown", onEscapePress);

    },
    onClose: (instance) => {
          window.removeEventListener("keydown", onEscapePress);

      },
    });
  instance.show();

  function onEscapePress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}