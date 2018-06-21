var hangman;
var canvas;

function Hangman() {
  this.words = ['casa', 'ironhack', 'javascript', 'hangman'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var randNum = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[randNum];
  return this.words[randNum];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var clicked = this.letters.indexOf(key.toUpperCase());

  if(clicked < 0){
    return true;
  }
  return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.letters.push(this.secretWord[i].toUpperCase());
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  this.letters.push(letter);
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {

  var len = this.secretWord.length;
  var contador = 0;
  for(var j=0; j < len; j++){
    if(!(this.guessedLetter.indexOf(this.secretWord[j]) < 0)){
      contador++;
    }
  }
  if(contador === len){
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  var secret =  hangman.secretWord;
  canvas = new HangmanCanvas(secret);
  canvas.createBoard(); 
  canvas.drawLines();
};


document.onkeydown = function (e) {

};
