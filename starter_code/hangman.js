let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = [
      ["sesame", "tall annual herbaceous plant"],
      ["awful", "very bad or unpleasant"],
      ["taste", "the ability to discern what is of good quality"],
      ["await", "remain in readiness for a purpose"],
      ["relation", "the way in which people are connected"],
      ["stub", "a truncated remnant"],
      ["picture", "an impression of something formed from a description"],
      ["brush", "a light and fleeting touch"],
      ["timbre", "the character or quality of a musical sound"],
      ["ceramic", "permanently hardened by heat"],
      ["moron", "a stupid person"],
      ["enjoy", "take delight or pleasure in"]
    ];
    this.secretWord = "";
    this.wordHint = "";
    this.letters = [];
    this.wrongLetter = "";
    this.guessedLetter = "";
    this.errorsLeft = 10;
    this.key;
    this.keyCode;
    this.index = [];
  }

  getWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomWord][0];
    this.wordHint = this.words[randomWord][1];
    console.log(this.secretWord, this.wordHint);
    return this.words[randomWord][0];
  }

  checkIfLetter() {
    if (this.keyCode >= 65 && this.keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters() {
    if (this.letters.indexOf(this.key) == -1) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(i) {
    this.index.push(i);
    this.letters.push(this.key);
    this.guessedLetter += this.key;
    this.checkGameOver();
    this.checkWinner();
  }

  addWrongLetter() {
    this.letters.push(this.key);
    this.wrongLetter += this.key;
    this.errorsLeft--;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      let i = 0;
      for (; i < this.secretWord.length; i++) {
        let letter = this.secretWord[i].toUpperCase();
        if (!this.guessedLetter.includes(letter)) {
          hangmanCanvas.solve(i, letter);
        }
      }
      hangmanCanvas.gameOver();
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      hangmanCanvas.winner();
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.drawLines();
  hangmanCanvas.drawSideBar();
  hangmanCanvas.writeHint();
  hangmanCanvas.loadImage();
};
document.addEventListener("keydown", function(e) {
  hangman.keyCode = e.keyCode;
  hangman.key = String.fromCharCode(e.keyCode);
  let letter = hangman.key.toLowerCase();
  let word = hangman.secretWord;
  let isLetter = hangman.checkIfLetter();
  let newLetter = hangman.checkClickedLetters();

  if (isLetter && newLetter && word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == letter) {
        hangman.addCorrectLetter(i);
        hangmanCanvas.writeCorrectLetter(i);
      }
    }
  } else if (isLetter && newLetter) {
    hangman.addWrongLetter();
    hangmanCanvas.writeWrongLetter();
    hangman.checkGameOver();
    hangmanCanvas.drawHangman(hangman.wrongLetter.length);
  }
});
