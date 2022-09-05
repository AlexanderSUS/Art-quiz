import htmlToElement from '../../../helpers/htmlToElement';
import Picture from './picture.html';
import Artist from './artist.html';

import './index.scss';

const artist = htmlToElement(Artist);
const picture = htmlToElement(Picture);

const answers = {
  artist,
  picture,
};

export default answers;
