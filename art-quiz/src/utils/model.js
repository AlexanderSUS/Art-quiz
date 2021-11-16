export default class Model {
  constructor(config) {
    this.quiz = JSON.parse(localStorage.getItem('quiz-config')) || config;
    this.fullImgUrl = 'https://raw.githubusercontent.com/irinainina/image-data/master/full/';
    this.imgUrl = 'https://raw.githubusercontent.com/irinainina/image-data/master/img/';
  }
}
