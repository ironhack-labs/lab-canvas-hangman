var hangman;

function Hangman() {
this.words= ["games","mongo","angular"];
this.secretWord = "";
this.letters = [""];
this.guessedLetter = ""
this.errorleft = 10 
}


Hangman.prototype.getWord = function () {
  var index = Math.floor(Math.random() * this.words.length);
  return this.words[index];
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
  var checkletter = ""
  if (typeof("string") === checkletter){
    return true;
  }else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {

};

Hangman.prototype.addCorrectLetter = function (i) {

};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {

};

Hangman.prototype.checkWinner = function () {

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
