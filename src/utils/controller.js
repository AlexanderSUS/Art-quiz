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
    const isLastQuestion = this.model.isLastQuestion.bind(this.model);
    this.model.getAnswers();

    this.view.fillQuestionPage(
      this.model.location,
      this.model.state.results,
      this.model.answers,
      isLastQuestion,
      dictionary[this.lang],
      this.lang,
    );
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
