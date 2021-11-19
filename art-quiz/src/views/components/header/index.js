import './index.scss';

const header = document.createElement('header');
header.classList.add('home');
header.innerHTML = `<div class="logo-container">
                              <div class="logo-up">ART</div>
                              <div class="logo-bottom">QUIZ</div>
                            </div>`;
export default header;
