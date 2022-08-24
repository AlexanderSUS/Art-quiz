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

  toggleHomePageStyle(element) {
    if (element.classList.contains('at-home')) {
      if (!this.components.header.classList.contains('at-home')) {
        this.components.header.classList.add('at-home');
        this.main.classList.add('at-home');
      }
    } else if (this.components.header.classList.contains('at-home')) {
      this.components.header.classList.remove('at-home');
      this.main.classList.remove('at-home');
    }
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
    this.components.modal.querySelector('.modal-image').classList.remove('true');
    this.components.modal.querySelector('.modal-image').classList.remove('false');
    this.components.modal.querySelector('.modal-image').classList.add(answer);
  }

  clearAnswerClasses() {
    this.currentPage.querySelector('.variants').classList.remove('expose');
    this.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      element.classList.remove('picked');
      element.classList.remove('true');
    });
  }

  showTrueAnswer() {
    setTimeout(() => {
      this.currentPage.querySelector('.variants').classList.add('expose');
    }, 300);
  }
}
