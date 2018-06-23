var Hangman = function () {
this.words = ['funny', 'smooth', 'argument','ambitious','behave'];
this.secretWord = 'notAWord';
this.correctLetters = [];
this.incorrectLetters = [];
this.errorsLeft = 10;
this.wordSoFar = [];

}

Hangman.prototype.getWord = function () {
 
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
  
};

Hangman.prototype.checkIfLetter = function (letter) {
  var result;
  if(!letter.match(/[a-z]/)){
    alert('sorry, that is not a letter. Please try a letter instead.')
    return;
  }
  var that = this;
  if (this.secretWord.includes(letter)){
    this.correctLetters.push(letter);
    result = true;
  } else {
    this.incorrectLetters.push(letter);
    result = false;
    this.errorsLeft -= 1;
  }
    this.secretWord.split('').forEach(function(eachLetter, index){
      if (eachLetter === letter){
        that.wordSoFar[index] = letter;
      }
    });
    console.log(this);
    return result;
}


// Hangman.prototype.checkClickedLetters = function (key) {
//   if((this.correctLetters.indexOf(key) >= 0) || 
//   (this.incorrectLetters.indexOf(key) >=0)) {
//     return false;
//   } else {
//     return true;
//   }

// };



// Hangman.prototype.addWrongLetter = function (letter) {

//     var bodyParts = ['triangle', 'pole', 'horizontal', 'rope','head', 'body', 'right-arm', 'right-leg', 'left-arm', 'left-leg'];
//     this.incorrectLetters.push(letter);
//     hangmanCanvas.drawHangman(bodyParts[10 - this.errorsLeft]);
//     this.errorsLeft--;};



Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft <= 0){
    alert ('You lose!');
    return true
  } 
};

Hangman.prototype.checkWinner = function () {

  if (this.wordSoFar.join('') === this.secretWord){
    alert ('You win!');
    return true;
  } 
};


// DOM FUNCTIONS

document.getElementById('start-game-button').onclick = function () {
  theGame = new Hangman();
  theGame.getWord();
  hangmanCanvas = new HangmanCanvas(theGame.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();

  var bodyParts = ['triangle', 'pole', 'horizontal', 'rope','head', 'body', 'right-arm', 'right-leg', 'left-arm', 'left-leg'];




document.onkeydown = function (e) {
if (theGame.checkIfLetter(e.key)){
  hangmanCanvas.writeCorrectLetter(theGame.wordSoFar);
} else {
  hangmanCanvas.writeWrongLetter(e.key, theGame.errorsLeft);

  hangmanCanvas.drawHangman(bodyParts[9-theGame.errorsLeft]);
}

setTimeout(function(){
  theGame.checkGameOver();
  theGame.checkWinner();
},1000)
};
};
