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
    if (this.model.location.page === Object.keys(this.view.pages)[2]) {
      this.fillCategoryPage();
    } else if (this.model.location.page === Object.keys(this.view.pages)[3]) {
      this.fillQuestionPage();
    }
  }

  fillCategoryPage() {
    const cards = this.view.pages.categories.querySelectorAll('.card');
    const titleContainers = this.view.pages.categories.querySelectorAll('.card-title-container');
    const titles = this.view.pages.categories.querySelectorAll('.card-title');
    const links = this.view.pages.categories.querySelectorAll('a.main-link');

    this.model.quiz.covers[this.model.location.type].forEach((element, index) => {
      const img = new Image();
      img.src = `${this.model.quiz.images.url.small}${element.id}.jpg`;

      titles[index].textContent = element.category;
      links[index].setAttribute('href', `#questions=${this.model.location.type}=${index}=0`);

      if (element.palayed) {
        cards[index].classList.add('played');

        const score = document.createElement('div');
        score.textContent = `${element.score}/10`;

        titleContainers[index].appendChild(score);

        const resultLink = document.createElement('a');
        resultLink.setAttribute('href', `#results=${this.model.location.type}=${index}`);
        resultLink.classList.add('category-result-btn');
        cards[index].appendChild(resultLink);

        img.onload = () => {
          links[index].style.backgroundImage = `url(${img.src})`;
        };
      } else {
        img.onload = () => {
          links[index].style.backgroundImage = `linear-gradient(black, black), url(${img.src})`;
        };
      }
    });
  }

  fillQuestionPage() {
    this.view.cleanPreviousAnswers();
    this.view.closeModalwindow();
    this.model.shuffleAnswers();
    this.setRouteToBackBtn();
    this.insertQuestion();
    this.appendAnswersContainer();
    this.insertPictures();
    this.insertAuthors();
    this.markTrueAnswer();
    this.setRouteToModalWindow();
    this.view.appendModalWindow();
    this.view.setAnswerListener();
  }

  appendAnswersContainer() {
    this.view.currentPage.appendChild(this.view.components.answers[this.model.location.type]);
  }

  setRouteToBackBtn() {
    this.view.currentPage
      .querySelector('.back-btn')
      .setAttribute('href', `#categories=${this.model.location.type}`);
  }

  setRouteToModalWindow() {
    this.view.components.modal
      .querySelector('.modal-btn')
      .setAttribute(
        'href',
        `#questions=${this.model.location.type}=${this.model.location.categoryId}=${
          +this.model.location.pageNum + 1
        }`,
      );
  }

  insertQuestion() {
    // eslint-disable-next-line operator-linebreak
    this.view.currentPage.querySelector('h4').textContent =
      this.model.quiz.dictionary[this.model.config.lang].question[this.model.location.type];
  }

  insertPictures() {
    this.view.currentPage.querySelectorAll('.picture').forEach((element, index) => {
      this.addPicture(element, index);
      this.addPictureNameAttribute(element, index);
    });
  }

  insertAuthors() {
    const targets = this.view.currentPage.querySelectorAll('.artist');
    for (let i = 0, j = 0; i < targets.length; i++) {
      if (targets[i].textContent.includes('__artist__')) {
        targets[i].textContent = targets[i].textContent.replace(
          '__artist__',
          this.model.answers[this.model.location.pageNum].all[j++].author,
        );
      }
    }
  }

  markTrueAnswer() {
    this.view.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      if (
        // eslint-disable-next-line operator-linebreak
        element.textContent ===
          // eslint-disable-next-line operator-linebreak
          this.model.answers[this.model.location.pageNum].true[element.classList[0]] ||
        // eslint-disable-next-line operator-linebreak
        element.getAttribute('data-picture-name') ===
          this.model.answers[this.model.location.pageNum].true[element.classList[0]]
      ) {
        element.classList.add('true');
        // console.log(this.model.answers[this.model.location.pageNum].true[element.classList[0]]);
      }
    });
  }

  addPicture(element, index) {
    const img = new Image();
    img.src = `${this.model.quiz.images.url.full}${
      this.model.location.type === this.model.quiz.types.picture
        ? this.model.answers[this.model.location.pageNum].all[index].imageNum
        : this.model.answers[this.model.location.pageNum].true.imageNum
    }full.jpg`;
    img.onload = () => {
      element.style.backgroundImage = `url(${img.src})`;
    };
  }

  addPictureNameAttribute(element, index) {
    element.setAttribute(
      'data-picture-name',
      `${
        this.model.location.type === this.model.quiz.types.picture
          ? this.model.answers[this.model.location.pageNum].all[index].picture
          : this.model.answers[this.model.location.pageNum].true.picture
      }`,
    );
  }
}
