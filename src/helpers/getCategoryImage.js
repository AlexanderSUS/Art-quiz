import { IMAGE_URL_SMALL } from '../const';

const getCategoryImage = (imageNum) => {
  const img = new Image();
  img.src = `${IMAGE_URL_SMALL}${imageNum}.jpg`;
  return img;
};

export default getCategoryImage;
