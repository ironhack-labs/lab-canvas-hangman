function Hangman() {
  this.words = [ "Tee", "Shirt"];
  this.secretWord = "";
  this.letters = [];
  this.errorsLeft = 10;
  // this.clickedLetters = [];
  this.guessedLetter = "";
}

Hangman.prototype.getWord = function() {
  var index = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[index].toLowerCase();
  return this.words[index];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {
  var rightLetter = this.secretWord[i];
  this.guessedLetter += rightLetter;
  console.log("Correct:" + this.secretWord);
};

Hangman.prototype.verify = function(letter) {
  return this.secretWord.includes(letter);
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
  return !this.errorsLeft > 0;
};

Hangman.prototype.checkWinner = function() {
  return this.guessedLetter.length === this.secretWord.length;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.getWord();
  hang = new HangmanCanvas(hangman.secretWord);
  console.log("Start:" + hangman.secretWord);
  //DRAWINGS
  hang.createBoard();
 
};







document.onkeydown = function(e) {
  var letter = e.key;
  var keycode = e.keyCode;
  if (hangman.checkIfLetter(keycode)) {
    if (hangman.checkClickedLetters(letter)) {
      hangman.letters.push(letter);
      for (let i = 0; i < hangman.secretWord.length; i++) {
        if (hangman.secretWord[i] === letter) {
 
          var index = i;
          hangman.addCorrectLetter(index);
        }
      }
    } else {
      hangman.addWrongLetter(letter);
    }
    if (hangman.checkWinner()) {
      alert("Winner!");
    }
    if (hangman.checkGameOver()) {
      alert("LOSER!!");
    }
  }
 };
