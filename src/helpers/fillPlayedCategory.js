import { QUESTIONS_PER_CATEGORY } from '../const';

function fillPlayedCategory({
  imageContainer,
  score,
  quizType,
  categoryNum,
  categoryResults,
  dictionary,
}) {
  const scoreAmount = categoryResults.filter((element) => element === true).length;
  score.textContent = `${scoreAmount}/${QUESTIONS_PER_CATEGORY}`;

  const resultBtn = document.createElement('a');
  resultBtn.setAttribute('href', `#results=${quizType}=${categoryNum}`);
  resultBtn.classList.add('category-result-btn');
  resultBtn.textContent = dictionary.resultTitle;

  imageContainer.appendChild(resultBtn);
  imageContainer.style.backgroundImage = 'none';
}

export default fillPlayedCategory;
