let hangman;

class Hangman {
  constructor() {
    this.words = ['Hello', 'How are you', "I'm doing ok"];
    this.secretWord = 'Ironhack';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.secretWord;
    // words[Math.random() * this.words.length]
  }

  checkIfLetter(keyCode) {
    console.log(keyCode);
    if (typeof keyCode === 'number' && keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(key) {
    // return this.letters.includes(key) === -1;
    if (this.letters.includes(key) === -1) {
      console.log(this.letters);
      this.letters.push(key);
      return this.letters.includes(key) === -1;
    } else return this.letters.includes(key) === -1;
  }

  addCorrectLetter(i) {
    for (let j = 0; j < this.letters.length; j++) {
      let pressedLetter = this.letters[j].toUpperCase();
      let secretWord = this.secretWord[i].toUpperCase();
      if (pressedLetter === secretWord) {
        this.guessedLetter += pressedLetters;
      }
    }
  }

  addWrongLetter(letter) {
    if (this.secretWord.includes(letter) === -1) {
      this.errorsLeft--;
    }
  }

  checkGameOver() {}

  checkWinner() {}
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};
hangman = new Hangman();
document.onkeydown = e => {
  // console.log(event.key);
  hangman.checkIfLetter(e.keyCode);
  hangman.checkClickedLetters(`${event.key}`);
  hangman.addCorrectLetter(event.key);
  hangman.addWrongLetter(event.key);
};
// document.addEventListener('keydown', function(event) {
//   console.log(event.which);
// });
