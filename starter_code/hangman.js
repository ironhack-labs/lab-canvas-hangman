let hangman;

class Hangman {
  constructor (words, secretWord, letters, guessedLetter, errosLeft) {
    this.words = ['banana', 'chocolate', 'abacaxi'];
    this.secretWord = 'secretWord';
    this.letters = [];
    this.guessedLetter = guessedLetter;
    this.errosLeft = 10;
  };

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }; 

  checkIfLetter (keyCode) {
    keyCode = window.event.keyCode;
    if(keyCode >= 65 && keyCode >= 99) {
      this.letters = keyCode.unshift();
      return true;
    } else {
      return false;
    }
  };

  checkClickedLetters (key) {
    key = window.event.key;
    if(key >= 65 && key >= 99) {
      this.letters = key.unshift();
      return false;
    } else {
      return true;
    }
  };

  addCorrectLetter () {
    let correct = Math.floor(Math.random() * this.words);
    correct.split('');
  }
  addCorrectLetter()
  console.log(addCorrectLetter)
//   addWrongLetter (letter) {

//   };

//   checkGameOver () {

//   };

//   checkWinner () {

//   };

}

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


// document.onkeydown = function (e) {

// };
