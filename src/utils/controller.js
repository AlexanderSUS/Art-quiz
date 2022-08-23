import {
  CATEGORIES_PAGE,
  IMAGE_URL_FULL,
  IMAGE_URL_SMALL,
  LANG_RU,
  PICTURE_QUIZ,
  QUESTIONNS_PAGE,
  QUESTION_PER_CATEGORY,
  RATING_CONGRATS,
  RATING_GAMEOVER,
  RATING_GRAND,
  RESULT_CONGRATS,
  RESULT_GRAND,
  SETTINGS_PAGE,
} from '../const';

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.lang = model.config.settings.lang;
    this.imagesList = model.quiz.images;
    this.quizDictionary = model.quiz.dictionary;
  }

  init() {
    window.onload = () => {
      document.location.hash = '#home';
      this.fillNavButtonsText();
      this.setAnswerListener();
      this.setShowEndOfGameModal();
      this.setDefaultModalWindow();
      this.loadSettings();
      this.switchLanguage();
      window.addEventListener('hashchange', () => {
        this.model.saveConfig();
        this.model.getLocation();
        this.handleLocation();
      });
    };
  }

  // **** ROUTING FUNCTIONS

  handleLocation() {
    this.view.currentPage.classList.remove('active');

    setTimeout(() => {
      this.view.main.removeChild(this.view.currentPage);
      this.view.currentPage = this.view.pages[this.model.location.page];
      this.view.main.appendChild(this.view.currentPage);
      this.pageProcessor();

      setTimeout(() => {
        this.view.currentPage.classList.add('active');
      }, 300);
    }, 300);
  }

  pageProcessor() {
    this.view.toggleHomePageStyle(this.view.currentPage);

    if (this.model.location.page === SETTINGS_PAGE) {
      this.setSettingsTitles();
    } else if (this.model.location.page === CATEGORIES_PAGE) {
      this.view.cleanPreviousCategories();
      this.fillCategoryPage();
    } else if (this.model.location.pageNum > QUESTION_PER_CATEGORY - 1) {
      document.location.hash = '#home';
    } else if (this.model.location.page === QUESTIONNS_PAGE) {
      this.fillQuestionPage();
    }
    this.fillNavButtonsText();
  }
  // END ROUTING FUNCTIONS ****

  fillCategoryPage() {
    const cards = this.view.pages.categories.querySelectorAll('.card');
    const titles = this.view.pages.categories.querySelectorAll('.card-title');
    const links = this.view.pages.categories.querySelectorAll('.start-btn');
    const titleContainer = this.view.pages.categories.querySelectorAll('.card-title-container');
    const imageContainer = this.view.pages.categories.querySelectorAll('.image-container');
    const results = this.model.getResults();
    const isNull = (value) => value === null;

    this.model.quiz.categories.forEach((element, index) => {
      const img = new Image();
      img.src = `${IMAGE_URL_SMALL}${element.cover[this.model.location.type]}.jpg`;

      // eslint-disable-next-line operator-linebreak
      titles[index].textContent =
        this.quizDictionary[this.lang].categories[
          Object.keys(this.model.quiz.categories[index])[0]
        ];

      links[index].setAttribute('href', `#questions=${this.model.location.type}=${index}=0`);

      if (!this.model.config.results[this.model.location.type][index].every(isNull)) {
        cards[index].classList.add('played');

        links[index].style.backgroundImage = 'url(/assets/replay.svg)';

        /* create score container */
        const score = document.createElement('div');
        score.classList.add('score');
        score.textContent = `${results[index]}/10`;
        titleContainer[index].append(score);

        /* create reusult btn */
        const resultBtn = document.createElement('a');
        resultBtn.setAttribute('href', `#results=${this.model.location.type}=${index}`);
        resultBtn.classList.add('category-result-btn');
        // eslint-disable-next-line operator-linebreak
        resultBtn.textContent = this.quizDictionary[this.lang].titles.results;
        imageContainer[index].appendChild(resultBtn);

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

  fillNavButtonsText() {
    const buttons = this.view.currentPage.querySelectorAll('.nav-btn');
    buttons.forEach((btn) => {
      // eslint-disable-next-line operator-linebreak
      btn.textContent = this.quizDictionary[this.lang].buttons[btn.classList[0]];
    });
  }

  fillQuestionPage() {
    this.view.cleanPreviousAnswers();
    this.view.hideModalwindow();
    this.model.getAnswers();
    this.model.shuffleAnswers();
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
    this.view.currentModalWindow.querySelector(
      '.modal-image',
    ).style.backgroundImage = `url(${IMAGE_URL_FULL}${
      this.imagesList[this.model.answers[this.model.location.pageNum].true]
    }full.jpg)`;

    // eslint-disable-next-line operator-linebreak
    this.view.currentModalWindow.querySelector('.modal-picture-name').textContent =
      this.imagesList[this.model.answers[this.model.location.pageNum].true].picture[this.lang];

    // eslint-disable-next-line operator-linebreak
    this.view.currentModalWindow.querySelector('.modal-author').textContent =
      this.imagesList[this.model.answers[this.model.location.pageNum].true].author[this.lang];

    // eslint-disable-next-line operator-linebreak
    this.view.currentModalWindow.querySelector('.modal-year').textContent =
      this.imagesList[this.model.answers[this.model.location.pageNum].true].year;
  }

  fillEndOfGameModal() {
    const varyBtn = this.view.currentModalWindow.querySelector('.modal-vary-btn');
    const results = this.model.getResults();
    const rating = this.getRating(results);

    this.setEndOfGameTitle(rating);
    this.setEndOfGamePicture(rating);

    this.view.currentModalWindow.querySelector('.end-of-game-score').textContent = `${
      results[this.model.location.categoryId]
    }/${this.model.quiz.questions.perCategory}`;

    if (results[this.model.location.categoryId] > this.model.quiz.questions.gameover) {
      varyBtn.setAttribute(
        'href',
        `#questions=${this.model.location.type}=${this.model.location.categoryId + 1}=0`,
      );
      varyBtn.textContent = this.quizDictionary[this.model.config.lang].buttons.nextQuiz;
    } else {
      varyBtn.setAttribute(
        'href',
        `#questions=${this.model.location.type}=${this.model.location.categoryId}=0`,
      );
      // eslint-disable-next-line operator-linebreak
      varyBtn.textContent = this.quizDictionary[this.lang].buttons.playAgain;
    }
  }

  appendAnswersContainer() {
    this.view.currentPage.appendChild(this.view.components.answers[this.model.location.type]);
  }

  setAnswerListener() {
    this.view.components.answers.artist.querySelectorAll('.answer-btn').forEach((button) => {
      this.higthLightAnswers(button);
    });
    this.view.components.answers.picture.querySelectorAll('.answer-btn').forEach((button) => {
      this.higthLightAnswers(button);
    });
  }

  setDefaultModalWindow() {
    this.view.components.modalEndOfGame
      .querySelectorAll('.modal-back-btn, .modal-vary-btn')
      .forEach((element) => {
        element.addEventListener('click', () => {
          this.view.hideModalwindow();
          this.changeCurrentModalWindow();
        });
      });
  }

  getRating(result) {
    if (result[this.model.location.categoryId] === RESULT_GRAND) {
      return RATING_GRAND;
    }

    if (result[this.model.location.categoryId] < RESULT_CONGRATS) {
      return RATING_GAMEOVER;
    }

    return RATING_CONGRATS;
  }

  setEndOfGamePicture(result) {
    this.view.currentModalWindow.querySelector(
      '.end-of-game-image',
    ).style.backgroundImage = `url(./assets/${result}.svg)`;
  }

  setEndOfGameTitle(result) {
    // eslint-disable-next-line operator-linebreak
    this.view.currentModalWindow.querySelector('.end-of-game-title').textContent =
      this.quizDictionary[this.lang].titles[result];
  }

  setRouteToBackBnts() {
    this.view.currentPage.querySelectorAll('.back-btn, .modal-back-btn').forEach((element) => {
      element.setAttribute('href', `#categories=${this.model.location.type}`);
    });
  }

  setRouteToModal() {
    this.view.currentModalWindow
      .querySelector('.modal-next-btn')
      .setAttribute(
        'href',
        `#questions=${this.model.location.type}=${this.model.location.categoryId}=${
          this.model.location.pageNum < this.model.quiz.questions.perCategory - 1
            ? +this.model.location.pageNum + 1
            : this.model.location.pageNum
        }`,
      );
  }

  setShowEndOfGameModal() {
    this.view.components.modal.querySelector('.modal-next-btn').addEventListener('click', () => {
      if (this.model.isLastQuestion()) {
        this.view.removeModalWindow();
        this.changeCurrentModalWindow();
        this.fillEndOfGameModal();
        this.view.appendModalWindow();
        this.setRouteToBackBnts();
        this.fillNavButtonsText();
        this.view.showModalWindow();
      }
    });
  }

  insertQuestion() {
    // eslint-disable-next-line operator-linebreak
    this.view.currentPage.querySelector('h4').textContent =
      this.quizDictionary[this.lang].question[this.model.location.type];
  }

  insertPictures() {
    this.view.currentPage.querySelectorAll('.picture').forEach((element, index) => {
      this.addPicture(element, index);
      this.addPictureId(element, index);
    });
  }

  insertAuthors() {
    const targets = this.view.currentPage.querySelectorAll('.artist');
    for (let i = 0, j = 0; i < targets.length; i++) {
      if (targets[i].textContent.includes('__artist__')) {
        targets[i].textContent = targets[i].textContent.replace(
          '__artist__',
          this.imagesList[this.model.answers[this.model.location.pageNum].all[j++]].author[
            this.lang
          ],
        );
      }
    }
  }

  addPicture(element, index) {
    const img = new Image();
    img.src = `${IMAGE_URL_FULL}${
      PICTURE_QUIZ
        ? this.imagesList[this.model.answers[this.model.location.pageNum].all[index]].imageNum
        : this.imagesList[this.model.answers[this.model.location.pageNum].true].imageNum
    }full.jpg`;
    img.onload = () => {
      element.style.backgroundImage = `url(${img.src})`;
    };
  }

  addPictureId(element, index) {
    element.setAttribute(
      'data-picture-id',
      `${
        this.model.location.type === this.model.quiz.types.picture
          ? this.model.answers[this.model.location.pageNum].all[index].picture
          : this.model.answers[this.model.location.pageNum].true.picture
      }`,
    );
  }

  changeCurrentModalWindow() {
    // eslint-disable-next-line operator-linebreak
    this.view.currentModalWindow =
      this.view.currentModalWindow === this.view.components.modal
        ? this.view.components.modalEndOfGame
        : this.view.components.modal;
  }

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

  // ENDED REFACTOR ON THIS FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  markTrueAnswer() {
    this.view.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      if (
        element.textContent ===
          this.imagesList[this.model.answers[this.model.location.pageNum].true]
        || element.getAttribute('data-picture-id')
          === this.model.answers[this.model.location.pageNum].true
      ) {
        element.classList.add('true');
        this.view.trueElement = element;
      }
    });
  }

  setSettingsTitles() {
    // eslint-disable-next-line operator-linebreak
    document.querySelector('.lang-title').textContent =
      this.quizDictionary[this.lang].buttons.language;
    // eslint-disable-next-line operator-linebreak
    document.querySelector('.time-check-title').textContent =
      this.quizDictionary[this.lang].buttons.timeGame;
    // eslint-disable-next-line operator-linebreak
    document.querySelector('.time-value-title').textContent =
      this.quizDictionary[this.lang].buttons.timeToAnswer;
  }

  switchLanguage() {
    this.view.pages.settings.querySelector('#lang-check').addEventListener('change', (e) => {
      if (e.target.checked) {
        this.lang = this.model.quiz.language.ru;
      } else {
        this.lang = this.model.quiz.language.en;
      }
      this.setSettingsTitles();
      this.fillNavButtonsText();
      this.model.saveConfig();
    });
  }

  loadSettings() {
    // eslint-disable-next-line operator-linebreak
    this.view.pages.settings.querySelector('#lang-check').checked = this.lang === LANG_RU;
  }
}
