export default class Model {
  constructor(config, quiz) {
    this.quiz = quiz;
    this.quizConfig = JSON.parse(localStorage.getItem(this.quiz.config)) || config;
    this.location = null;
    this.answers = null;
    this.config = {
      settings: {
        lang: 'ru',
      },
      results: {
        artist: new Array(Object.keys(this.quiz.category).length)
          .fill(null)
          .map(() => new Array(this.quiz.questions.perCategory).fill(null)),
        picture: new Array(Object.keys(this.quiz.category).length)
          .fill(null)
          .map(() => new Array(this.quiz.questions.perCategory).fill(null)),
      },
    };
  }

  getResults() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    return this.config.results[this.location.type].map((element) => {
      const rate = element.reduce(reducer);
      return rate;
    });
  }

  pickResult(result) {
    // eslint-disable-next-line operator-linebreak
    this.config.results[this.location.type][this.location.categoryId][this.location.pageNum] =
      result;
  }

  getLocation() {
    const hash = document.location.hash.slice(1).split('=');
    this.location = {
      page: hash[0],
      type: hash[1],
      categoryId: hash[2],
      pageNum: hash[3],
    };
  }

  getDataByArtist() {
    return this.quiz.images.list.slice(
      this.location.categoryId * this.quiz.questions.perCategory,
      this.location.categoryId * this.quiz.questions.perCategory + this.quiz.questions.perCategory,
    );
  }

  getDataByPicture() {
    return this.quiz.images.list.slice(
      this.quiz.questions.perType + this.location.categoryId * this.quiz.questions.perCategory,
      // eslint-disable-next-line operator-linebreak
      this.quiz.questions.perType +
        // eslint-disable-next-line operator-linebreak
        this.location.categoryId * this.quiz.questions.perCategory +
        this.quiz.questions.perCategory,
    );
  }

  getData() {
    return this.location.type === this.quiz.types.artist
      ? this.getDataByArtist()
      : this.getDataByPicture();
  }

  getAnswers() {
    this.answers = this.getData().map((element) => {
      const answer = {
        true: element,
        false: [],
        all: [element],
      };
      while (answer.false.length < this.quiz.questions.answers.false) {
        const variant = Math.floor(Math.random() * this.quiz.questions.total);

        if (!answer.all.includes(variant)) {
          answer.false[answer.false.length] = this.quiz.images.list[variant];
          answer.all[answer.false.length] = answer.false[answer.false.length - 1];
        }
      }
      return answer;
    });
  }

  shuffleAnswers() {
    this.answers.forEach((element) => {
      for (let i = element.all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const k = element.all[i];
        element.all[i] = element.all[j];
        element.all[j] = k;
      }
    });
  }

  isLastQuestion() {
    return +this.location.pageNum === this.quiz.questions.perCategory - 1;
  }
}
