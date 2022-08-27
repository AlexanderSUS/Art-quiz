import { ART_QUIZ_CONFIG } from '../const';
import createAnswers from '../helpers/createAnswers';
import getDefaultState from '../helpers/getDefaultState';
import getQuestionStartPosition from '../helpers/getQuestionsRange';
import shuffleAnswers from '../helpers/shuffleAnswers';
import images from './images';

export default class Model {
  constructor(quiz) {
    this.quiz = quiz;
    this.location = null;
    this.answers = null;
    this.state = JSON.parse(localStorage.getItem(ART_QUIZ_CONFIG)) || getDefaultState();
  }

  saveConfig() {
    localStorage.setItem(ART_QUIZ_CONFIG, JSON.stringify(this.state));
  }

  saveResult(result, location) {
    const { categoryId, pageNum, quizType } = location;

    this.state.results[quizType][categoryId][pageNum] = result;
  }

  setLocation() {
    const [page, quizType, categoryId, pageNum] = document.location.hash.slice(1).split('=');
    this.location = { page, quizType, categoryId, pageNum };
  }

  getAnswers(quizType, categoryId, pageNum) {
    const [trueAnswerNum, ...falseAnswers] = createAnswers(
      getQuestionStartPosition(quizType, categoryId) + parseInt(pageNum),
    );

    const falseImages = falseAnswers.map((falseAnswerNum) => images[falseAnswerNum]);

    this.answers = {
      trueAnswer: images[trueAnswerNum],
      falseAnswers: falseImages,
      all: shuffleAnswers([images[trueAnswerNum], ...falseImages]),
    };
  }
}
