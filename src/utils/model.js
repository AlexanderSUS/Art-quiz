import { ART_QUIZ_CONFIG, LANG_RU, QUESTIONS_PER_CATEGORY } from '../const';
import createAnswers from '../helpers/createAnswers';
import getQuestionStartPosition from '../helpers/getQuestionsRange';
import shuffleAnswers from '../helpers/shuffleAnswers';
import categories from './categories';
import images from './images';

export default class Model {
  constructor(quiz) {
    this.quiz = quiz;
    this.location = null;
    this.answers = null;
    this.config = JSON.parse(localStorage.getItem(ART_QUIZ_CONFIG)) || {
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
    };
  }

  saveConfig() {
    localStorage.setItem(ART_QUIZ_CONFIG, JSON.stringify(this.config));
  }

  getResults() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    return this.config.results[this.location.type].map((element) => element.reduce(reducer));
  }

  pickResult(result) {
    const { categoryId, pageNum, type: quizType } = this.location;

    this.config.results[quizType][categoryId][pageNum] = result;
  }

  getLocation() {
    const [page, type, categoryId, pageNum] = document.location.hash.slice(1).split('=');
    this.location = { page, type, categoryId, pageNum };
  }

  getAnswers() {
    const { type, categoryId, pageNum } = this.location;
    const questionStartPosition = getQuestionStartPosition(type, categoryId) + parseInt(pageNum);

    this.answers = Array(QUESTIONS_PER_CATEGORY).fill({
      true: null,
      false: [],
      all: [],
    });

    this.answers.forEach((answer, index) => {
      const [trueAnswerNum, ...falseAnswers] = createAnswers(questionStartPosition + index);

      answer.true = images[trueAnswerNum];
      answer.false = falseAnswers.map((falseAnswerNum) => images[falseAnswerNum]);
      answer.all = shuffleAnswers([answer.true, ...answer.false]);
    });
  }

  isLastQuestion() {
    return +this.location.pageNum === QUESTIONS_PER_CATEGORY - 1;
  }
}
