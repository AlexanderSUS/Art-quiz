import './index.scss';

const footer = document.createElement('footer');
footer.classList.add('home');
footer.innerHTML = `<div class="app-info">
                            <div class="rs-logo">
                              <a href="https://rs.school/js/"><img src="/assets/rs_school_js.svg" alt="rs school courses"></a>
                            </div>
                            <div class="app-details">
                              <a href="https://github.com/AlexanderSUS">
                                <span class="app-author">Alexander Suslov</span>
                                <span class="app-year"> 2021</span>
                              </a>
                            </div>
                          </div>`;

export default footer;