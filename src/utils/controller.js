import dictionary from './dictionary';
import {
  CATEGORIES_PAGE,
  HOME_PAGE,
  LANG_EN,
  LANG_RU,
  QUESTIONNS_PAGE,
  SETTINGS_PAGE,
} from '../const';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.lang = model.state.settings.lang;
  }

  init() {
    window.onload = () => {
      document.location.hash = '#home';
      this.switchLanguage();

      window.addEventListener('hashchange', this.handleLocation.bind(this));
    };
  }

  handleLocation() {
    const [page, quizType, categoryId, pageNum] = document.location.hash.slice(1).split('=');
    this.model.saveConfig();

    switch (page) {
      case HOME_PAGE:
        this.view.setPage(HOME_PAGE);
        this.view.fillHomePage(dictionary[this.lang]);
        break;
      case SETTINGS_PAGE:
        this.view.setPage(SETTINGS_PAGE);
        this.view.fillSettingsPage(dictionary[this.lang]);
        break;
      case CATEGORIES_PAGE:
        this.view.setPage(CATEGORIES_PAGE);
        this.view.fillCategoryPage(
          quizType,
          this.model.state.results[quizType],
          dictionary[this.lang],
        );
        break;
      case QUESTIONNS_PAGE:
        this.model.getAnswers(quizType, categoryId, pageNum);
        this.view.setPage(QUESTIONNS_PAGE);
        this.view.fillQuestionPage(
          { page, quizType, categoryId, pageNum },
          this.model.state.results,
          this.model.answers,
          dictionary[this.lang],
          this.lang,
          this.model.saveResult(quizType, categoryId, pageNum).bind(this.model),
        );
        break;
      default:
        this.view.setPage(HOME_PAGE);
        this.view.fillHomePage(dictionary[this.lang]);
    }
  }

  switchLanguage() {
    this.view.setLangButton(this.lang);

    this.view.pages.settings.querySelector('#lang-check').addEventListener('change', (e) => {
      this.lang = e.target.checked ? LANG_RU : LANG_EN;

      this.view.setSettingsTitles(dictionary[this.lang]);
      this.view.fillNavButtonsText(dictionary[this.lang]);
      this.model.saveConfig();
    });
  }
}
