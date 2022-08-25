import { ART_QUIZ_CONFIG, QUESTIONS_PER_CATEGORY } from '../const';
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

  getResults() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    return this.state.results[this.location.quizType].map((element) => element.reduce(reducer));
  }

  pickResult(result) {
    const { categoryId, pageNum, quizType } = this.location;

    this.state.results[quizType][categoryId][pageNum] = result;
  }

  setLocation() {
    const [page, quizType, categoryId, pageNum] = document.location.hash.slice(1).split('=');
    this.location = { page, quizType, categoryId, pageNum };
  }

  getAnswers() {
    const { quizType, categoryId, pageNum } = this.location;

    const questionStartPosition =
      getQuestionStartPosition(quizType, categoryId) + parseInt(pageNum);

    const [trueAnswerNum, ...falseAnswers] = createAnswers(questionStartPosition);

    const falseImages = falseAnswers.map((falseAnswerNum) => images[falseAnswerNum]);

    this.answers = {
      trueAnswer: images[trueAnswerNum],
      falseAnswers: falseImages,
      all: shuffleAnswers([images[trueAnswerNum], ...falseImages]),
    };
  }

  isLastQuestion() {
    return +this.location.pageNum === QUESTIONS_PER_CATEGORY - 1;
  }
}
