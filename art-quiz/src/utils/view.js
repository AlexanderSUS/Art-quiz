export default class View {
  constructor(header, footer, pages) {
    this.app = document.querySelector('#root');
    this.pages = pages;
    this.currentPage = this.pages.home;
    this.header = header;
    this.main = document.createElement('main');
    this.main.classList.add('home');
    this.main.append(this.currentPage);
    this.footer = footer;
    this.app.append(this.header, this.main, this.footer);
  }

  toggleHomePageStyle(element) {
    if (element.classList.contains('home')) {
      if (!this.header.classList.contains('home')) {
        this.header.classList.add('home');
        this.main.classList.add('home');
      }
    } else if (this.header.classList.contains('home')) {
      this.header.classList.remove('home');
      this.main.classList.remove('home');
    }
  }
}
