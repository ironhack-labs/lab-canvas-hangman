let hangman;

class Hangman {
  constructor() {
    this.words = [
      //keep to lowercase
      "aaaaa" //5a
      /*
      "elbow",
      "steward",
      "incongruous",
      "proper",
      "suspect",
      "support",
      "person",
      "hut",
      "cultivate",
      "fail",
      "row",
      "rape",
      "culture",
      "mirror",
      "dictionary",
      "widen",
      "suspicion",
      "despair",
      "presence",
      "explain"*/
    ];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    let inp = String.fromCharCode(keyCode);
    return /[a-zA-Z]/.test(inp);
  }

  checkClickedLetters(key) {
    return !(
      this.letters.includes(key.toUpperCase()) ||
      this.letters.includes(key.toLowerCase())
    );
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toLowerCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter.toLowerCase());
    this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft == 0;
  }

  checkWinner() {
    return this.guessedLetter.length == this.secretWord.length;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = e => {
  console.log(e);
  // if the key pressed is a letter and if the letter was not already clicked
  if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
    // check if the letter is included in the secret word
    let idx = hangman.secretWord.indexOf(e.key.toLowerCase());
    if (idx != -1) {
      hangman.addCorrectLetter(idx);
      //check if letter appears more than once
      idx = hangman.secretWord.indexOf(e.key.toLowerCase(), idx + 1);
      while (idx != -1) {
        hangman.addCorrectLetter(idx);
        idx = hangman.secretWord.indexOf(e.key.toLowerCase(), idx + 1);
      }
    } else {
      hangman.addWrongLetter(e.key);
    }
  }
};
