let hangman;

class Hangman {
  constructor() {
    this.words = ['Hello', 'How are you', "I'm doing ok"];
    this.secretWord = [];
    // this.letters = [];
    // this.guessedLetter = '';
    // this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.random() * this.words.length];
  }

  checkIfLetter(keyCode) {
    if (typeof keyCode === 'string') return true;
    return false;
  }

  checkClickedLetters(key) {}

  addCorrectLetter(i) {}

  addWrongLetter(letter) {}

  checkGameOver() {}

  checkWinner() {}
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
