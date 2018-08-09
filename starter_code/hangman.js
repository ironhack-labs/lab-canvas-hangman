function Hangman() {
  this.words = ["Tree", "Shirt"];
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
  // hang.writeCorrectLetter(1);
};

document.onkeydown = function(e) {
  var letter = e.key;
  var keycode = e.keyCode;
  if (hangman.checkIfLetter(keycode)) {
    /// CHECK IF IT WAS ALREADY PUSHED------
    if (hangman.checkClickedLetters(letter)) {
      //CHECK IF LETTER IS IN WORD
      if (hangman.verify(letter)) {
        //CORRECT GUESS
        for (let i = 0; i < hangman.secretWord.length; i++) {
          if (hangman.secretWord[i] === letter) {
            var index = i;
            hang.writeCorrectLetter(index);
            hangman.addCorrectLetter(index);
            if (hangman.checkWinner()) {
              alert("Winner!");
            }
          }
        }
        /////INCORRECT GUESS -----------------
      } else {
        console.log("ClickedLetters = neg");
        hangman.letters.push(letter);
        hang.writeWrongLetter(letter, hangman.errorsLeft);
        hang.drawHangman(hangman.errorsLeft);
        hangman.addWrongLetter(letter);
        if (hangman.checkGameOver()) {
          alert("LOSER!!");
        }
      }
    } else {
      alert("You Guessed that already");
    }
  } else {
    alert("Lower Case LETTERS Only Please");
  }
  //END OF KEYDOWN;
};
