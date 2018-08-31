function Hangman() {
  this.words = ["manzana", "perro", "gato"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 0;
}

// var hangman = new Hangman();


Hangman.prototype.getWord = function () {
  var randomIndex = Math.floor(Math.random() * (this.words.length - 1));
  return this.words[randomIndex];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  for (var i = 0; i < this.letters.length - 1; i++) {
    if (this.letters.includes(key)) {
      return false;
    } else {
      return true;
    }
  };

};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();

};

 Hangman.prototype.addWrongLetter = function (letter) {
   this.errorsLeft--;
 };

 Hangman.prototype.checkGameOver = function () {
   if (this.errorsLeft == 0) {
     return true;
   } else {
     return false;
   }
 };

 Hangman.prototype.checkWinner = function () {
   var sWord = function() {
  
    var arr = this.secretWord.split("");
    var arr1 = arr.sort();
    var arr2 = arr1.join("");
    return arr2.toUpperCase();
 }.bind(this);
 var gLetter = function() {
   console.log(this.guessedLetter)
  var arr3 = this.guessedLetter.split("");
  var arr4 = arr3.sort();
  var arr5 = arr4.join("");
  return arr5
}.bind(this);

 if (sWord() == gLetter()) {
   return true;
 } else {
   return false;
 }
 }


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
