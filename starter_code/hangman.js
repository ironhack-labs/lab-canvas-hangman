class Hangman {
  constructor(words) {
    this.words = [];
    this.secretWord = "dogs";
    this.lettersPicked = [];
    this.correctLetter = [];
    this.incorrectLetter = [];
    this.errorsLeft = 10;
  }

  getWord() {
    var secretWord = this.words[Math.floor(Math.random() * this.words.length)];

    this.secretWord = secretWord;
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      console.log("true");
      this.lettersPicked.push(keyCode);
      return true;
    } else {
      console.log("false");
      return false;
    }
  }

  checkClickedLetters(key) {
    var array = this.lettersPicked;

    if (array.includes(key)) {
      alert("You have already chosen this letter");
      console.log(this.lettersPicked);
    } else {
      this.lettersPicked.push(key);
      console.log(this.lettersPicked);

      if (this.secretWord.includes(key)) {
        this.correctLetter.push(key);
        console.log("CORRECT");
        this.checkIfWin();
      } else {
        this.incorrectLetter.push(key);
        this.errorsLeft -= 1;
        this.board.drawHangman(10 - this.errorsLeft)
        console.log("WRONG");
        this.checkGameOver();
      }
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      setTimeout(alert("You lose!"), 1000);
    }
  }

  checkIfWin() {
    console.log(this.correctLetter.length);
    console.log(this.secretWord.length);
    if (this.correctLetter.length === this.secretWord.length) {
      alert("You win!");
    }
  }
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  theBoard = new hangmanCanvas(hangman.secretWord);
  hangman.board = theBoard;
  hangman.board.drawLines();


};

document.onkeydown = function(e) {
  if (hangman.checkIfLetter(e.keyCode) === true) {
    hangman.checkClickedLetters(e.key);
  }
};
