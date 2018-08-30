class Hangman{

  constructor(){
    this.words = ["JavaScript","Python","Ruby","PHP"];
    this.secretWord = "Python"
    this.letters = []
    this.guessedLetter = []
    this.errorsLeft = 10;
  }
  getWord () {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }
  checkIfLetter(keyCode) {
    return 65 < keyCode && 90 > keyCode || keyCode == 195
  };

  checkClickedLetters(key) {
    return this.letters.indexOf(key) === -1
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()
    this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    this.checkGameOver()
  }

  checkGameOver() {
    return this.errorsLeft === 0
  }

  checkWinner() {
    return this.guessedLetter === this.secretWord
  }
}
document.getElementById('start-game-button').onclick = function () {
  var hangman = new Hangman();
  var draw = new HangmanCanvas()

  // CREAMOS EL BOARD O LO LIMPIAMOS
  draw.createBoard()
  
  


};


document.onkeydown = function (e) {
  
};
