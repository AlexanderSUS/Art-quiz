import {
  CATEGORIES_PAGE,
  HOME_PAGE,
  LANG_EN,
  LANG_RU,
  QUESTIONNS_PAGE,
  QUESTIONS_PER_CATEGORY,
  SETTINGS_PAGE,
} from '../const';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    window.onload = () => {
      document.location.hash = '#home';
      this.switchLanguage();
      this.setAnswerHandler();
      this.setEndQuizHandler();

      window.addEventListener('hashchange', this.handleLocation.bind(this));
    };
  }

  handleLocation() {
    const [page, ...rest] = document.location.hash.slice(1).split('=');
    this.model.setLocation(...[page, ...rest]);

    switch (page) {
      case HOME_PAGE:
        this.view.setPage(HOME_PAGE);
        this.view.fillHomePage(this.model.getHomePageData());
        break;
      case SETTINGS_PAGE:
        this.view.setPage(SETTINGS_PAGE);
        this.view.fillSettingsPage(this.model.getSettingsPageData());
        break;
      case CATEGORIES_PAGE:
        this.view.setPage(CATEGORIES_PAGE);
        this.view.fillCategoryPage(this.model.getCategoryPageData());
        break;
      case QUESTIONNS_PAGE:
        this.view.setPage(QUESTIONNS_PAGE);
        this.view.fillQuestionPage(this.model.getQuestionPageData());
        break;
      default:
        this.view.setPage(HOME_PAGE);
        this.view.fillHomePage(this.model.getHomePageData());
    }
  }

  setAnswerHandler() {
    Object.values(this.view.components.answers).forEach((container) => {
      container.querySelectorAll('.answer-btn').forEach((button) => {
        button.addEventListener('click', (e) => this.handleAnswer(e));
      });
    });
  }

  handleAnswer({ target }) {
    const isResultTrue = target.classList.contains('true');

    this.model.saveResult(isResultTrue);
    this.view.hightLightAnswer(target);
    this.view.showTrueAnswer();
    this.view.fillModalWindow(this.model.getModalWindowData());
  }

  handleEndOfQuiz() {
    if (this.model.pageNum === QUESTIONS_PER_CATEGORY - 1) {
      this.view.fillFinalModalWindow(this.model.getFinalModalWindowData());
    }
  }

  setEndQuizHandler() {
    this.view.components.modal
      .querySelector('.modal-next-btn')
      .addEventListener('click', this.handleEndOfQuiz.bind(this));
  }

  switchLanguage() {
    this.view.pages.settings.querySelector('#lang-check').addEventListener('change', (e) => {
      this.model.state.lang = e.target.checked ? LANG_RU : LANG_EN;
      this.model.saveConfig();
      this.view.fillSettingsPage(this.model.getSettingsPageData());
    });
  }
}
