import './index.scss';

const footer = document.createElement('footer');
footer.classList.add('home');
footer.innerHTML = `<a class="rs-logo" href="https://rs.school/js/"><img src="./assets/rs_school_js.svg" alt="rs school courses"></a>
                    <a class="app-details" href="https://github.com/AlexanderSUS">
                      <span class="app-author">Alexander Suslov</span>
                      <span class="app-year"> 2021</span>
                    </a>`;

export default footer;
