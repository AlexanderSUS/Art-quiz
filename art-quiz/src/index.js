import './style/index.scss';

import logo from './components/header_content';
import footerContent from './components/footer_content';
import homePage from './components/home_page';
import settingsPage from './components/settings';

import switchPage from './utils/globalFunctions';
// import settingsPage from './components/settings';

// import json from './assets/json.json'  FOR WORK WITH JSON FILE

const root = document.getElementById('root');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
let currentHash = '#home';
let currentPage = homePage;
document.location.hash = currentHash;

function toggleHomePageStyle() {
  if (header.classList.contains('home')) {
    header.classList.add('home');
    main.classList.add('home');
  } else {
    header.classList.add('home');
    main.classList.add('home');
  }
}

header.appendChild(logo);
main.appendChild(currentPage);
footer.appendChild(footerContent);

toggleHomePageStyle();

root.append(header);
root.append(main);
root.append(footer);

window.onload = () => {
  window.addEventListener('hashchange', () => {
    const hash = document.location.hash;
    let nextPage;
    if (hash === '#home') {
      nextPage = homePage;
    } else if (hash === '#settings') {
      nextPage = settingsPage;
    } else {
      nextPage = homePage;
    }

    switchPage(currentPage, nextPage);
    currentHash = document.location.hash;
    currentPage = nextPage;
  });
};
