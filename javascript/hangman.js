class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = undefined;
    this.letter = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    this.winner = false;
  }

  pickWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomIndex].toLowerCase();
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return keyCode.match(/^[a-z]$/i);
  }

  checkClickedLetters(letterPicked) {
    return (
      this.letter.includes(letterPicked) ||
      this.guessedLetters.includes(letterPicked)
    );
  }

  addCorrectLetter(letterPicked) {
    this.guessedLetters += letterPicked;
  }

  addWrongLetter(letterPicked) {
    this.letter.push(letterPicked);
    this.errorsLeft--;
  }

  checkGameOver() {
    return !this.errorsLeft > 0;
  }

  checkWinner() {
    let word = this.secretWord;
    for (let i = 0; i < word.length; i++) {
      if (this.guessedLetters.includes(word[0])) {
        word = word.slice(1);
        i--;
      } else {
        i = word.length;
      }
    }
    if (word.length === 0) {
      this.winner = true;
    }
  }
}

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);
    secretWord = hangman.pickWord();
    hangmanBoard = new HangmanCanvas(secretWord);
    hangmanBoard.createBoard();
    hangmanBoard.drawLines();
    hangmanBoard.drawHangman();
    document.addEventListener("keydown", (event) => {
      let letter = event.key.toLowerCase();
      if (
        hangman.checkIfLetter(letter) &&
        !hangman.checkGameOver() &&
        !hangman.checkClickedLetters(letter) &&
        !hangman.winner
      ) {
        if (secretWord.includes(letter)) {
          hangman.addCorrectLetter(letter);
          hangmanBoard.writeCorrectLetter(letter);
        } else if (!secretWord.includes(letter)) {
          hangman.addWrongLetter(letter);
          hangmanBoard.writeWrongLetter(letter);
          hangmanBoard.drawHangman(hangman.errorsLeft);
        }
        if (hangman.checkGameOver()) {
          hangmanBoard.gameOver();
        }
        hangman.checkWinner();
        if (hangman.winner) {
          hangmanBoard.winner();
        }
      }
    });
  });
}
