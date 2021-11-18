export default class Model {
  constructor(config, quiz) {
    this.quiz = quiz;
    this.quizConfig = JSON.parse(localStorage.getItem(this.quiz.config)) || config;
    this.location = null;
  }

  getLocation() {
    const hash = document.location.hash.slice(1).split('=');
    this.location = {
      page: hash[0],
      type: hash[1],
      categoryId: hash[2],
    };
  }

  getPicturesByArtist() {
    return this.quiz.images.list.slice(
      this.location.categoryId * this.quiz.questions.perCategory,
      this.location.categoryId * this.quiz.questions.perCategory + this.quiz.questions.perCategory,
    );
  }

  getPicturesByPicture() {
    return this.quiz.images.list.slice(
      this.quiz.questions.perType + this.location.categoryId * this.quiz.questions.perCategory,
      // eslint-disable-next-line operator-linebreak
      this.quiz.questions.perType +
        // eslint-disable-next-line operator-linebreak
        this.location.categoryId * this.quiz.questions.perCategory +
        this.quiz.questions.perCategory,
    );
  }

  getPictures() {
    return this.location.type === this.quiz.types.artist
      ? this.getPicturesByArtist()
      : this.getPicturesByPicture();
  }

  getAnswers() {
    const answers = this.getPictures().map((element) => {
      const answer = {
        true: element,
        false: [],
        all: [element],
      };
      while (answer.false.length < this.quiz.questions.answers.false) {
        const variant = Math.floor(
          Math.random() * Object.keys(this.quiz.types).length * this.quiz.questions.perType,
        );

        if (!answer.all.includes(variant)) {
          answer.false[answer.false.length] = this.quiz.images.list[variant];
          answer.all[answer.false.length] = answer.false[answer.false.length - 1];
        }
      }
      return answer;
    });
    // console.log(answers);
    return answers;
  }

  // getQuestions() {
  //   const answers = this.getAnswers();
  //   const cards = answers.map((element) => {
  //     if (this.location)
  //     return {
  //       question: this.location[1];
  //     }
  //   });
  // }
}
