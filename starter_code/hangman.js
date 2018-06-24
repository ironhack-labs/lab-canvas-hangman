var hangman;

 function Hangman() {

  //ATTRIBUTES
  this.words = ["uno", "dos", "tres"] ;
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

  //METHODS

  // this.getWord = function() {
  //   var indexe = Math.floor(Math.random()* this.words.length);
  //   var palab = this.words[indexe];
  //   return palab;

  // }

 }

Hangman.prototype.getWord = function () {
  var indexe = Math.floor(Math.random()* this.words.length);
  this.secretWord = this.words[indexe];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    if(keyCode >= 65 && keyCode <= 122 ){
      return true;
    } else {
      return false;
    }
    
  }
  

Hangman.prototype.checkClickedLetters = function (key) {
  // checkClickedLetters. Checks if the pressed letter has already 
  // been pressed and returns true if it was not or false in the opposite case.
var clicked = this.letters.indexOf(key);

if( clicked < 0) {
  return true;
} else return false;

  // Hangman.prototype.checkIfLetter(key);
  
  // for( var i = 0; i < this.letters.length; i++){
    
  //   if(key === this.letters[i]){
  //     console.log("Ya estaba");
  //     return false;
  //   } else {
  //     this.letters.push(key);
  //     console.log("No estaba");
      
  //   }
  //   return true;
  // }

};

Hangman.prototype.addCorrectLetter = function (i) {
  // adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.

};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
