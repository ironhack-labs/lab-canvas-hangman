var hangman;

// function Hangman() {

// }
function Hangman(){
  this.words = ['javascript','ironhack','canvas']
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}
// Hangman.prototype.getWord = function () {

// };
Hangman.prototype.getWord = function(){
var random = Math.floor(Math.random(this.words.length-1 * 1))
return this.secretWord = this.words[random];
};

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };
Hangman.prototype.checkIfLetter = function(keycode){
  if(keycode > 64 && keycode < 91) return true;
  else return false;
}
// Hangman.prototype.checkClickedLetters = function (key) {

// };
Hangman.prototype.checkClickedLetters = function(key){
  if(this.letters.includes(key))return false;
  this.letters.push(key);
  return true;
}

// Hangman.prototype.addCorrectLetter = function (i) {

// };
Hangman.prototype.addCorrectLetter = function(i){
  this.guessedLetter =this.guessedLetter +this.secretWord[i].toUpperCase();
  
}

// Hangman.prototype.addWrongLetter = function (letter) {

// };
Hangman.prototype.addWrongLetter = function(letter){
  var letter = letter;
  this.errorsLeft --;
  
  this.checkGameOver();
}
Hangman.prototype.checkGameOver = function () {
if(this.errorsLeft === 0) return true
return false;
};

Hangman.prototype.checkWinner = function () {
  for(var i=0;i<this.secretWord.length;i++){
  if(this.guessedLetter.includes(this.secretWord[i])) return true;
  return false
} 
  return false


};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  var canvas = new HangmanCanvas(hangman.getWord());
  canvas.drawLines();
};


document.onkeydown = function (e) {

};
