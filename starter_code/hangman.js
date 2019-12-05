let hangman;

class Hangman {
  constructor() {
    this.words = ['cafe', 'bolacha', 'biscoito'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10; 
}

  getWord() {
    let randomNumber = (Math.floor(Math.random() * this.words.length));
    return this.words[randomNumber]; 
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 91) {
      return true
    } 
    return false
  } 

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
  }

  addWrongLetter(letter) {
     this.errorsLeft -= 1;
  }

  checkGameOver() {
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  new HangmanCanvas(hangman.secretWord)
};

document.onkeydown = (e) => {

};
