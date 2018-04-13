var hangman;

function Hangman() {
  this.words = ["IRONHACK", "PROJECTOR", "BUILDING"];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  randomNum = (Math.floor(Math.random()) * this.words.length);
  return this.words[randomNum];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  var inputKey = String.fromCharCode(keyCode)
  var regExp = /^[A-Za-z]+$/;
  if (regExp.test(inputKey)){
    return true;
  }

  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key.toUpperCase()) === -1){
    this.letters.push(key.toUpperCase());
    return true;
  }

  return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0){
    return true;
  }

  return false;
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord.length === this.guessedLetter.length){
    return true
  }

  return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};


document.onkeydown = function (e) {
  var letterCount = 0;
  var key = String.fromCharCode(e.keyCode);

  if (hangman.checkIfLetter(e.keyCode)){
    if (hangman.checkClickedLetters(key)){
      for (x=0; x < hangman.secretWord.length; x++){
        if (hangman.secretWord.charAt(x) === key){
          letterCount++;
          hangman.addCorrectLetter(x);
          hangmanCanvas.writeCorrectLetter(x);         
        }
        if (hangman.checkWinner()){
          hangmanCanvas.winner();
        }
      }
      
      


      if (letterCount === 0){
        hangman.addWrongLetter(key.toUpperCase());
        hangmanCanvas.writeWrongLetter(key.toUpperCase(), hangman.errorsLeft);
        console.log(hangman.checkGameOver());
        if (hangman.checkGameOver()){
          hangmanCanvas.gameOver()
        }
      }
    }

    
  }
  
  
};
