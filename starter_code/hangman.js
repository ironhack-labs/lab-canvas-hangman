var hangman;

function Hangman() {
this.words = ['apple','banana', 'grapes', 'computer','map','fan','whiteboard'];
this.secretWord = this.getWord();
this.letters = [];
this.guessedLetter = '';
this.errorsLeft = 10;


}

 Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()* this.words.length )];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if((64 < keyCode && keyCode < 91) || (96 < keyCode && keyCode < 123)){
  return true;
}else{
  return false;
}
};

Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)){
    return false;
  }else{
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
   
};

Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
if(this.guessedLetter.toUpperCase() === this.secretWord.toUpperCase()){
  return true;
}else{
  return false;
}
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
