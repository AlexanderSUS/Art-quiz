import dictionary from './dictionary';
import {
  ARTIST_QUIZ,
  CATEGORIES_PAGE,
  LANG_EN,
  LANG_RU,
  QUESTIONNS_PAGE,
  SETTINGS_PAGE,
} from '../const';
import addPicture from '../helpers/addPicture';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.lang = model.state.settings.lang;
  }

  init() {
    window.onload = () => {
      document.location.hash = '#home';
      this.setLangButton();
      this.switchLanguage();

      window.addEventListener('hashchange', () => {
        this.model.setLocation();
        this.view.switchPage(this.model.location.page);
        this.model.saveConfig();
        this.handleLocation();
      });
    };
  }

  handleLocation() {
    const { page } = this.model.location;

    this.view.switchPage(page);

    switch (page) {
      case SETTINGS_PAGE:
        this.view.setSettingsTitles(dictionary[this.lang]);
        break;
      case CATEGORIES_PAGE:
        this.fillCategoryPage();
        break;
      case QUESTIONNS_PAGE:
        this.fillQuestionPage();
        this.view.setAnswerListener(
          this.model.location.quizType,
          this.model.answers.trueAnswer,
          this.model.saveResult.bind(this.model),
          this.lang,
        );
        this.view.setDefaultModalWindow();
        break;
      default:
        document.location.hash = '#home';
    }

    this.view.fillNavButtonsText(dictionary[this.lang]);
  }

  fillCategoryPage() {
    const { quizType } = this.model.location;
    const results = this.model.state.results[quizType];

    this.view.fillCategoryPage(quizType, results, dictionary[this.lang]);
  }

  fillQuestionPage() {
    const { quizType } = this.model.location;

    this.view.cleanPreviousAnswers();
    this.view.hideModalwindow();
    this.model.getAnswers(quizType);
    this.view.setRouteToBackBnts(quizType);
    this.view.insertQuestion(dictionary[this.lang].question[quizType]);
    this.view.appendAnswersContainer(quizType);
    this.insertPictures();
    this.view.insertAuthors(quizType, this.model.answers, this.lang);
    this.view.setRouteToModal(
      this.model.location.quizType,
      this.model.location.categoryId,
      this.model.location.pageNum,
      this.model.isLastQuestion.bind(this.model),
      this.model.state.results[this.model.location.quizType][this.model.location.categoryId],
      dictionary[this.lang],
    );
    this.view.markTrueAnswer(this.model.answers);
    this.view.appendModalWindow();
  }

  insertQuestion() {
    const question = dictionary[this.lang].question[this.model.location.quizType];

    this.view.currentPage.querySelector('h4').textContent = question;
  }

  insertPictures() {
    const { quizType } = this.model.location;
    const { answers } = this.model;
    const pictures = this.view.currentPage.querySelectorAll('.picture');

    if (quizType === ARTIST_QUIZ) {
      addPicture(...pictures, answers.trueAnswer.imageNum);
      return;
    }

    pictures.forEach((picture, index) => {
      addPicture(picture, answers.all[index].imageNum);
    });
  }

  switchLanguage() {
    this.view.pages.settings.querySelector('#lang-check').addEventListener('change', (e) => {
      this.lang = e.target.checked ? LANG_RU : LANG_EN;

      this.view.setSettingsTitles(dictionary[this.lang]);
      this.view.fillNavButtonsText(dictionary[this.lang]);
      this.model.saveConfig();
    });
  }

  // TODO move to view class
  setLangButton() {
    this.view.pages.settings.querySelector('#lang-check').checked = this.lang === LANG_RU;
  }
}
