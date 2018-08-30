var hangman;

function Hangman() {
  this.words = ['cadena', 'string', 'array'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  this.secretWord = Math.floor(Math.random()*this.words.length);
  return this.words[Math.floor(Math.random()*this.words.length)];
  //this.secretWord = 

};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 90 || keyCode < 65) {
    return false;
  } else return true;
  /*
  var re = new RegExp(/[^a-z]/, 'i');
  var re2 = '/[^a-z]/i'
  console.log( keyCode);
  */


};

Hangman.prototype.checkClickedLetters = function (key) {
  
  if (this.letters.includes(key)) {
    return false;
  } else return true;
};

Hangman.prototype.addCorrectLetter = function (i) {

  this.guessedLetter += this.secretWord.charAt(i).toUpperCase();
  this.checkWinner();
    //user wins

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  
    this.checkGameOver();
  
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0){
    return true;
  } else {return false;}
};

Hangman.prototype.checkWinner = function () {
  //var cont = 0;
  /*
  for (var i = 0; i < this.guessedLetter.length; i++)
  if (this.secretWord.includes(this.guessedLetter[i])){
    cont++;
  }
  if (cont >= this.secretWord.length) {
    return true;
  } else {return false;}
  */
  var arraySecret = this.secretWord.split("").sort().join();
  var arrayGuessed = this.guessedLetter.split("").sort().join();

  if (arraySecret === arrayGuessed){
    return true;
  } else {return false;}

  
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  var canvas = new HangmanCanvas(hangman.getWord());
  canvas.drawLines();
};


document.onkeydown = function (e) {

};
