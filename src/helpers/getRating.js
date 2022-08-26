import {
  RATING_CONGRATS,
  RATING_GAMEOVER,
  RATING_GRAND,
  RESULT_CONGRATS,
  RESULT_GRAND,
} from '../const';

const getRating = (result) => {
  if (result === RESULT_GRAND) {
    return RATING_GRAND;
  }

  if (result < RESULT_CONGRATS) {
    return RATING_GAMEOVER;
  }

  return RATING_CONGRATS;
};

export default getRating;
