import { QUESTIONS_PER_CATEGORY } from '../const';

function fillPlayedCategory({ imageContainer, resultPath, categoryResults, resultTitle }) {
  const resultBtn = document.createElement('a');

  resultBtn.innerHTML = `
    <span class="result-title">${resultTitle}</span>
    <span class="result-score">${categoryResults}/${QUESTIONS_PER_CATEGORY}</span>
  `;

  resultBtn.setAttribute('href', resultPath);
  resultBtn.classList.add('category-result-btn');

  imageContainer.appendChild(resultBtn);
  imageContainer.style.backgroundImage = 'none';
}

export default fillPlayedCategory;
