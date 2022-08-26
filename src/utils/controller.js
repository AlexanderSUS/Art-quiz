import dictionary from './dictionary';
import {
  ARTIST_QUIZ,
  CATEGORIES_PAGE,
  IMAGE_URL_FULL,
  IMAGE_URL_SMALL,
  LANG_EN,
  LANG_RU,
  PICTURE_QUIZ,
  QUESTIONNS_PAGE,
  QUESTIONS_PER_CATEGORY,
  RESULT_GAMEOVER,
  SETTINGS_PAGE,
} from '../const';
import categories from './categories';
import addPicture from '../helpers/addPicture';
import getIndexesOfPlayedCategories from '../helpers/getIndexesOfPlayedCategories';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.lang = model.state.settings.lang;
  }

  init() {
    window.onload = () => {
      document.location.hash = '#home';
      this.setAnswerListener();
      this.setShowEndOfGameModal();
      this.view.setDefaultModalWindow();
      this.loadSettings();
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
        this.setSettingsTitles();
        break;
      case CATEGORIES_PAGE:
        this.fillCategoryPage();
        break;
      case QUESTIONNS_PAGE:
        this.fillQuestionPage();
        break;
      default:
        document.location.hash = '#home';
    }

    this.fillNavButtonsText();
  }

  fillCategoryPage() {
    const { quizType } = this.model.location;

    this.view.cleanPreviousCategories();

    const imageContainer = this.view.pages.categories.querySelectorAll('.image-container');
    const links = this.view.pages.categories.querySelectorAll('.start-btn');
    const titles = this.view.pages.categories.querySelectorAll('.card-title');
    const results = this.model.state.results[quizType];
    const played = getIndexesOfPlayedCategories(results);
    const { categories: dictionaryCategories } = dictionary[this.lang];

    categories.forEach((element, index) => {
      const img = new Image();
      const [genre] = Object.keys(categories[index]);

      img.src = `${IMAGE_URL_SMALL}${element.cover[quizType]}.jpg`;

      titles[index].textContent = dictionaryCategories[genre];

      links[index].setAttribute('href', `#questions=${quizType}=${index}=0`);

      if (played.includes(index)) {
        this.fillPlayedCategory(index, results[index]);

        img.onload = () => {
          imageContainer[index].style.backgroundImage = `url(${img.src})`;
        };
      } else {
        img.onload = () => {
          imageContainer[
            index
          ].style.backgroundImage = `linear-gradient(black, black), url(${img.src})`;
        };
      }
    });
  }

  fillPlayedCategory(categoryNum, categoryResults) {
    const imageContainer = this.view.pages.categories.querySelectorAll('.image-container');
    const links = this.view.pages.categories.querySelectorAll('.start-btn');
    const cards = this.view.pages.categories.querySelectorAll('.card');
    const score = document.querySelectorAll('.score');

    cards[categoryNum].classList.add('played');
    links[categoryNum].style.backgroundImage = 'url(/assets/replay.svg)';
    score[categoryNum].textContent = `${
      categoryResults.filter((element) => element === true).length
    }/${QUESTIONS_PER_CATEGORY}`;

    const resultBtn = document.createElement('a');
    resultBtn.setAttribute('href', `#results=${this.model.location.quizType}=${categoryNum}`);
    resultBtn.classList.add('category-result-btn');
    resultBtn.textContent = dictionary[this.lang].titles.results;

    imageContainer[categoryNum].appendChild(resultBtn);
    imageContainer[categoryNum].style.backgroundImage = 'none';
  }

  fillNavButtonsText() {
    const buttons = this.view.currentPage.querySelectorAll('.nav-btn');

    buttons.forEach((btn) => {
      btn.textContent = dictionary[this.lang].buttons[btn.classList[0]];
    });
  }

  fillQuestionPage() {
    this.view.cleanPreviousAnswers();
    this.view.hideModalwindow();
    this.model.getAnswers();
    this.setRouteToBackBnts();
    this.insertQuestion();
    this.appendAnswersContainer();
    this.insertPictures();
    this.insertAuthors();
    this.setRouteToModal();
    this.markTrueAnswer();
    this.view.appendModalWindow();
  }

  fillModal() {
    const { currentModalWindow } = this.view;
    const { author, imageNum, picture, year } = this.model.answers.trueAnswer;

    const modalImage = currentModalWindow.querySelector('.modal-image');
    modalImage.style.backgroundImage = `url(${IMAGE_URL_FULL}${imageNum}full.jpg)`;

    currentModalWindow.querySelector('.modal-picture-name').textContent = picture[this.lang];
    currentModalWindow.querySelector('.modal-author').textContent = author[this.lang];
    currentModalWindow.querySelector('.modal-year').textContent = year;
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

  appendAnswersContainer() {
    this.view.currentPage.appendChild(this.view.components.answers[this.model.location.quizType]);
  }

  setAnswerListener() {
    this.view.components.answers.artist.querySelectorAll('.answer-btn').forEach((button) => {
      this.higthLightAnswers(button);
    });

    this.view.components.answers.picture.querySelectorAll('.answer-btn').forEach((button) => {
      this.higthLightAnswers(button);
    });
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
    this.view.currentModalWindow
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
    this.view.components.modal.querySelector('.modal-next-btn').addEventListener('click', () => {
      if (this.model.isLastQuestion()) {
        this.view.removeModalWindow();
        this.view.changeCurrentModalWindow();
        this.fillEndOfGameModal();
        this.view.appendModalWindow();
        this.setRouteToBackBnts();
        this.fillNavButtonsText();
        this.view.showModalWindow();
      }
    });
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

  insertAuthors() {
    const [header, ...answers] = Array.from(this.view.currentPage.querySelectorAll('.artist'));
    const trueAuthor = this.model.answers.trueAnswer.author[this.lang];

    if (this.model.location.quizType === PICTURE_QUIZ) {
      header.textContent = header.textContent.replace('__artist__', trueAuthor);

      return;
    }

    answers.forEach((answer, index) => {
      answer.textContent = this.model.answers.all[index].author[this.lang];
    });
  }

  // TODO move to view class
  higthLightAnswers(button) {
    button.addEventListener('click', (e) => {
      e.target.classList.add('picked');

      this.model.pickResult(e.target.classList.contains('true'));

      this.view.addCheckmarkToModal(e.target.classList.contains('true'));
      this.view.showTrueAnswer();
      this.fillModal();
      this.view.showModalWindow(e.target.classList.contains('true'));
    });
  }

  // TO DO move to view class
  markTrueAnswer() {
    const answerBtns = this.view.currentPage.querySelectorAll('.answer-btn');
    const { all, trueAnswer } = this.model.answers;
    const trueAnswerIndex = all.findIndex((answer) => answer.imageNum === trueAnswer.imageNum);

    answerBtns[trueAnswerIndex].classList.add('true');
  }

  // TODO move to view class
  setSettingsTitles() {
    document.querySelector('.lang-title').textContent = dictionary[this.lang].buttons.language;
    // eslint-disable-next-line operator-linebreak
    document.querySelector('.time-check-title').textContent =
      dictionary[this.lang].buttons.timeGame;
    // eslint-disable-next-line operator-linebreak
    document.querySelector('.time-value-title').textContent =
      dictionary[this.lang].buttons.timeToAnswer;
  }

  switchLanguage() {
    this.view.pages.settings.querySelector('#lang-check').addEventListener('change', (e) => {
      this.lang = e.target.checked ? LANG_RU : LANG_EN;

      this.setSettingsTitles();
      this.fillNavButtonsText();
      this.model.saveConfig();
    });
  }

  // TODO move to view class
  loadSettings() {
    this.view.pages.settings.querySelector('#lang-check').checked = this.lang === LANG_RU;
  }
}
