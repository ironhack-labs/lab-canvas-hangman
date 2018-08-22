var hangman;

function Hangman() {
  this.words = ['perro', 'ironhack', 'parangaricutirimicuaro'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode<=90 && keyCode>=65 ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.includes(key) ? false : true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += i;
  this.letters.push(i);
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft --;
  this.letters.push(letter);
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0 ? true : false;
};

Hangman.prototype.checkWinner = function () {
  for(i=0; i<this.secretWord.length;i++){
    if(!this.secretWord.includes(this.guessedLetter[i])){
      return false;
    }    
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  console.log('clicked')
  hangman = new Hangman();
  var board = new HangmanCanvas(hangman.getWord());
  board.createBoard();
  console.log(hangman.secretWord);
};


document.onkeydown = function (e) {

};
