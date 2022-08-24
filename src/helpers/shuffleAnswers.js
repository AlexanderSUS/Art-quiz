const shuffleAnswers = (answers) => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const k = answers[i];
    answers[i] = answers[j];
    answers[j] = k;
  }

  return answers;
};

export default shuffleAnswers;
