export default class Model {
  constructor(config) {
    this.quiz = JSON.parse(localStorage.getItem('quiz-config')) || config;
  }
}
