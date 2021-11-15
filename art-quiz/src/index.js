import './style/index.scss';

import footerInfo from './components/footer_info';
import startPage from './components/start_page';
import settingsPage from './components/settings';

// import Player from './components/player/'
// import json from './assets/json.json'  FOR WORK WITH JSON FILE

const root = document.getElementById('root');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

header.classList.add('header');
main.classList.add('main');
footer.classList.add('footer');

startPage.appendChild(settingsPage);

main.appendChild(startPage);
// main.appendChild(settingsPage);

footer.appendChild(footerInfo);

root.append(header);
root.append(main);
root.append(footer);
