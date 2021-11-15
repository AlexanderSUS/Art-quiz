import {
  // startPage,
  startMenu,
  settingsBtn,
  // artistQuizBtn,
  // pictureQuizBtn,
} from './components/start_page/start_page';

import { settingsContainer, settingsBackBtn } from './components/settings/settings';

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function disableElement(element) {
  element.classList.remove('active');
}

function enableElement(element) {
  element.classList.add('active');
}

settingsBtn.addEventListener('click', () => {
  hideElement(startMenu);
});

startMenu.addEventListener('transitionend', () => {
  if (startMenu.classList.contains('hidden')) {
    disableElement(startMenu);
    enableElement(settingsContainer);
    setTimeout(() => {
      showElement(settingsContainer);
    }, 0);
  }
});

settingsContainer.addEventListener('transitionend', () => {
  if (settingsContainer.classList.contains('hidden')) {
    disableElement(settingsContainer);
    enableElement(startMenu);
    setTimeout(() => {
      showElement(startMenu);
    }, 0);
  }
});

settingsBackBtn.addEventListener('click', () => {
  hideElement(settingsContainer);
});
