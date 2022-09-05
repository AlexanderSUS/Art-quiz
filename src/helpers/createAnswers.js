import { QUESTIONS_TOTAL, TOTAL_ANSWERS_NUM } from '../const';

const createAnswers = (trueAnswer) => {
  const allAnswers = [trueAnswer];

  while (allAnswers.length < TOTAL_ANSWERS_NUM) {
    const randomAnswer = Math.floor(Math.random() * QUESTIONS_TOTAL);

    if (!allAnswers.includes(randomAnswer)) {
      allAnswers.push(randomAnswer);
    }
  }

  return allAnswers;
};

export default createAnswers;
