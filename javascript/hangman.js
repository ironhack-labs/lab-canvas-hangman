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
            return false;
        } else {
            this.letters.push(letter);
            this.guessedLetters += letter;
            return true;
        }
    }

    addWrongLetter(letter) {
        this.errorsLeft--;
        this.letters.push(letter);
    }

    checkGameOver() {
        if (this.errorsLeft <= 0) {
            return true;
        } else {
          return false;
        }
    }

    checkWinner() {
        let guessedWord = [...this.guessedLetters].sort().join();
        let winningWord = [...this.secretWord].sort().join();
        if (guessedWord === winningWord) {
            return true;
        } else {
            return false;
        }
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
    let letter = event.key;
    console.log(hangman.secretWord);

    if (hangman.checkIfLetter(letterKey)) {
        if (!hangman.checkClickedLetters(letter)) {
            if (hangman.addCorrectLetter(letter)) {
                hangmanCanvas.writeCorrectLetter(letter);
                if (hangman.checkWinner()) {
                  hangmanCanvas.winner();
                }
            } else {
                hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
                if (hangman.checkGameOver()) {
                  hangmanCanvas.gameOver();
                  console.log ('You loose!')
                }
            }
        } else {
            console.log(
                "Letter was already clicked. Please choose another letter."
            );
        }
    } else {
        console.log("Please choose a letter.");
    }
});
