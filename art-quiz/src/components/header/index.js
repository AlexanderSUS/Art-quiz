import './index.scss';

const headerElement = document.createElement('header');
headerElement.classList.add('home');
headerElement.innerHTML = `<div class="logo-container">
                              <div class="logo-up">ART</div>
                              <div class="logo-bottom">QUIZ</div>
                            </div>`;
export default headerElement;
