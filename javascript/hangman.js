class Hangman {
    constructor(words) {
        this.words = words;
        this.secretWord = "";
        this.letters = [];
        this.guessedLetters = "";
        this.errorsLeft = 10;
    }

    pickWord() {
        let gameWord =
            this.words[Math.floor(Math.random() * this.words.length)];
        return gameWord;
    }

    checkIfLetter(keyCode) {
        if (keyCode >= 65 && keyCode <= 90) {
            return true;
        }
        return false;
    }

    checkClickedLetters(letter) {
        if (this.letters.indexOf(letter) === -1) {
            return false;
        }
        return true;
    }

    addCorrectLetter(letter) {
        if (this.secretWord.indexOf(letter) === -1) {
            this.addWrongLetter(letter);
        }
        this.letters.push(letter);
        this.guessedLetters += letter;
    }

    addWrongLetter(letter) {
        this.errorsLeft--;
        this.letters.push(letter);
    }

    checkGameOver() {
        if (this.errorsLeft > 0) {
            return false;
        }
        return true;
    }

    checkWinner() {
      let winner;
      for (let i = 0; i < this.guessedLetters.length; i++) {
      if (this.secretWord.indexOf(this.guessedLetters[i]) != -1) {
          winner += this.secretWord.match(this.guessedLetters[i]).length;
        }
      }
        if (this.secretWord.length === winner) {
            return true;
        }
        return false;
    }
}

let hangman;

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

        // HINT (uncomment when start working on the canvas portion of the lab)
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);
        hangmanCanvas.createBoard();
        // ... your code goes here
    });
}

document.addEventListener("keydown", (event) => {
    // React to user pressing a key
    let letterKey = event.keyCode;
    if (checkIfLetter(letterKey)) {
        if (!checkClickedLetters(letterKey)) {

          
        }
        return "Letter was already clicked. Please choose another letter.";
    }
    return "Please choose a letter.";
});
