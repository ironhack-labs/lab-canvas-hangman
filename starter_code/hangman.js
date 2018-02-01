var hangman;

function Hangman() {
  this.words = ['IRONHACK'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode > 64 && keyCode < 91)
    return true;
  else 
    return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
    if(this.letters.indexOf(key) === -1){
      //this.letters.push(String.fromCharCode(key));
      return true;
    }
    else
      return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  var character = String.fromCharCode(i).toLocaleUpperCase();
  if(this.secretWord.indexOf(character) !== -1 && this.guessedLetter.indexOf(character) === -1){
    this.guessedLetter += character;
    hangmanCanvas.writeCorrectLetter(character);
    console.log(this.guessedLetter);  
  }
  this.checkWinner();
  return this.checkGameOver();
    
};

Hangman.prototype.addWrongLetter = function (letter) {
  //console.log("calls addwrong");
  if(this.secretWord.indexOf(letter) === -1){
    if(hangman.letters.includes(letter)){
      return false;
    }
    this.errorsLeft--;
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
    hangman.letters.push(letter);
  }
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    hangmanCanvas.gameOver();
    return true;
  }
  else
    return false;
};

Hangman.prototype.checkWinner = function () {
  // for(var i = 0; this.guessedLetter.length; i++) {
  //   if(this.secretWord.indexOf(this.guessedLetter[i] === -1))
  //     return false;
  // }
  //   return true;
  console.log(this.guessedLetter.length);
  console.log(this.secretWord.length);
  if(this.guessedLetter.length === this.secretWord.length){
    //console.log("CALSSS");
    hangmanCanvas.winner();
    return true;
  }
  else  
    return false;
};

document.getElementById('start-game-button').onclick = function () {
  // hangman = new Hangman();
  // hangmanCanvas = new HangmanCanvas(hangman.getWord());
  // hangmanCanvas.createBoard();
  // hangmanCanvas.drawLines(hangman.secretWord.length);
};


function start(){
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines(hangman.secretWord.length);
}

document.onkeydown = function (e) {
  var keycode = e.which;
  if(hangman.checkClickedLetters(keycode)){
    //hangman.checkClickedLetters(keycode);
    hangman.addCorrectLetter(keycode);
    hangman.addWrongLetter(String.fromCharCode(keycode));
    //console.log(hangman.guessedLetter);
      
    
  }
};
