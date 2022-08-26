import { HOME_PAGE, SETTINGS_PAGE } from '../const';

export default class View {
  constructor(pages, components) {
    this.app = document.querySelector('#root');
    this.pages = pages;
    this.components = components;
    this.currentPage = this.pages.home;
    this.currentModalWindow = this.components.modal;
    this.main = document.createElement('main');
    this.main.classList.add('at-home');
    this.main.append(this.currentPage);
    this.app.append(this.components.header, this.main, this.components.footer);
  }

  switchPage(newPage) {
    this.currentPage.classList.remove('active');

    this.main.removeChild(this.currentPage);
    this.currentPage = this.pages[newPage];
    this.main.appendChild(this.currentPage);

    // setTimeout(() => {
    if (newPage === HOME_PAGE || newPage === SETTINGS_PAGE) {
      this.components.header.classList.add('at-home');
      this.main.classList.add('at-home');
    } else {
      this.components.header.classList.remove('at-home');
      this.main.classList.remove('at-home');
    }

    // setTimeout(() => {
    this.currentPage.classList.add('active');
    // }, 300);
    // }, 300);
  }

  cleanPreviousAnswers() {
    const variants = this.pages.questions.querySelector('.variants');
    if (typeof variants !== 'undefined' && variants !== null) {
      this.repairAnswerTemplate();
      this.clearAnswerClasses();
      this.pages.questions.removeChild(variants);
    }
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
        element.addEventListener('click', () => {
          this.hideModalwindow();
          this.changeCurrentModalWindow();
        });
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
