import { LANG_RU, QUESTIONS_PER_CATEGORY } from '../const';
import categories from '../utils/categories';

const getDefaultState = () => ({
  settings: {
    lang: LANG_RU,
  },
  results: {
    artist: new Array(categories.length)
      .fill(null)
      .map(() => new Array(QUESTIONS_PER_CATEGORY).fill(null)),
    picture: new Array(categories.length)
      .fill(null)
      .map(() => new Array(QUESTIONS_PER_CATEGORY).fill(null)),
  },
});

export default getDefaultState;
