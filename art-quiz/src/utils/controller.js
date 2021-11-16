export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.currentHash = '#home';
    this.quizType = null;
    this.quizCategory = null;
    this.coverLoaded = { artist: false, picture: false };
  }

  initChangePages() {
    document.location.hash = this.currentHash;
    window.onload = () => {
      window.addEventListener('hashchange', () => {
        const hash = document.location.hash;
        let nextPage;
        if (hash === '#home') {
          nextPage = this.view.pages.home;
        } else if (hash === '#settings') {
          nextPage = this.view.pages.settings;
        } else if (hash === '#artist') {
          this.quizType = 'artist';
          this.stuffCategoryPage();
          nextPage = this.view.pages.categories;
        } else if (hash === '#picture') {
          this.quizType = 'picture';
          this.stuffCategoryPage();
          nextPage = this.view.pages.categories;
        } else {
          nextPage = this.view.pages.home;
        }

        this.view.currentPage.classList.remove('active');
        setTimeout(() => {
          this.view.currentPage.parentNode.removeChild(this.view.currentPage);
          this.view.currentPage = nextPage;
          document.querySelector('main').appendChild(nextPage);
          this.view.toggleHomePageStyle(nextPage);
          setTimeout(() => {
            nextPage.classList.add('active');
          }, 300);
        }, 300);

        this.currentHash = document.location.hash;
      });
    };
  }

  stuffCategoryPage() {
    const cards = this.view.pages.categories.querySelectorAll('.card');
    const titleContainers = this.view.pages.categories.querySelectorAll('.card-title-container');
    const titles = this.view.pages.categories.querySelectorAll('.card-title');
    const links = this.view.pages.categories.querySelectorAll('a.main-link');
    this.model.quiz[this.quizType].forEach((element, i) => {
      const img = new Image();
      img.src = `${this.model.imgUrl}${element.coverUrl}.jpg`;

      titles[i].textContent = element.genre;
      links[i].setAttribute('href', `#quesions=${this.quizType}=${i + 1}`);
      if (element.palayed) {
        cards[i].classList.add('played');
        const score = document.createElement('div');
        score.textContent = `${element.score}/10`;
        titleContainers[i].appendChild(score);
        const resultLink = document.createElement('a');
        resultLink.setAttribute('href', `#results=${this.quizType}=${i + 1}`);
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
}
