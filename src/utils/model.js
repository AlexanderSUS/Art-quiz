import {
  ARTIST_QUIZ,
  ART_QUIZ_CONFIG,
  LANG_RU,
  PICTURE_QUIZ,
  QUESTIONS_PER_CATEGORY,
  RESULT_GAMEOVER,
} from '../const';
import createAnswers from '../helpers/createAnswers';
import getDefaultState from '../helpers/getDefaultState';
import getQuestionStartPosition from '../helpers/getQuestionsRange';
import shuffleAnswers from '../helpers/shuffleAnswers';
import images from '../data/images';
import dictionary from '../data/dictionary';
import getRating from '../helpers/getRating';
import categories from '../data/categories';

export default class Model {
  constructor(quiz) {
    this.quiz = quiz;
    this.answers = null;
    this.page = null;
    this.quizType = null;
    this.category = null;
    this.pageNum = null;
    this.state = JSON.parse(localStorage.getItem(ART_QUIZ_CONFIG)) || getDefaultState();
  }

  saveConfig() {
    localStorage.setItem(ART_QUIZ_CONFIG, JSON.stringify(this.state));
  }

  saveResult(result) {
    this.state.results[this.quizType][this.categoryId][this.pageNum] = result;

    this.saveConfig();
  }

  setLocation(page, quizType, categoryId, pageNum) {
    this.page = page;
    this.quizType = quizType;
    this.categoryId = parseInt(categoryId);
    this.pageNum = parseInt(pageNum);
  }

  getAnswers() {
    const [trueAnswerNum, ...falseAnswersNums] = createAnswers(
      getQuestionStartPosition(this.quizType, this.categoryId) + parseInt(this.pageNum),
    );

    const falseAnswers = falseAnswersNums.map((falseAnswerNum) => images[falseAnswerNum]);
    const trueAnswer = images[trueAnswerNum];

    const translatedTrueAnswer = {
      ...trueAnswer,
      author: trueAnswer.author[this.state.lang],
      picture: trueAnswer.picture[this.state.lang],
    };

    const translatedFalseAnswers = falseAnswers.map((falseAnswer) => ({
      ...falseAnswer,
      author: falseAnswer.author[this.state.lang],
      picture: falseAnswer.picture[this.state.lang],
    }));

    this.answers = {
      trueAnswer: translatedTrueAnswer,
      falseAnswers: translatedFalseAnswers,
      allAnswers: shuffleAnswers([translatedTrueAnswer, ...translatedFalseAnswers]),
    };
  }

  getHomePageData() {
    return dictionary[this.state.lang].buttons;
  }

  getSettingsPageData() {
    return {
      buttons: dictionary[this.state.lang].buttons,
      isLangSwitchChecked: this.state.lang === LANG_RU,
    };
  }

  getCategoryPageData() {
    return {
      quizType: this.quizType,
      results: this.state.results[this.quizType],
      dictionary: {
        categories: dictionary[this.state.lang].categories,
        resultTitle: dictionary[this.state.lang].titles.results,
      },
    };
  }

  getQuestionPageData() {
    this.getAnswers();

    return {
      quizType: this.quizType,
      answers: this.answers,
      dictionary: {
        buttons: dictionary[this.state.lang].buttons,
        question: dictionary[this.state.lang].question[this.quizType],
      },
    };
  }

  getModalWindowData() {
    const nextPage = this.pageNum < QUESTIONS_PER_CATEGORY - 1 ? this.pageNum + 1 : this.pageNum;

    return {
      trueAnswer: this.answers.trueAnswer,
      nextRoute: `#questions=${this.quizType}=${this.categoryId}=${nextPage}`,
      isAnswerTrue: this.state.results[this.quizType][this.categoryId][this.pageNum],
    };
  }

  getFinalModalWindowData() {
    const categoryResults = this.state.results[this.quizType][this.categoryId];
    const score = categoryResults.filter((res) => res === true).length;
    const rating = getRating(score);
    const navButtonData = this.getButtonDataForFinalModalWindow(score);

    return {
      quizType: this.quizType,
      score,
      rating,
      title: dictionary[this.state.lang].titles[rating],
      navButtonData,
      buttonDictionary: dictionary[this.state.lang].buttons,
    };
  }

  getButtonDataForFinalModalWindow(score) {
    const nextQuiz = this.quizType === ARTIST_QUIZ ? PICTURE_QUIZ : ARTIST_QUIZ;
    const toNextCategory = `#questions=${this.quizType}=${this.categoryId + 1}=0`;
    const toCurrentCategory = `#questions=${this.quizType}=${this.categoryId}=0`;
    const toNextQuiz = `#questions=${nextQuiz}=0=0`;

    if (score > RESULT_GAMEOVER && this.categoryId === categories.length - 1) {
      return {
        path: toNextQuiz,
        title: dictionary[this.state.lang].buttons.nextQuiz,
      };
    }

    if (score > RESULT_GAMEOVER) {
      return {
        path: toNextCategory,
        title: dictionary[this.state.lang].buttons.nextQuiz,
      };
    }

    return {
      path: toCurrentCategory,
      title: dictionary[this.state.lang].buttons.playAgain,
    };
  }

  getDictionary() {
    return dictionary[this.state.lang];
  }
}
