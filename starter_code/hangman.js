var hangman;

function Hangman() {
  this.words = ["AABBCCDD", "WORD", "ABSOLUTELY"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  var randomIndex = Math.floor(Math.random()*this.words.length);
  return this.words[randomIndex];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if ( keyCode>=65 && keyCode<=90) {
    return true;
  } 
  else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  for (var i=0; i<this.letters.length; i++) {
    if (this.letters[i] === key) {
      return false;
    }
  }
  return true;
};

Hangman.prototype._checkIfCorrectLetter = function(letter) {
  var secretArray = this.secretWord.split("");
  for (var i=0; i<secretArray.length; i++){
    if(letter === secretArray[i]){
      return true;
    }
  }
  return false;
}

Hangman.prototype._addCorrectLetter = function(i){
    this.guessedLetter += i;
    this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
  this._checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  if(this.errorsLeft > 0) {
    return false;
  }
  else if (this.errorsLeft === 0){
    return true;
  }
};

Hangman.prototype._checkWinner = function() {
  var secretArray = this.secretWord.split("").sort();
  var uniqueSecretArray = secretArray.filter(function(item, pos) {
    return secretArray.indexOf(item) == pos;
})
  var guessedArray = this.guessedLetter.split("").sort();
    for (var i=0; i<uniqueSecretArray.length; i++) {
        if (uniqueSecretArray[i] !== guessedArray[i]) {
          return false;
        }
    }
    return true;
};

document.getElementById("start-game-button").onclick = function(){
  playGame();
};

function playGame() {
  var hangman = new Hangman();
  var thisWord = hangman._getWord();
  var hc = new HangmanCanvas(thisWord);
  hangman.secretWord = thisWord;

document.onkeydown = function(e) {
  var keyStroke = e.keyCode;
  var keyLetter = String.fromCharCode(keyStroke);
  console.log(keyLetter);
  console.log(keyStroke);
  if(hangman._checkIfLetter(keyStroke)){
    if(!hangman._checkClickedLetters(keyStroke)){
      alert("You already tried that letter.");
    }
    else {
      hangman.letters.push(keyStroke);
      if(hangman._checkIfCorrectLetter(keyLetter)){
        hangman._addCorrectLetter(keyLetter);
        hc._writeCorrectLetter(keyLetter);
        if(hangman._checkWinner()){
          setTimeout(function(){
            alert("You Won!");
            hc.ctx.clearRect(0,0,1200,800);
            hc._winner()}, 1000);
          }
        }
      else {
        hangman._addWrongLetter(keyLetter);
        if(hangman.errorsLeft>0){
          hc._writeWrongLetter(keyLetter, hangman.errorsLeft);
        }
        else {
          alert("You ran out of guesses.");
          hc.ctx.clearRect(0,0,1200,800);
          hc._gameOver();
        }  
      }
    }
  }
  // else {
  //   alert("Please enter a valid letter.");
  // }
};
}


