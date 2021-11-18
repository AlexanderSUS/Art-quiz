export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  initChangePages() {
    window.onload = () => {
      window.addEventListener('hashchange', () => {
        this.model.getLocation();
        this.pageChanger();
      });
    };
  }

  pageChanger() {
    this.view.currentPage.classList.remove('active');
    setTimeout(() => {
      this.view.currentPage.parentNode.removeChild(this.view.currentPage);
      this.view.currentPage = this.view.pages[this.model.location.page];
      document.querySelector('main').appendChild(this.view.pages[this.model.location.page]);
      this.pageFiller();
      setTimeout(() => {
        this.view.pages[this.model.location.page].classList.add('active');
      }, 300);
    }, 300);
  }

  pageFiller() {
    this.view.toggleHomePageStyle(this.view.pages[this.model.location.page]);
    if (this.model.location.page === Object.keys(this.view.pages)[2]) {
      this.stuffCategoryPage();
    }
  }

  stuffCategoryPage() {
    const cards = this.view.pages.categories.querySelectorAll('.card');
    const titleContainers = this.view.pages.categories.querySelectorAll('.card-title-container');
    const titles = this.view.pages.categories.querySelectorAll('.card-title');
    const links = this.view.pages.categories.querySelectorAll('a.main-link');
    this.model.quiz.covers[this.model.location.type].forEach((element, i) => {
      const img = new Image();
      img.src = `${this.model.quiz.images.url.small}${element.id}.jpg`;

      titles[i].textContent = element.category;
      links[i].setAttribute('href', `#questions=${this.model.location.type}=${i}`);
      if (element.palayed) {
        // cards[i].classList.add('played');
        const score = document.createElement('div');
        score.textContent = `${element.score}/10`;
        titleContainers[i].appendChild(score);
        const resultLink = document.createElement('a');
        resultLink.setAttribute('href', `#results=${this.model.location.type}=${i}`);
        resultLink.classList.add('category-result-btn');
        cards[i].appendChild(resultLink);
        img.onload = () => {
          links[i].style.backgroundImage = `url(${img.src})`;
        };
      } else {
        img.onload = () => {
          links[i].style.backgroundImage = `linear-gradient(black, black), url(${img.src})`;
        };
      }
    });
  }

  // stuffQuestionsPage() {

  //   if (this.model.location.type == "artist") {

  //   }
  // }
}
