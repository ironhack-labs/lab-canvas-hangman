class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90) return true;
    else return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter) || this.guessedLetters.includes(letter)) return false;
    else return true;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) return false;
    else return true;
  }

  checkWinner() {
    // ... your code goes here
    let orderSecret = this.secretWord.split("").sort().join("");

    let orderGuessed = this.guessedLetters.split("").sort().join("");

    if (orderSecret === orderGuessed) return true;
    else return false;
  }

  getAllIndexes(letter) {
    let i = -1,
      indexes = [];
    while ((i = this.secretWord.indexOf(letter, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }
}

let hangman;
let winner = false;
let looser = false;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisboa"]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    looser = false;
    winner = false;
    hangmanCanvas.createBoard();
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here

  if (hangman) {
    if (hangman.checkIfLetter(event.keyCode)) {
      let letter = String.fromCharCode(event.keyCode).toLowerCase();
      if (hangman.checkClickedLetters(letter) && !winner && !looser) {
        if (hangman.secretWord.includes(letter)) {
          let indexs = hangman.getAllIndexes(letter);
          hangmanCanvas.writeCorrectLetter(indexs);

          let i = 0;
          while (i < indexs.length) {
            hangman.addCorrectLetter(letter);
            i++;
          }
        } else {
          hangman.addWrongLetter(letter);
          hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
          hangmanCanvas.drawHangman(hangman.errorsLeft);
        }

        winner = hangman.checkWinner();
        looser = hangman.checkGameOver();

        if (winner) {
          hangmanCanvas.winner();
        } else if (looser) {
          hangmanCanvas.gameOver();
        }
      }
    }
  }
});
