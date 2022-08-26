import {
  HOME_PAGE,
  IMAGE_URL_FULL,
  IMAGE_URL_SMALL,
  PICTURE_QUIZ,
  QUESTIONS_PER_CATEGORY,
  RESULT_GAMEOVER,
  SETTINGS_PAGE,
} from '../const';
import getIndexesOfPlayedCategories from '../helpers/getIndexesOfPlayedCategories';
import categories from './categories';

export default class View {
  constructor(pages, components) {
    this.app = document.querySelector('#root');
    this.pages = pages;
    this.components = components;
    this.currentPage = this.pages.home;
    this.currentModalWindow = this.components.modal;
    this.components.main.append(this.currentPage);
    this.app.append(this.components.header, this.components.main, this.components.footer);
  }

  switchPage(newPage) {
    this.currentPage.classList.remove('active');

    this.components.main.removeChild(this.currentPage);
    this.currentPage = this.pages[newPage];
    this.components.main.appendChild(this.currentPage);

    // setTimeout(() => {
    if (newPage === HOME_PAGE || newPage === SETTINGS_PAGE) {
      this.components.header.classList.add('at-home');
      this.components.main.classList.add('at-home');
    } else {
      this.components.header.classList.remove('at-home');
      this.components.main.classList.remove('at-home');
    }

    // setTimeout(() => {
    this.currentPage.classList.add('active');
    // }, 300);
    // }, 300);
  }

  fillCategoryPage(quizType, results, dictionary) {
    this.cleanPreviousCategories();

    const imageContainer = this.pages.categories.querySelectorAll('.image-container');
    const links = this.pages.categories.querySelectorAll('.start-btn');
    const titles = this.pages.categories.querySelectorAll('.card-title');
    const played = getIndexesOfPlayedCategories(results);

    categories.forEach((element, index) => {
      const img = new Image();
      const [genre] = Object.keys(categories[index]);

      img.src = `${IMAGE_URL_SMALL}${element.cover[quizType]}.jpg`;

      titles[index].textContent = dictionary.categories[genre];

      links[index].setAttribute('href', `#questions=${quizType}=${index}=0`);

      if (played.includes(index)) {
        this.fillPlayedCategory(quizType, index, results[index], dictionary);

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

  fillPlayedCategory(quizType, categoryNum, categoryResults, dictionary) {
    const imageContainer = this.pages.categories.querySelectorAll('.image-container');
    const links = this.pages.categories.querySelectorAll('.start-btn');
    const cards = this.pages.categories.querySelectorAll('.card');
    const score = document.querySelectorAll('.score');
    cards[categoryNum].classList.add('played');
    links[categoryNum].style.backgroundImage = 'url(/assets/replay.svg)';

    score[categoryNum].textContent = `${
      categoryResults.filter((element) => element === true).length
    }/${QUESTIONS_PER_CATEGORY}`;

    const resultBtn = document.createElement('a');
    resultBtn.setAttribute('href', `#results=${quizType}=${categoryNum}`);
    resultBtn.classList.add('category-result-btn');
    resultBtn.textContent = dictionary.titles.results;

    imageContainer[categoryNum].appendChild(resultBtn);
    imageContainer[categoryNum].style.backgroundImage = 'none';
  }

  cleanPreviousAnswers() {
    const variants = this.pages.questions.querySelector('.variants');
    if (typeof variants !== 'undefined' && variants !== null) {
      this.repairAnswerTemplate();
      this.clearAnswerClasses();
      this.pages.questions.removeChild(variants);
    }
  }

  fillNavButtonsText(dictionary) {
    this.currentPage.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.textContent = dictionary.buttons[btn.classList[0]];
    });
  }

  setSettingsTitles(dictionary) {
    const { language, timeGame, timeToAnswer } = dictionary.buttons;

    this.pages.settings.querySelector('.lang-title').textContent = language;
    this.pages.settings.querySelector('.time-check-title').textContent = timeGame;
    this.pages.settings.querySelector('.time-value-title').textContent = timeToAnswer;
  }

  fillModal({ author, imageNum, picture, year }, lang) {
    const modalImage = this.currentModalWindow.querySelector('.modal-image');
    modalImage.style.backgroundImage = `url(${IMAGE_URL_FULL}${imageNum}full.jpg)`;

    this.currentModalWindow.querySelector('.modal-picture-name').textContent = picture[lang];
    this.currentModalWindow.querySelector('.modal-author').textContent = author[lang];
    this.currentModalWindow.querySelector('.modal-year').textContent = year;
  }

  cleanPreviousCategories() {
    const playedCategories = this.pages.categories.querySelectorAll('.played');

    if (typeof playedCategories !== 'undefined' && playedCategories != null) {
      playedCategories.forEach((element) => {
        element.classList.remove('played');
        element
          .querySelector('.card-title-container')
          .removeChild(element.querySelector('.card-title-container').lastChild);
        element
          .querySelector('.image-container')
          .removeChild(element.querySelector('.image-container').lastChild);
        element.querySelector('.start-btn').style.backgroundImage = null;
      });
    }
  }

  insertAuthors(quizType, { trueAnswer, all }, lang) {
    const [header, ...answersElms] = Array.from(this.currentPage.querySelectorAll('.artist'));

    if (quizType === PICTURE_QUIZ) {
      header.textContent = header.textContent.replace('__artist__', trueAnswer.author[lang]);

      return;
    }

    answersElms.forEach((answer, index) => {
      answer.textContent = all[index].author[lang];
    });
  }

  markTrueAnswer({ all, trueAnswer }) {
    const answerBtns = this.currentPage.querySelectorAll('.answer-btn');
    const trueAnswerIndex = all.findIndex((answer) => answer.imageNum === trueAnswer.imageNum);

    answerBtns[trueAnswerIndex].classList.add('true');
  }

  repairAnswerTemplate() {
    this.pages.questions.querySelectorAll('.answer-btn.artist').forEach((element) => {
      element.textContent = '__artist__';
    });
  }

  appendModalWindow() {
    this.currentPage.appendChild(this.currentModalWindow);
  }

  removeModalWindow() {
    this.currentPage.removeChild(this.currentModalWindow);
  }

  changeCurrentModalWindow() {
    const { modalEndOfGame, modal } = this.components;
    this.currentModalWindow = this.currentModalWindow === modal ? modalEndOfGame : modal;
  }

  setDefaultModalWindow() {
    this.components.modalEndOfGame
      .querySelectorAll('.modal-back-btn, .modal-vary-btn')
      .forEach((element) => {
        element.addEventListener(
          'click',
          () => {
            this.hideModalwindow();
            this.changeCurrentModalWindow();
          },
          { once: true },
        );
      });
  }

  showModalWindow(resultTrue) {
    setTimeout(
      () => {
        this.currentModalWindow.classList.add('show');
      },
      resultTrue ? 300 : 1000,
    );
  }

  appendAnswersContainer(quizType) {
    this.currentPage.appendChild(this.components.answers[quizType]);
  }

  hideModalwindow() {
    this.currentModalWindow.classList.remove('show');
  }

  addCheckmarkToModal(answer) {
    this.components.modal.querySelector('.modal-image').classList.remove('true', 'false');
    this.components.modal.querySelector('.modal-image').classList.add(answer);
  }

  clearAnswerClasses() {
    this.currentPage.querySelector('.variants').classList.remove('expose');
    this.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      element.classList.remove('picked', 'true');
    });
  }

  showTrueAnswer() {
    setTimeout(() => {
      this.currentPage.querySelector('.variants').classList.add('expose');
    }, 300);
  }
}
