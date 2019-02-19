var hangman;

function Hangman() {
  this.words = ["Elefante", "Perro", "Gato", "Pez", "Caballo"];
    this.secretWord=this.getWord();
    this.letters=[];
    this.guessedLetter = "";
    this.errorsLeft=10;
 }

 Hangman.prototype.getWord = function () {
   var aleatoryWord = Math.floor(Math.random() * this.words.length);
   return this.words[aleatoryWord];

 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
        if (keyCode > 64 && keyCode < 91) { //A=keycode 65 || Z= Keycode 90
          return true;
        } else {
          return false;
        }

 };

 Hangman.prototype.checkClickedLetters = function (key) {
        if (this.letters.includes(key)) {
          return false;
        } else {
          return true;
        }


 };

 Hangman.prototype.addCorrectLetter = function (i) {
     this.guessedLetter += this.secretWord[i].toLocaleUpperCase();
    

 };

 Hangman.prototype.addWrongLetter = function (letter) {
   if (!letter.includes(this.secretWord)) {
     this.errorsLeft -= 1;
   }


 };

 Hangman.prototype.checkGameOver = function () {
   if (this.errorsLeft == 0) {
     return true;
   } else {
     return false;
   }

 };

 Hangman.prototype.checkWinner = function () {

   if (this.guessedLetter.length === this.secretWord.length) {
     return true;
   }
   else {
     return false;
   }

 };

//problemas de scope.NO ME COGE DOCUMENT NO?

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  myCanvas.createBoard();
  myCanvas.drawLines();
}.bing(document);

document.addEventListener('keydown', function () { });

document.onkeydown = function (e) {
  hangman.checkIfLetter(e.keyCode);

}.bing(hangman);


