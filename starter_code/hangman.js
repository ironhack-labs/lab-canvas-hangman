

function Hangman() {
  this.words=["pingpong","Giorgio","Mundial"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;
}

Hangman.prototype.getWord = function () {
var random=Math.floor(Math.random()*this.words.length);
console.log(this.words[random])
this.secretWord=this.words[random]
return this.secretWord
 };
 //keyCode>=65 && keyCode<=90 || 
Hangman.prototype.checkIfLetter = function (keyCode) {
if(97<=keyCode && 122>=keyCode){
  return true
}
return false
};

Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)){
    return true;
  }
  return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  console.log(i);
 this.guessedLetter+=this.secretWord[i].toUpperCase();
 return this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft==0){
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {
  if(this.secretWord.length==this.guessedLetter.length){
    return true;
  }
  return false;
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
