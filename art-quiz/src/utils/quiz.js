class Quiz {
  constructor(images, dictionary, categories) {
    this.types = {
      artist: 'artist',
      picture: 'picture',
    };
    this.categories = categories;
    this.questions = {
      total: 240,
      perType: 120,
      perCategory: 10,
      answers: {
        true: 1,
        false: 3,
      },
      results: {
        grand: 10,
        congrats: 7,
        gameover: 6,
      },
    };
    this.rating = {
      grand: 'grand',
      congrants: 'congrats',
      gameover: 'gameover',
    };
    this.language = {
      en: 'en',
      ru: 'ru',
    };
    this.timeGame = {
      timeGame: false,
      timeStep: 5,
      minTime: 5,
      maxTime: 30,
    };
    this.sound = {
      sound: true,
      value: 40,
      min: 0,
      max: 100,
    };
    this.images = {
      list: images,
      url: {
        full: 'https://raw.githubusercontent.com/irinainina/image-data/master/full/',
        small: 'https://raw.githubusercontent.com/irinainina/image-data/master/img/',
      },
    };
    this.dictionary = dictionary;
    this.config = 'quiz-config';
  }
}

export default Quiz;
