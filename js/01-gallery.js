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

    // console.log(markup);

  return markup;
}
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

function onGalleryContainerClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
    evt.preventDefault();
    const imageEl = evt.target;
      console.log(imageEl);
onOpenModalWindow(imageEl)
    
}
function onOpenModalWindow(evt) {
        lightbox.classList.add("active");
        const img = document.createElement("img");
    img.src = evt.dataset.source;
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img);
    window.addEventListener('keydown',onEscKeyPress)
}
function onCloseModalWindow(){
    window.addEventListener('keydown', onEscKeyPress)
        lightbox.classList.remove('active')
    }

function onEscKeyPress(evt) {
    if (evt.code==='Escape') {
            onCloseModalWindow();
    }

}
