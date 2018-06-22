var hangman;
var hangmanCanvas;

function Hangman() {
  this.words = ['Ironhack'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetters = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
  return this.secretWord
};

Hangman.prototype.checkIfLetter = function (keyCode) {  
  return (keyCode.length === 1 && typeof(keyCode) === 'string');
};

Hangman.prototype.checkClickedLetters = function (key) {
  var result = false;
  this.letters.forEach(function(letterInArray){
    if(letterInArray==key){
      result = true;
    };
  });
  return result;
};

Hangman.prototype.addCorrectLetter = function (testLetter) {
  var result = 0;
  var i;
  for (i=0;i<this.secretWord.length;i++){
    if(this.secretWord[i].toUpperCase() === testLetter.toUpperCase()){
      result = 1;
    }
  }
  if (result){
    this.guessedLetters +=1
    // console.log(i);
    hangmanCanvas.writeCorrectLetter(i);
  }
}  

Hangman.prototype.addWrongLetter = function (testLetter) {
  var result = 0;
  for (i=0;i<this.secretWord.length;i++){
    // console.log(this.secretWord[i].toUpperCase());
    // console.log(testLetter.toUpperCase());
    // console.log((this.secretWord[i].toUpperCase() !== testLetter.toUpperCase()));
    if(this.secretWord[i].toUpperCase() !== testLetter.toUpperCase()){
     result = 1;
    }
  }
  if(result){
    // console.log(result);
    this.errorsLeft -=1
    hangmanCanvas.writeWrongLetter(testLetter.toUpperCase(),this.errorsLeft);
  }
};

Hangman.prototype.checkGameOver = function () {
  return !(this.errorsLeft > 0);
};

Hangman.prototype.checkWinner = function () {
  return (this.guessedLetters.length >= this.secretWord.length)
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());

  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();

};

document.onkeydown = function (e) {
  hangman.addCorrectLetter(e.key.toUpperCase())
  hangman.addWrongLetter(e.key.toUpperCase())
  console.log(e);
};
