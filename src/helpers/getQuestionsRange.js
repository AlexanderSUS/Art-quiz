import { ARTIST_QUIZ, QUESTIONS_PER_CATEGORY, QUESTIONS_PER_QUIZ_TYPE } from '../const';

function getQuestionStartPosition(quizType, categoryId) {
  const questionsStart = quizType === ARTIST_QUIZ ? QUESTIONS_PER_QUIZ_TYPE : 0;

  return questionsStart + categoryId * QUESTIONS_PER_CATEGORY;
}

export default getQuestionStartPosition;
