import './index.scss';

const header = document.createElement('header');
header.classList.add('at-home');
header.innerHTML = `<div class="logo-container">
                              <a href="#home">
                                <div class="logo-up">ART</div>
                                <div class="logo-bottom">QUIZ</div>
                              </a>
                            </div>`;
export default header;
