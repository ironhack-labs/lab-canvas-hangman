var hangman;

function Hangman() {
  this.words=["ironhack","hangman","game"]
  this.secretWord="";
  this.letters=[]
  this.guessedLetter=""
  this.errorsLeft=10
}

Hangman.prototype.getWord = function () {

  var index=Math.floor(Math.random()*this.words.length)
  this.secretWord=this.words[index]
  return this.secretWord
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ( (keyCode>=65&&keyCode<=90)||(keyCode>=97&&keyCode<=122))
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key)
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter=this.guessedLetter+this.secretWord[i].toUpperCase();
  return this.checkWinner();
  

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  return this.checkGameOver();
};

 Hangman.prototype.checkGameOver = function () {
return this.errorsLeft==0;
 };

 Hangman.prototype.checkWinner = function () {
  for(var i=0;i<this.secretWord.length;i++){
    if(!this.guessedLetter.includes(this.secretWord[i])){
      return false;
    }
  }
  return true;
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  
};


document.onkeydown = function (e) {

};
