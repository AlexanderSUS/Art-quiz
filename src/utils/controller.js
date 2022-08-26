import dictionary from './dictionary';
import { CATEGORIES_PAGE, LANG_EN, LANG_RU, QUESTIONNS_PAGE, SETTINGS_PAGE } from '../const';

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
    this.model.setLocation();
    this.model.saveConfig();
    this.view.switchPage(this.model.location.page);

    switch (this.model.location.page) {
      case SETTINGS_PAGE:
        this.view.setSettingsTitles(dictionary[this.lang]);
        break;
      case CATEGORIES_PAGE:
        this.view.fillCategoryPage(
          this.model.location.quizType,
          this.model.state.results[this.model.location.quizType],
          dictionary[this.lang],
        );
        break;
      case QUESTIONNS_PAGE:
        this.model.getAnswers();
        this.view.fillQuestionPage(
          this.model.location,
          this.model.state.results,
          this.model.answers,
          this.model.isLastQuestion.bind(this.model),
          dictionary[this.lang],
          this.lang,
          this.model.saveResult.bind(this.model),
        );
        break;
      default:
        document.location.hash = '#home';
    }

    this.view.fillNavButtonsText(dictionary[this.lang]);
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
