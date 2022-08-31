const shuffleAnswers = (answers) => {
  let currentIndex = answers.length;
  let radnomIndex;

  while (currentIndex) {
    radnomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [answers[currentIndex], answers[radnomIndex]] = [answers[radnomIndex], answers[currentIndex]];
  }

  return answers;
};

export default shuffleAnswers;
