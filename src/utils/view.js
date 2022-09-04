import { PICTURE_QUIZ, QUESTIONS_PER_CATEGORY } from '../const';
import addPicture from '../helpers/addPicture';
import fillPlayedCategory from '../helpers/fillPlayedCategory';
import getCategoryImage from '../helpers/getCategoryImage';
import getIndexesOfPlayedCategories from '../helpers/getIndexesOfPlayedCategories';
import categories from '../data/categories';

export default class View {
  constructor(pages, components) {
    this.app = document.querySelector('#root');
    this.pages = pages;
    this.components = components;
    this.currentPage = this.pages.home;
    this.currentModalWindow = this.components.modal;
    this.components.main.append(this.currentPage);
    this.app.append(this.components.header, this.components.main, this.components.footer);
    this.bindedAnswerHandler = null;
  }

  fillNavButtonsText(buttonsDictionary) {
    this.currentPage.querySelectorAll('.nav-btn').forEach((btn) => {
      const [buttonFirstClass] = btn.classList;
      btn.textContent = buttonsDictionary[buttonFirstClass];
    });
  }

  setRouteToBackBnts(quizType) {
    this.currentPage.querySelectorAll('.back-btn, .modal-back-btn').forEach((element) => {
      element.setAttribute('href', `#categories=${quizType}`);
    });
  }

  setPage(pageName) {
    this.currentPage.classList.remove('active');
    this.components.main.removeChild(this.currentPage);
    this.currentPage = this.pages[pageName];
    this.components.main.appendChild(this.currentPage);
    this.addActiveClass();
  }

  fillHomePage(buttonDictionary) {
    this.fillNavButtonsText(buttonDictionary);
    this.enableHomePageStyles();
  }

  fillSettingsPage({ buttons, isLangSwitchChecked }) {
    this.fillNavButtonsText(buttons);
    this.setSettingsTitles(buttons);
    this.setLangButton(isLangSwitchChecked);
  }

  fillCategoryPage(data) {
    this.disableHomePageStyles();
    this.cleanPreviousCategories();
    this.fillCategoryCards(data);
  }

  fillQuestionPage({ quizType, answers, dictionary }) {
    this.cleanPreviousAnswers();
    this.insertQuestion(dictionary.question);
    this.appendAnswersContainer(quizType);
    this.insertAuthorsAndPictures(quizType, answers);
    this.markTrueAnswer(answers);
  }

  fillModalWindow({ trueAnswer, nextRoute, isAnswerTrue }) {
    this.fillContentOfModalWindow(trueAnswer);
    this.addCheckmarkToModal(isAnswerTrue);
    this.setRouteToModal(nextRoute);
    this.attachModalWindow();
    this.showModalWindow();
  }

  fillFinalModalWindow({ quizType, score, rating, title, navButtonData, buttonDictionary }) {
    this.changeCurrentModalWindow();
    this.attachModalWindow();
    this.setFinalTitle(title);
    this.setFinalPicture(rating);
    this.setScoreToModalWindow(score);
    this.setFinalModalVariableButton(navButtonData);
    this.setRouteToBackBnts(quizType);
    this.fillNavButtonsText(buttonDictionary);
    this.showModalWindow();
  }

  enableHomePageStyles() {
    if (this.components.header.classList.contains('mini')) {
      this.components.header.classList.remove('mini');
    }
  }

  disableHomePageStyles() {
    if (!this.components.header.classList.contains('.mini')) {
      this.components.header.classList.add('mini');
    }
  }

  addActiveClass() {
    setTimeout(() => {
      this.currentPage.classList.add('active');
    }, 300);
  }

  fillCategoryCards({ quizType, results, dictionary }) {
    const imageContainers = this.pages.categories.querySelectorAll('.image-container');
    const links = this.pages.categories.querySelectorAll('.start-btn');
    const titles = this.pages.categories.querySelectorAll('.card-title');
    const cards = this.pages.categories.querySelectorAll('.card');
    const played = getIndexesOfPlayedCategories(results);

    categories.forEach((category, categoryId) => {
      const img = getCategoryImage(category.cover[quizType]);
      const [genre] = Object.keys(category);
      let isPlayed = false;

      titles[categoryId].textContent = dictionary.categories[genre];

      links[categoryId].setAttribute('href', `#questions=${quizType}=${categoryId}=0`);

      if (played.includes(categoryId)) {
        cards[categoryId].classList.add('played');
        isPlayed = true;

        fillPlayedCategory({
          imageContainer: imageContainers[categoryId],
          resultPath: `#results=${quizType}=${categoryId}`,
          categoryResults: results[categoryId].filter((element) => element === true).length,
          resultTitle: dictionary.resultTitle,
        });
      }

      img.onload = () => {
        const bgImageStyle = `${isPlayed ? '' : 'linear-gradient(black, black),'}url(${img.src})`;
        imageContainers[categoryId].style.backgroundImage = bgImageStyle;
      };
    });
  }

  cleanPreviousCategories() {
    this.pages.categories.querySelectorAll('.played').forEach((element) => {
      element.classList.remove('played');
      element.querySelector('.category-result-btn').remove();
      element.querySelector('.image-container').style.backgroundImage = null;
      element.querySelector('.start-btn').style.backgroundImage = null;
    });
  }

  insertQuestion(question) {
    this.currentPage.querySelector('.question-text').textContent = question;
  }

  // eslint-disable-next-line class-methods-use-this
  hightLightAnswer(button) {
    button.classList.add('picked');
  }

  insertAuthorsAndPictures(quizType, { trueAnswer, allAnswers }) {
    const answersElms = Array.from(this.currentPage.querySelectorAll('.artist'));
    const picturesElms = this.currentPage.querySelectorAll('.picture');

    if (quizType === PICTURE_QUIZ) {
      picturesElms.forEach((picture, index) => {
        addPicture(picture, allAnswers[index].imageNum);
      });
    } else {
      addPicture(...picturesElms, trueAnswer.imageNum);

      answersElms.forEach((answer, index) => {
        answer.textContent = allAnswers[index].author;
      });
    }
  }

  // TODO Try to perfome it after game end
  cleanPreviousAnswers() {
    const variants = this.pages.questions.querySelector('.variants');
    if (variants) {
      this.clearAnswerClassesAndListeners();
      variants.remove();
    }
  }

  markTrueAnswer({ allAnswers, trueAnswer }) {
    const answerBtns = this.currentPage.querySelectorAll('.answer-btn');
    const trueAnswerIndex = allAnswers.findIndex(
      (answer) => answer.imageNum === trueAnswer.imageNum,
    );

    answerBtns[trueAnswerIndex].classList.add('true');
  }

  appendAnswersContainer(quizType) {
    this.currentPage.appendChild(this.components.answers[quizType]);
  }

  clearAnswerClassesAndListeners() {
    this.currentPage.querySelector('.variants').classList.remove('expose');
    this.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      element.classList.remove('picked', 'true');
      element.removeEventListener('click', this.bindedAnswerHandler);
    });
  }

  showTrueAnswer() {
    setTimeout(() => {
      this.currentPage.querySelector('.variants').classList.add('expose');
    }, 300);
  }

  setSettingsTitles(dictionaryButtons) {
    const { language, timeGame, timeToAnswer } = dictionaryButtons;

    this.pages.settings.querySelector('.lang-title').textContent = language;
    this.pages.settings.querySelector('.time-check-title').textContent = timeGame;
    this.pages.settings.querySelector('.time-value-title').textContent = timeToAnswer;
  }

  setLangButton(isLangSwitchChecked) {
    this.pages.settings.querySelector('#lang-check').checked = isLangSwitchChecked;
  }

  setDefaultModal() {
    if (this.currentModalWindow === this.components.modalFinal) {
      this.changeCurrentModalWindow();
    }
  }

  fillContentOfModalWindow({ author, imageNum, picture, year }) {
    addPicture(this.currentModalWindow.querySelector('.modal-image'), imageNum);
    this.currentModalWindow.querySelector('.modal-picture-name').textContent = picture;
    this.currentModalWindow.querySelector('.modal-author').textContent = author;
    this.currentModalWindow.querySelector('.modal-year').textContent = year;
  }

  changeCurrentModalWindow() {
    const { modalFinal, modal } = this.components;
    this.currentModalWindow = this.currentModalWindow === modal ? modalFinal : modal;
  }

  showModalWindow(isResultTrue = false) {
    const showModal = () => {
      this.currentModalWindow.classList.add('show');
    };

    setTimeout(showModal, isResultTrue ? 300 : 1000);
  }

  attachModalWindow() {
    this.currentPage.appendChild(this.currentModalWindow);
  }

  detachModalWindow() {
    this.currentModalWindow.classList.remove('show');
    this.currentPage.removeChild(this.currentModalWindow);
    this.setDefaultModal();
  }

  addCheckmarkToModal(answer) {
    this.components.modal.querySelector('.modal-image').classList.remove('true', 'false');
    this.components.modal.querySelector('.modal-image').classList.add(answer);
  }

  setFinalModalVariableButton({ path, title }) {
    const varyBtn = this.currentModalWindow.querySelector('.modal-vary-btn');
    varyBtn.setAttribute('href', path);
    varyBtn.textContent = title;
  }

  setScoreToModalWindow(score) {
    this.currentModalWindow.querySelector(
      '.end-of-game-score',
    ).textContent = `${score}/${QUESTIONS_PER_CATEGORY}`;
  }

  setFinalPicture(result) {
    this.currentModalWindow.querySelector(
      '.end-of-game-image',
    ).style.backgroundImage = `url(./assets/${result}.svg)`;
  }

  setFinalTitle(title) {
    this.currentModalWindow.querySelector('.end-of-game-title').textContent = title;
  }

  setRouteToModal(nextRoute) {
    this.components.modal.querySelector('.modal-next-btn').setAttribute('href', nextRoute);
  }
}
