class Hangman {
    constructor(words) {
        this.words = words;
        // ... your code goes here
        this.secretWord = words[0];
        this.letters = [];
        this.guessedLetters = "";
        this.errorsLeft = 10;
    }

    randomRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    pickWord() {
        // ... your code goes here
        // this.words
        const randomNumber = this.randomRange(0, this.words.length);
        let pickedWord = this.words[randomNumber];
        this.secretWord = pickedWord;
        return pickedWord;
    }
    checkIfLetter(keyCode) {
        //  ... your code goes here
        // if (keyCode >= 65 && keyCode <= 90)
        //   return true
        // else
        //   false
        return keyCode >= 65 && keyCode <= 90
    }

    checkClickedLetters(letter) {
        // ... your code goes here
        return !this.letters.includes(letter)
    }

    addCorrectLetter(letter) {
        // ... your code goes here
        this.guessedLetters += letter;
    }

    addWrongLetter(letter) {
        // ... your code goes here
        this.errorsLeft--;
        if (this.checkClickedLetters(letter)) {
            this.addCorrectLetter(letter);
        }
    }

    checkGameOver() {
        return this.errorsLeft <= 0
    }

    checkWinner() {
        // ... your code goes here
        // return this.secretWord === this.guessedLetters
        this.secretWord
        this.guessedLetters

        let isComplete = []
        for (let char of this.secretWord) {
          if (this.guessedLetters.includes(char))
            isComplete.push(true)
          else
          isComplete.push(false)
        }
        return !isComplete.includes(false)
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
        // hangman.secretWord = hangman.pickWord();
        // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

        // ... your code goes here
    });
}

document.addEventListener("keydown", (event) => {
    // React to user pressing a key
    // ... your code goes here
});
