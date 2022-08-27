import {
  IMAGE_URL_FULL,
  IMAGE_URL_SMALL,
  LANG_RU,
  PICTURE_QUIZ,
  QUESTIONS_PER_CATEGORY,
  RESULT_GAMEOVER,
} from '../const';
import addPicture from '../helpers/addPicture';
import fillPlayedCategory from '../helpers/fillPlayedCategory';
import getIndexesOfPlayedCategories from '../helpers/getIndexesOfPlayedCategories';
import getRating from '../helpers/getRating';
import categories from './categories';

export default class View {
  constructor(pages, components) {
    this.app = document.querySelector('#root');
    this.pages = pages;
    this.components = components;
    this.currentPage = this.pages.home;
    this.currentModalWindow = this.components.modal;
    this.components.main.append(this.currentPage);
    this.app.append(this.components.header, this.components.main, this.components.footer);
  }

  // *** ROUTING ***
  fillNavButtonsText(dictionary) {
    this.currentPage.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.textContent = dictionary.buttons[btn.classList[0]];
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

  fillHomePage(dictionary) {
    this.fillNavButtonsText(dictionary);
    this.enableHomePageStyles();
  }

  fillSettingsPage(dictionary) {
    this.fillNavButtonsText(dictionary);
    this.setSettingsTitles(dictionary);
  }

  fillCategoryPage(quiztype, results, dictionary) {
    this.disableHomePageStyles();
    this.cleanPreviousCategories();
    this.fillCategoryCards(quiztype, results, dictionary);
  }

  fillQuestionPage(quizData, results, answers, dictionary, lang, saveResult) {
    const { quizType, categoryId, pageNum } = quizData;
    const categoryResults = results[quizType][categoryId];

    this.cleanPreviousAnswers();
    this.hideModalwindow();
    this.setRouteToBackBnts(quizType);
    this.insertQuestion(dictionary.question[quizType]);
    this.appendAnswersContainer(quizType);
    this.insertAuthorsAndPictures(quizType, answers, lang);
    this.setRouteToModal(quizType, categoryId, pageNum, categoryResults, dictionary);
    this.markTrueAnswer(answers);
    this.appendModalWindow();
    this.setAnswerListener(quizData, answers.trueAnswer, saveResult, lang);
    this.setDefaultModalWindow();
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
  fillCategoryCards(quizType, results, dictionary) {
    const imageContainers = this.pages.categories.querySelectorAll('.image-container');
    const links = this.pages.categories.querySelectorAll('.start-btn');
    const titles = this.pages.categories.querySelectorAll('.card-title');
    const cards = this.pages.categories.querySelectorAll('.card');
    const score = document.querySelectorAll('.score');
    const played = getIndexesOfPlayedCategories(results);

    categories.forEach((element, categoryId) => {
      const img = new Image();
      const [genre] = Object.keys(categories[categoryId]);
      let isPlayed = false;

      img.src = `${IMAGE_URL_SMALL}${element.cover[quizType]}.jpg`;

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
        imageContainers[categoryId].style.backgroundImage = `${
          !isPlayed ? 'linear-gradient(black, black), ' : ''
        }url(${img.src})`;
      };
    });
  }

  cleanPreviousCategories() {
    this.pages.categories.querySelectorAll('.played').forEach((element) => {
      element.classList.remove('played');

      const cardTitleContainer = element.querySelector('.card-title-container');
      cardTitleContainer.lastChild.textContent = '';

      const imageContainer = element.querySelector('.image-container');
      imageContainer.removeChild(imageContainer.lastChild);

      element.querySelector('.start-btn').style.backgroundImage = null;
    });
  }
  // *** END CATEGORIES ***

  // *** QUESTIONS ***
  insertQuestion(question) {
    this.currentPage.querySelector('h4').textContent = question;
  }

  setAnswerListener(quizData, trueAnswer, saveResult, lang) {
    this.components.answers[quizData.quizType].querySelectorAll('.answer-btn').forEach((button) => {
      button.addEventListener(
        'click',
        (e) => {
          e.target.classList.add('picked');

          saveResult(e.target.classList.contains('true'), quizData);

          this.addCheckmarkToModal(e.target.classList.contains('true'));
          this.showTrueAnswer();
          this.fillModal(trueAnswer, lang);
          this.showModalWindow(e.target.classList.contains('true'));
        },
        { once: true },
      );
    });
  }

  insertAuthorsAndPictures(quizType, { trueAnswer, all }, lang) {
    const [header, ...answersElms] = Array.from(this.currentPage.querySelectorAll('.artist'));
    const picturesElms = this.currentPage.querySelectorAll('.picture');

    if (quizType === PICTURE_QUIZ) {
      header.textContent = header.textContent.replace('__artist__', trueAnswer.author[lang]);

      picturesElms.forEach((picture, index) => {
        addPicture(picture, all[index].imageNum);
      });
    } else {
      addPicture(...picturesElms, trueAnswer.imageNum);

      answersElms.forEach((answer, index) => {
        answer.textContent = all[index].author[lang];
      });
    }
  }

  cleanPreviousAnswers() {
    const variants = this.pages.questions.querySelector('.variants');
    if (variants) {
      this.repairAnswerTemplate();
      this.clearAnswerClasses();
      this.pages.questions.removeChild(variants);
    }
  }

  markTrueAnswer({ all, trueAnswer }) {
    const answerBtns = this.currentPage.querySelectorAll('.answer-btn');
    const trueAnswerIndex = all.findIndex((answer) => answer.imageNum === trueAnswer.imageNum);

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

  clearAnswerClasses() {
    this.currentPage.querySelector('.variants').classList.remove('expose');
    this.currentPage.querySelectorAll('.answer-btn').forEach((element) => {
      element.classList.remove('picked', 'true');
    });
  }

  showTrueAnswer() {
    setTimeout(() => {
      this.currentPage.querySelector('.variants').classList.add('expose');
    }, 300);
  }

  // *** SETTINGS ***
  setSettingsTitles(dictionary) {
    const { language, timeGame, timeToAnswer } = dictionary.buttons;

    this.pages.settings.querySelector('.lang-title').textContent = language;
    this.pages.settings.querySelector('.time-check-title').textContent = timeGame;
    this.pages.settings.querySelector('.time-value-title').textContent = timeToAnswer;
  }

  setLangButton(currentLanguage) {
    this.pages.settings.querySelector('#lang-check').checked = currentLanguage === LANG_RU;
  }
  // *** END SETTINGS ***

  // *** MODAL ***

  fillModal({ author, imageNum, picture, year }, lang) {
    const modalImage = this.currentModalWindow.querySelector('.modal-image');
    modalImage.style.backgroundImage = `url(${IMAGE_URL_FULL}${imageNum}full.jpg)`;
    this.currentModalWindow.querySelector('.modal-picture-name').textContent = picture[lang];
    this.currentModalWindow.querySelector('.modal-author').textContent = author[lang];
    this.currentModalWindow.querySelector('.modal-year').textContent = year;
  }

  appendModalWindow() {
    this.currentPage.appendChild(this.currentModalWindow);
  }

  removeModalWindow() {
    this.currentPage.removeChild(this.currentModalWindow);
  }

  changeCurrentModalWindow() {
    const { modalEndOfGame, modal } = this.components;
    this.currentModalWindow = this.currentModalWindow === modal ? modalEndOfGame : modal;
  }

  setDefaultModalWindow() {
    this.components.modalEndOfGame
      .querySelectorAll('.modal-back-btn, .modal-vary-btn')
      .forEach((element) => {
        element.addEventListener(
          'click',
          () => {
            this.hideModalwindow();
            this.changeCurrentModalWindow();
          },
          { once: true },
        );
      });
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
    this.components.modal.querySelector('.modal-image').classList.remove('true', 'false');
    this.components.modal.querySelector('.modal-image').classList.add(answer);
  }

  fillEndOfGameModal(quizType, categoryId, categoryResults, { titles, buttons }) {
    const score = categoryResults.filter((res) => res === true).length;
    const rating = getRating(score);

    this.setEndOfGameTitle(titles[rating]);
    this.setEndOfGamePicture(rating);
    this.setScoreToModalWindow(score);
    this.setEndOfGameModalVariableButton(score, buttons, quizType, categoryId);
  }

  setEndOfGameModalVariableButton(score, dictionaryButtons, quizType, categoryId) {
    const varyBtn = this.currentModalWindow.querySelector('.modal-vary-btn');

    if (score > RESULT_GAMEOVER) {
      varyBtn.setAttribute('href', `#questions=${quizType}=${+categoryId + 1}=0`);
      varyBtn.textContent = dictionaryButtons.nextQuiz;
    } else {
      varyBtn.setAttribute('href', `#questions=${quizType}=${categoryId}=0`);
      varyBtn.textContent = dictionaryButtons.playAgain;
    }
  }

  setScoreToModalWindow(score) {
    this.currentModalWindow.querySelector(
      '.end-of-game-score',
    ).textContent = `${score}/${QUESTIONS_PER_CATEGORY}`;
  }

  setEndOfGamePicture(result) {
    this.currentModalWindow.querySelector(
      '.end-of-game-image',
    ).style.backgroundImage = `url(./assets/${result}.svg)`;
  }

  setEndOfGameTitle(title) {
    this.currentModalWindow.querySelector('.end-of-game-title').textContent = title;
  }

  showEndOfGameModal(quizType, categoryId, categoryResults, dictionary) {
    this.removeModalWindow();
    this.changeCurrentModalWindow();
    this.fillEndOfGameModal(quizType, categoryId, categoryResults, dictionary);
    this.appendModalWindow();
    this.setRouteToBackBnts(quizType);
    this.fillNavButtonsText(dictionary);
    this.showModalWindow();
  }

  setRouteToModal(quizType, categoryId, pageNum, categoryResults, dictionary) {
    const modalNextBtn = this.components.modal.querySelector('.modal-next-btn');

    if (+pageNum === QUESTIONS_PER_CATEGORY - 1) {
      modalNextBtn.addEventListener(
        'click',
        () => {
          this.showEndOfGameModal.call(this, quizType, categoryId, categoryResults, dictionary);
        },
        { once: true },
      );
    } else {
      modalNextBtn.setAttribute('href', `#questions=${quizType}=${categoryId}=${+pageNum + 1}`);
    }
  }

  // *** END MODAL ***
}
