import { IMAGE_URL_FULL } from '../const';

function addPicture(element, imageNum) {
  const img = new Image();

  img.src = `${IMAGE_URL_FULL}${imageNum}full.jpg`;

  img.onload = () => {
    element.style.backgroundImage = `url(${img.src})`;
  };
}

export default addPicture;
