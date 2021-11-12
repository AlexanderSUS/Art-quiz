import './src/style/index.scss';
// import Player from './components/player/'
// import json from './assets/json.json'  FOR WORK WITH JSON FILE

const root = document.getElementById('root');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

header.classList.add('header');
main.classList.add('main');
footer.classList.add('footer');

root.append(header);
root.append(main);
root.append(footer);
