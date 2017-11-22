var hangman;

function Hangman() {

  this.words = ["Laa","Lee","Lii","Loo"];
  this.secretWord = this._getWord();
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

Hangman.prototype._getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
  return this.secretWord;

};

Hangman.prototype._checkIfLetter = function(keyCode) {
  this.letters.push(String.fromCharCode(keyCode));
  return ((this.secretWord.indexOf(String.fromCharCode(keyCode)) == -1) ? false : true);

};

Hangman.prototype._checkClickedLetters = function(key) {
  
  return ((this.letters.indexOf(key) == -1) ? true : false);

};

Hangman.prototype._addCorrectLetter = function(i){

  this.guessedLetter += this.secretWord[i].toUpperCase();
  this._checkWinner();

};

Hangman.prototype._addWrongLetter = function (letter){
    this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {

   return (this.errorsLeft == 0) ? true: false;
};

Hangman.prototype._checkWinner = function() {

  if ( this.guessedLetter != undefined && this.secretWord.length != undefined ){

  
  a = this.guessedLetter.split('').sort().join('');
  b = this.secretWord.split('').sort().join('');

  return (( a === b ) ? true : false);
  }else{
    return false;
  }

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
