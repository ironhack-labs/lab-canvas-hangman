var hangman;

function Hangman() {
  this.words = ["casa", "perro", "coche"];
  this.secretWord = "";
  this.letters = ["a","v","b"];
  this.guessedLetter = "asa";
  this.errorsLeft = 10;
}

 Hangman.prototype.getWord = function () {
   this.secretWord = this.words[parseInt(Math.random()*this.words.length)];
  return this.words[parseInt(Math.random()*this.words.length)]
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if((keyCode >= 65 && keyCode <= 90) ||
   (keyCode >= 97 && keyCode <= 122) ||
  (keyCode == 164 || keyCode == 165) ){
    return true;
  } return false;
 }
 Hangman.prototype.checkClickedLetters = function (key) {
    return !(this.letters.includes(key))
 };

 Hangman.prototype.addCorrectLetter = function (letter) {
  if(this.secretWord.toUpperCase().includes(letter.toUpperCase())){
    this.guessedLetter += letter;
    this.checkWinner(); 
  } return i;
 };

 Hangman.prototype.addWrongLetter = function (letter) {
  if(!this.secretWord.includes(letter)){
     this.errorsLeft--;
  }
 };

 Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    return true;
  } return false;
 };

 Hangman.prototype.checkWinner = function () {
 return this.guessedLetter.length == this.secretWord.length;
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
  hangman.getWord();
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
  hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
  hangmanCanvas.drawHangman();
  hangmanCanvas.writeCorrectLetter(hangman.guessedLetter.split(""));
};


document.onkeydown = function (e) {

};
