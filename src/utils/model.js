import {
  ART_QUIZ_CONFIG,
  FALSE_ANSWERS_NUM,
  LANG_RU,
  QUESTIONS_PER_CATEGORY,
  QUESTIONS_TOTAL,
} from '../const';
import getQuestionsRange from '../helpers/getQuestionsRange';
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
    const [rangeStart, rangeEnd] = getQuestionsRange(this.location.type, this.location.categoryId);

    const answers = [];

    let pictureNumber = rangeStart;

    while (pictureNumber !== rangeEnd) {
      answers.push({
        true: images[pictureNumber],
        false: [],
        all: [images[pictureNumber]],
      });

      pictureNumber++;
    }

    answers.map((answer) => {
      while (answer.false.length < FALSE_ANSWERS_NUM) {
        const variant = Math.floor(Math.random() * QUESTIONS_TOTAL);

        if (!answer.all.includes(variant)) {
          answer.false.push(images[variant]);
          answer.all.push(images[variant]);
        }
      }

      return answer;
    });

    this.answers = answers;
  }

  shuffleAnswers() {
    this.answers.forEach((element) => {
      for (let i = element.all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const k = element.all[i];
        element.all[i] = element.all[j];
        element.all[j] = k;
      }
    });
  }

  isLastQuestion() {
    return +this.location.pageNum === QUESTIONS_PER_CATEGORY - 1;
  }
}
