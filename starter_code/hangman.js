var hangman;

function Hangman() {
  this.words = [""];
  this.secretWord="";
  this.letters = [];
  this.guessedLetter = [];
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {

  return "";
};

Hangman.prototype._checkIfLetter = function(keyCode) {

if ((keyCode > 65) && (keyCode < 90)){

  return true;

}else{
  return false;
}
  return keyCode;
};

Hangman.prototype._checkClickedLetters = function(key) {

  if(this.letters.includes(key)) {
    return false;

  }else{
    this.letters.push();
    return true;
  }
};

Hangman.prototype._addCorrectLetter = function(i){
   var keySplit = this.secretWord.split('');
  return this.guessedLetter = keySplit[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){

this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft == 0){
    return true;
  }else{
    return false;
  }
};
Hangman.prototype._checkWinner = function() {

if (this.secretWord.length == this.guessedLetter.length){
return true;
}else{
return false;
}
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
