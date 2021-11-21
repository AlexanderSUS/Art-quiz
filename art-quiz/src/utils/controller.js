export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  initChangePages() {
    window.onload = () => {
      document.location.hash = '#home';
      this.setAnswerListener();
      window.addEventListener('hashchange', () => {
        this.model.getLocation();
        this.handleLocation();
      });
    };
  }

  handleLocation() {
    this.view.currentPage.classList.remove('active');

    setTimeout(() => {
      this.view.main.removeChild(this.view.currentPage);
      this.view.currentPage = this.view.pages[this.model.location.page];
      this.view.main.appendChild(this.view.currentPage);
      this.pageProcessor(); /// was page processor

      setTimeout(() => {
        this.view.currentPage.classList.add('active');
      }, 300);
    }, 300);
  }

  pageProcessor() {
    this.view.toggleHomePageStyle(this.view.currentPage);
    if (this.model.location.page === Object.keys(this.view.pages)[2]) {
      this.view.cleanPreviousCategories();
      this.fillCategoryPage();
    } else if (+this.model.location.pageNum === this.model.quiz.questions.perCategory) {
      console.log('Last Page');
    } else if (this.model.location.page === Object.keys(this.view.pages)[3]) {
      this.fillQuestionPage();
    }
  }

  fillCategoryPage() {
    const cards = this.view.pages.categories.querySelectorAll('.card');
    const titles = this.view.pages.categories.querySelectorAll('.card-title');
    const links = this.view.pages.categories.querySelectorAll('.start-btn');
    const titleContainer = this.view.pages.categories.querySelectorAll('.card-title-container');
    const imageContainer = this.view.pages.categories.querySelectorAll('.image-container');
    const results = this.model.getResults();
    const isNull = (value) => value === null;

    this.model.quiz.covers[this.model.location.type].forEach((element, index) => {
      const img = new Image();
      img.src = `${this.model.quiz.images.url.small}${element.id}.jpg`;

      // need to  add language support
      titles[index].textContent = element.category;
      links[index].setAttribute('href', `#questions=${this.model.location.type}=${index}=0`);

      if (!this.model.config.results[this.model.location.type][index].every(isNull)) {
        cards[index].classList.add('played');

        /* create score container */
        const score = document.createElement('div');
        score.classList.add('score');
        score.textContent = `${results[index]}/10`;
        titleContainer[index].append(score);

        /* create reusult btn */
        const resultBtn = document.createElement('a');
        resultBtn.setAttribute('href', `#results=${this.model.location.type}=${index}`);
        resultBtn.classList.add('category-result-btn');
        resultBtn.textContent = 'Watch reusult';
        imageContainer[index].appendChild(resultBtn);

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
    this.model.getAnswers();
    this.model.shuffleAnswers();
    this.setRouteToBackBtn();
    this.insertQuestion();
    this.appendAnswersContainer();
    this.insertPictures();
    this.insertAuthors();
    this.setRouteToModal();
    this.markTrueAnswer();
    this.view.appendModalWindow();
  }

  appendAnswersContainer() {
    this.view.currentPage.appendChild(this.view.components.answers[this.model.location.type]);
  }

  setRouteToBackBtn() {
    this.view.currentPage
      .querySelector('.back-btn')
      .setAttribute('href', `#categories=${this.model.location.type}`);
  }

  setRouteToModal() {
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
      this.model.quiz.dictionary[this.model.config.settings.lang].question[
        this.model.location.type
      ];
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
        this.view.trueElement = element;
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

  setAnswerListener() {
    this.view.components.answers.artist.querySelectorAll('.answer-btn').forEach((button) => {
      this.modifyPickedAnswer(button);
    });
    this.view.components.answers.picture.querySelectorAll('.answer-btn').forEach((button) => {
      this.modifyPickedAnswer(button);
    });
  }

  fillModal() {
    this.view.components.modal.querySelector('.modal-image').style.backgroundImage = `url(${
      this.model.quiz.images.url.full
    }${this.model.answers[this.model.location.pageNum].true.imageNum}full.jpg)`;

    this.view.components.modal.querySelector('.modal-picture-name').textContent =
      this.model.answers[this.model.location.pageNum].true.picture;

    this.view.components.modal.querySelector('.modal-author').textContent =
      this.model.answers[this.model.location.pageNum].true.author;

    this.view.components.modal.querySelector('.modal-year').textContent =
      this.model.answers[this.model.location.pageNum].true.year;
  }

  fillModalEndOfGame() {
    const varyBtn = this.view.components.modalEndOfGame.querySelector('.modal-vary-btn');
    const results = this.model.getResults();
    const isNull = (value) => value === null;

    this.setEndOfGameTitle();

    if (
      !this.model.config.results[this.model.location.type][this.model.location.categoryId].every(
        isNull,
      )
    ) {
      this.view.components.modalEndOfGame.querySelector('.end-of-game-score').textContent = `${
        results[this.model.location.categoryId]
      }/10`;
      if (results[this.model.location.categoryId] > this.model.quiz.questions.gameover) {
        varyBtn.setAttribute(
          'href',
          `#questions=${this.model.location.type}=${this.model.location.categoryId + 1}`,
        );
        varyBtn.textContent = this.model.quiz.dictionary[this.model.config.lang].nextQuiz;
      } else {
        this.setPlatyAgainRoute(varyBtn);
      }
    } else {
      this.setPlatyAgainRoute(varyBtn);
    }
  }

  setEndOfGameTitle() {
    this.view.components.modalEndOfGame.querySelector('.end-of-game-title').textContent =
      this.model.quiz.dictionary[this.model.config.settings.lang].modalEndOfGame[
        this.model.location.result
      ];
  }

  setPlatyAgainRoute(element) {
    element.setAttribute('href', `#questions=${this.model.location.type}=1}`);
    element.textContent = this.model.quiz.dictionary[this.model.config.lang].playAgain;
  }

  modifyPickedAnswer(button) {
    button.addEventListener('click', (e) => {
      e.target.classList.add('picked');
      this.model.pickResult(e.target.classList.contains('true'));
      this.view.showTrueAnswer();
      this.fillModal();
      this.view.showModalWindow(e.target.classList.contains('true'));
    });
  }
}
