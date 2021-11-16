export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.currentHash = '#home';
  }

  initChangePages() {
    /* for initialization set window.onload = () => {
      window.addEventListener('hashchange', () => {}) */
    document.location.hash = this.currentHash;
    window.onload = () => {
      window.addEventListener('hashchange', () => {
        const hash = document.location.hash;
        let nextPage;
        if (hash === '#home') {
          nextPage = this.view.pages.home;
        } else if (hash === '#settings') {
          nextPage = this.view.pages.settings;
        } else if (hash === '#artist' || hash === '#picture') {
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
}
