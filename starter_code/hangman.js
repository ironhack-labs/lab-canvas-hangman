var hangman;
var hangmanCanvas;

function Hangman() {
  this.words = ['Ironhack'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetters = '';
  this.errorsLeft = 6;
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
  var index;
  for (i=0;i<this.secretWord.length;i++){
    if(this.secretWord[i].toUpperCase() === testLetter.toUpperCase()){
      result = 1;
      index = i;
    }
  }
  if (result){
    this.guessedLetters +=1
    console.log(i);
    hangmanCanvas.writeCorrectLetter(index);
  }
  if (this.secretWord.length === this.guessedLetters.length){
    hangmanCanvas.drawLeftLeg();
    alert("you won!")
    hangman = new Hangman();
    hangmanCanvas = new HangmanCanvas(hangman.getWord());
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  }
}  

Hangman.prototype.addWrongLetter = function (testLetter) {
  var result = 0;
  for (i=0;i<this.secretWord.length;i++){
    if(this.secretWord[i].toUpperCase() === testLetter.toUpperCase()){
     result = 1;
    }
  }
  if(!result && hangman.checkIfLetter(testLetter)){
    this.errorsLeft -=1
    hangmanCanvas.writeWrongLetter(testLetter.toUpperCase(),this.errorsLeft);
  }

  switch (this.errorsLeft) {
    case 5:
      hangmanCanvas.drawHead();
      break;
    case 4:
      hangmanCanvas.drawBody();
      break;
    case 3:
      hangmanCanvas.drawRightHand();
      break;
    case 2:
      hangmanCanvas.drawLeftHand();
      break;
    case 1:
      hangmanCanvas.drawRightLeg();
      break;
    case 0:
      hangmanCanvas.drawLeftLeg();
      alert("game over!")
      hangman = new Hangman();
      hangmanCanvas = new HangmanCanvas(hangman.getWord());
      hangmanCanvas.createBoard();
      hangmanCanvas.drawLines();
      break;
    default:
      break;
  }

};

Hangman.prototype.checkGameOver = function () { //Not using this one, I check in the addWrongLetter method.
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
