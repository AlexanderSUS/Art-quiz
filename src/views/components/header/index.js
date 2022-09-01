import './index.scss';

const header = document.createElement('header');
header.classList.add('at-home');
header.innerHTML = `<a class="logo-container" href="#home">
                                <div class="logo-up">ART</div>
                                <div class="logo-bottom">QUIZ</div>
                                <img class="logo-home" src="./assets/Home-icon.svg" alt="to home">
                              </a>`;
export default header;
