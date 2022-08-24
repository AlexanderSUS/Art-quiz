class Quiz {
  constructor() {
    this.questions = {
      total: 240,
      perType: 120,
      perCategory: 10,
      answers: {
        true: 1,
        false: 3,
      },
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
  }
}

export default Quiz;
