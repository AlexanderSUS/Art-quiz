import dictionary from './dictionary';
import {
  ARTIST_QUIZ,
  CATEGORIES_PAGE,
  LANG_EN,
  LANG_RU,
  QUESTIONNS_PAGE,
  QUESTIONS_PER_CATEGORY,
  RESULT_GAMEOVER,
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
        this.setShowEndOfGameModal();
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
    this.view.cleanPreviousAnswers();
    this.view.hideModalwindow();
    this.model.getAnswers(this.model.location.quizType);
    this.setRouteToBackBnts();
    this.insertQuestion();
    this.view.appendAnswersContainer(this.model.location.quizType);
    this.insertPictures();
    this.view.insertAuthors(this.model.location.quizType, this.model.answers, this.lang);
    this.setRouteToModal();
    this.view.markTrueAnswer(this.model.answers);
    this.view.appendModalWindow();
  }

  fillEndOfGameModal() {
    const { quizType, categoryId } = this.model.location;
    const varyBtn = this.view.currentModalWindow.querySelector('.modal-vary-btn');

    const categoryResults = this.model.state.results[quizType][categoryId];

    const result = categoryResults.filter((res) => res === true).length;

    const rating = this.model.getRating(result);

    this.setEndOfGameTitle(rating);
    this.setEndOfGamePicture(rating);

    this.view.currentModalWindow.querySelector(
      '.end-of-game-score',
    ).textContent = `${result}/${QUESTIONS_PER_CATEGORY}`;

    if (result > RESULT_GAMEOVER) {
      varyBtn.setAttribute('href', `#questions=${quizType}=${categoryId + 1}=0`);

      varyBtn.textContent = dictionary[this.model.state.lang].buttons.nextQuiz;
    } else {
      varyBtn.setAttribute('href', `#questions=${quizType}=${categoryId}=0`);
      varyBtn.textContent = dictionary[this.lang].buttons.playAgain;
    }
  }

  setEndOfGamePicture(result) {
    this.view.currentModalWindow.querySelector(
      '.end-of-game-image',
    ).style.backgroundImage = `url(./assets/${result}.svg)`;
  }

  setEndOfGameTitle(result) {
    // eslint-disable-next-line operator-linebreak
    this.view.currentModalWindow.querySelector('.end-of-game-title').textContent =
      dictionary[this.lang].titles[result];
  }

  setRouteToBackBnts() {
    this.view.currentPage.querySelectorAll('.back-btn, .modal-back-btn').forEach((element) => {
      element.setAttribute('href', `#categories=${this.model.location.quizType}`);
    });
  }

  setRouteToModal() {
    this.view.components.modal
      .querySelector('.modal-next-btn')
      .setAttribute(
        'href',
        `#questions=${this.model.location.quizType}=${this.model.location.categoryId}=${
          this.model.isLastQuestion()
            ? this.model.location.pageNum
            : +this.model.location.pageNum + 1
        }`,
      );
  }

  setShowEndOfGameModal() {
    this.view.components.modal.querySelector('.modal-next-btn').addEventListener(
      'click',
      () => {
        if (this.model.isLastQuestion()) {
          this.view.removeModalWindow();
          this.view.changeCurrentModalWindow();
          this.fillEndOfGameModal();
          this.view.appendModalWindow();
          this.setRouteToBackBnts();
          this.view.fillNavButtonsText(dictionary[this.lang]);
          this.view.showModalWindow();
        }
      },
      { once: true },
    );
  }

  insertQuestion() {
    const { quizType } = this.model.location;
    const question = dictionary[this.lang].question[quizType];

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
