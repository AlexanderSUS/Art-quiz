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

  // *** ROUTING ***
  fillNavButtonsText(buttonsDictionary) {
    this.currentPage.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.textContent = buttonsDictionary[btn.classList[0]];
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
    this.hideModalwindow(); // TODO find better place for call
    this.cleanPreviousAnswers();
    this.setRouteToBackBnts(quizType);
    this.fillNavButtonsText(dictionary.buttons);
    this.insertQuestion(dictionary.question);
    this.appendAnswersContainer(quizType);
    this.insertAuthorsAndPictures(quizType, answers);
    this.markTrueAnswer(answers);
  }

  fillModalWindow({ trueAnswer, nextRoute, isAnswerTrue }) {
    this.setDefaultModal();
    this.fillContentOfModalWindow(trueAnswer);
    this.addCheckmarkToModal(isAnswerTrue);
    this.setRouteToModal(nextRoute);
    this.appendModalWindow();
    this.showModalWindow(isAnswerTrue);
  }

  fillFinalModalWindow({ quizType, score, rating, title, navButtonData, buttonDictionary }) {
    this.removeModalWindow();
    this.changeCurrentModalWindow();
    this.appendModalWindow();
    this.setFinalTitle(title);
    this.setFinalPicture(rating);
    this.setScoreToModalWindow(score);
    this.setFinalModalVariableButton(navButtonData);
    this.setRouteToBackBnts(quizType);
    this.fillNavButtonsText(buttonDictionary);
    this.showModalWindow();
  }

  // *** END ROUTING ***

  // *** STYLING METHODS ***
  enableHomePageStyles() {
    if (!this.components.header.classList.contains('at-home')) {
      this.components.header.classList.add('at-home');
      this.components.main.classList.add('at-home');
    }
  }

  disableHomePageStyles() {
    if (this.components.header.classList.contains('at-home')) {
      this.components.header.classList.remove('at-home');
      this.components.main.classList.remove('at-home');
    }
  }

  addActiveClass() {
    setTimeout(() => {
      this.currentPage.classList.add('active');
    }, 300);
  }
  // *** END STYLING METHODS ***

  // *** CATEGORIES ***
  fillCategoryCards({ quizType, results, dictionary }) {
    const imageContainers = this.pages.categories.querySelectorAll('.image-container');
    const links = this.pages.categories.querySelectorAll('.start-btn');
    const titles = this.pages.categories.querySelectorAll('.card-title');
    const cards = this.pages.categories.querySelectorAll('.card');
    const score = document.querySelectorAll('.score');
    const played = getIndexesOfPlayedCategories(results);

    categories.forEach((category, categoryId) => {
      const img = getCategoryImage(category.cover[quizType]);
      const [genre] = Object.keys(category);
      let isPlayed = false;

      titles[categoryId].textContent = dictionary.categories[genre];

      links[categoryId].setAttribute('href', `#questions=${quizType}=${categoryId}=0`);

      if (played.includes(categoryId)) {
        cards[categoryId].classList.add('played');
        links[categoryId].style.backgroundImage = 'url(/assets/replay.svg)';
        isPlayed = true;

        fillPlayedCategory({
          imageContainer: imageContainers[categoryId],
          score: score[categoryId],
          quizType,
          categoryNum: categoryId,
          categoryResults: results[categoryId],
          dictionary,
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
      element.querySelector('.score').textContent = '';
      element.querySelector('.start-btn').style.backgroundImage = null;
    });
  }
  // *** END CATEGORIES ***

  // *** QUESTIONS ***
  insertQuestion(question) {
    this.currentPage.querySelector('h4').textContent = question;
  }

  // eslint-disable-next-line class-methods-use-this
  hightLightAnswer(button) {
    button.classList.add('picked');
  }

  insertAuthorsAndPictures(quizType, { trueAnswer, allAnswers }) {
    const [header, ...answersElms] = Array.from(this.currentPage.querySelectorAll('.artist'));
    const picturesElms = this.currentPage.querySelectorAll('.picture');

    if (quizType === PICTURE_QUIZ) {
      header.textContent = header.textContent.replace('__artist__', trueAnswer.author);

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
      this.repairAnswerTemplate();
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

  repairAnswerTemplate() {
    this.pages.questions.querySelectorAll('.answer-btn.artist').forEach((element) => {
      element.textContent = '__artist__';
    });
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

  // *** SETTINGS ***
  setSettingsTitles(dictionaryButtons) {
    const { language, timeGame, timeToAnswer } = dictionaryButtons;

    this.pages.settings.querySelector('.lang-title').textContent = language;
    this.pages.settings.querySelector('.time-check-title').textContent = timeGame;
    this.pages.settings.querySelector('.time-value-title').textContent = timeToAnswer;
  }

  setLangButton(isLangSwitchChecked) {
    this.pages.settings.querySelector('#lang-check').checked = isLangSwitchChecked;
  }
  // *** END SETTINGS ***

  // *** MODAL ***
  setDefaultModal() {
    if (this.currentModalWindow === this.components.modalFinal) {
      this.removeModalWindow();
      this.changeCurrentModalWindow();
      this.appendModalWindow();
    }
  }

  fillContentOfModalWindow({ author, imageNum, picture, year }) {
    addPicture(this.currentModalWindow.querySelector('.modal-image'), imageNum);
    this.currentModalWindow.querySelector('.modal-picture-name').textContent = picture;
    this.currentModalWindow.querySelector('.modal-author').textContent = author;
    this.currentModalWindow.querySelector('.modal-year').textContent = year;
  }

  appendModalWindow() {
    this.currentPage.appendChild(this.currentModalWindow);
  }

  removeModalWindow() {
    this.currentPage.removeChild(this.currentModalWindow);
  }

  changeCurrentModalWindow() {
    const { modalFinal, modal } = this.components;
    this.currentModalWindow = this.currentModalWindow === modal ? modalFinal : modal;
  }

  showModalWindow(isResultTrue) {
    const showModal = () => {
      this.currentModalWindow.classList.add('show');
    };

    setTimeout(showModal, isResultTrue ? 300 : 1000);
  }

  hideModalwindow() {
    this.currentModalWindow.classList.remove('show');
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

  // *** END MODAL ***
}
