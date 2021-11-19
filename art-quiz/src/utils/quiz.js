class Quiz {
  constructor(images, dictionary, covers) {
    this.types = {
      artist: 'artist',
      picture: 'picture',
    };
    this.category = {
      portrait: 'Portrait',
      landscape: 'Landscape',
      stillife: 'Stil life',
      impressionism: 'Impressionism',
      expressionism: 'Expressionism',
      avantgarde: 'Avant-garde',
      renaissance: 'Renaissance',
      surrealism: 'Surrealism',
      kitsch: 'Kitsch',
      minimalism: 'Minimalism',
      interior: 'Interior',
      nude: 'Nude',
    };
    this.questions = {
      total: 240,
      perType: 120,
      perCategory: 10,
      answers: {
        true: 1,
        false: 3,
      },
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
    this.covers = covers;
  }
}

export default Quiz;
