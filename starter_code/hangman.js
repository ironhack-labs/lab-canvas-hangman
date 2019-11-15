let hangman;

class Hangman {
  constructor() {
    this.words = ['STRING','CLASS','JAVASCRIPT','CONDITIONALS','ARRAYS','OBJECTS'];
    this.secretWord = '';
    this.letters = [''];
    this.guessedLetter = '';
    this.errorsLeft = 10;

  }

  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft-=1;
  }

  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true;
    }
    return false;
  }

  checkWinner() {
    return this.guessedLetter.split('').sort().join('') === this.secretWord.split('').sort().join('')
  }
}
document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
