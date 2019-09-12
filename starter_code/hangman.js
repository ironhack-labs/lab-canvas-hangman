let hangmanObj;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ["apple", "banana", "watermelon"];
    this.secretWord = "";
    this.letters = [""];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    let index = Math.floor(Math.random()*this.words.length);
    this.secretWord = this.words[index];
    return this.words[index];   
  }

  checkIfLetter(keyCode) {
    return ((keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90));
  }

  checkClickedLetters(key) {
    return (this.letters.indexOf(key) === -1);
  }

  checkGameOver() {
    return (this.errorsLeft == 0);
  }

  checkWinner() {
    return (this.secretWord.length === this.guessedLetter.length);
  }

  addCorrectLetter(i) {   
    this.guessedLetter += this.secretWord[i].toUpperCase();
    return this.guessedLetter;
    // while (arrSecretWord.indexOf(String.fromCharCode(i)) !== -1){
    //   arrSecretWord.splice(arrSecretWord.indexOf(String.fromCharCode(i)), 1)
    //   this.guessedLetter += String.fromCharCode(i);
    // }
  }

  addWrongLetter(letter) {
    this.errorsLeft -=1
    this.checkGameOver();
  }
}

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangmanObj = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangmanObj.getWord());
  hangmanCanvas.clearBoard();
  hangmanCanvas.drawLines();
};


document.onkeydown = function (e) {
  // console.log(hangmanObj)
  if (!hangmanObj.checkIfLetter(e.keyCode)) {
    return alert("Coloque um caractere válido!");
  } else {
      let char = String.fromCharCode(e.keyCode)
      if (!hangmanObj.checkClickedLetters(char)) {
        return alert("Caractere já digitado");
      } else { 

      }
}
    
};
