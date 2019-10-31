let hangman;
function Hangman() {
  this.words = ["HOLA", "JAVASCRIPT", "RICARDO", "BATMAN", "IRONHACK", "HACK"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = [];
  this.errorsLeft = 5;
}
Hangman.prototype.getWord = function() {
  var word = this.words[Math.floor(Math.random() * this.words.length)];
  return word;
};
Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};
Hangman.prototype.checkClickedLetters = function(key) {
  var clicked = this.letters.indexOf(key);
  if (clicked === -1) return true;
  else return false;
};
Hangman.prototype.addLetter = function(key) {
  if (this.checkClickedLetters(key)) {
    this.letters.push(key);
  }
};

addCorrectLetter(i) {
  

}
// class Hangman {
//   // constructor() {
//   function Hangman() {
//     this.words = ["HOLA", "JAVASCRIPT", "RICARDO", "BATMAN", "IRONHACK", "HACK"];
//     this.secretWord = "";
//     this.letters = [];
//     this.guessedLetter = [];
//     this.errorsLeft = 5;
//   }
//   }

//   getWord() {

//   }

//   checkIfLetter(keyCode) {

//   }

//   checkClickedLetters(key) {

//   }


//   addWrongLetter(letter) {

//   }

//   checkGameOver() {

//   }

//   checkWinner() {

//   }

// }

// document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };
