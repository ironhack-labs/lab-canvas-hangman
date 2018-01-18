var hangman;

function Hangman() {
this.words=[];
this.secretWord= "number";
this.letters= [];
this.guessedLetter="";
this.errorsLeft= 10;
}
Hangman.prototype.getWord = function () {
 if (this.words.length <= 0) {
   return '';
 }
 var aux = Math.floor(Math.random * this.words.length);
 return this.words[aux];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
 return 65 <= keyCode && keyCode <= 90 ;
};    

Hangman.prototype.checkClickedLetters = function (key) {
 if (typeof (key) == 'string') {
   return !this.letters.includes(key);
 }
 return false;
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
