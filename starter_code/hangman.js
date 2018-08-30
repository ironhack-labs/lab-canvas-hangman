var hangman;
var canvas;

function Hangman() {
  this.words = ["apple", "car", "racoon"],
  this.secretWord = "",
  this.letters = [],
  this.guessedLetter = "",
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  var randomNumber = Math.floor(Math.random() * this.words.length);  
  return this.secretWord = this.words[randomNumber];

};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var isClicked = true
  this.letters.forEach(function (element){
    if (element == key){
      return isClicked = false;
    } 
  });
  if (this.guessedLetter.includes(key)) {
    return isClicked = false;
  }
  return isClicked;

};

Hangman.prototype.checkLetterInSecretWord = function (key) {
  var isPresent = hangman.secretWord.includes(key);
  return isPresent;
};

Hangman.prototype.addCorrectLetter = function (i) {
  var thisLetter =  this.secretWord[i].toUpperCase();
  this.guessedLetter += thisLetter;
    
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
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
  if (this.secretWord.length === this.guessedLetter.length){
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas();
  startNewGame();
};


document.onkeydown = function (e) {
  var isItALetter = hangman.checkIfLetter(e.keyCode); 
  if (isItALetter == true){
    var isUnusedLetter = hangman.checkClickedLetters(e.key);
    if (isUnusedLetter == true){
      var isInSecretWord = hangman.checkLetterInSecretWord(e.key);
      if (isInSecretWord == true){
        hangman.addCorrectLetter(e.key);
        canvas.writeCorrectLetter(e.key);
        hangman.checkWinner();
      } else {
        hangman.addWrongLetter(e.key);
        canvas.writeWrongLetter(e.key, hangman.errorsLeft);
        hangman.checkGameOver();
      }
    };
}
   
};

function startNewGame()  {
hangman.getWord();
canvas.createBoard();
}