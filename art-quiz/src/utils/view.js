export default class View {
  constructor(pages, components) {
    this.app = document.querySelector('#root');
    this.pages = pages;
    this.components = components;
    this.currentPage = this.pages.home;
    this.main = document.createElement('main');
    this.main.classList.add('home');
    this.main.append(this.currentPage);
    this.app.append(this.components.header, this.main, this.components.footer);
  }

  toggleHomePageStyle(element) {
    if (element.classList.contains('home')) {
      if (!this.components.header.classList.contains('home')) {
        this.components.header.classList.add('home');
        this.main.classList.add('home');
      }
    } else if (this.components.header.classList.contains('home')) {
      this.components.header.classList.remove('home');
      this.main.classList.remove('home');
    }
  }

  cleanPreviousAnswers() {
    const variants = this.pages.questions.querySelector('.variants');
    if (typeof variants !== 'undefined' && variants != null) {
      this.repairAnswerTemplate();
      this.clearClasses();
      this.pages.questions.removeChild(variants);
    }
  }

  repairAnswerTemplate() {
    this.pages.questions.querySelectorAll('.answer-btn.artist').forEach((element) => {
      element.textContent = '__artist__';
    });
  }

  appendModalWindow() {
    this.currentPage.appendChild(this.components.modal);
  }

  showModalWindow() {
    this.components.modal.classList.add('show');
  }

  closeModalwindow() {
    this.components.modal.classList.remove('show');
  }

  setAnswerListener() {
    this.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      element.addEventListener('click', (e) => {
        e.target.classList.add('picked');

        this.currentPage.querySelector('.variants').classList.add('expose');

        setTimeout(() => {
          this.showModalWindow();
        }, 500);
      });
    });
  }

  clearClasses() {
    this.currentPage.querySelector('.variants').classList.remove('expose');
    this.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      element.classList.remove('picked');
      element.classList.remove('true');
    });
  }
}
