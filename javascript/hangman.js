class Hangman {
    constructor(words) {
        this.words = words;
        // ... your code goes here
        this.secretWord = words[0];
        this.letters = [];
        this.guessedLetters = "";
        this.errorsLeft = 10;
    }



    pickWord() {
        // ... your code goes here
        const pickedWord = this.words[Math.floor(Math.random() * this.words.length)];
        return this.secretWord = pickedWord;


    }
    checkIfLetter(keyCode) {
        //  ... your code goes here
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
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);

        // ... your code goes here
    });
}

document.addEventListener("keydown", (event) => {
    // React to user pressing a key
    // ... your code goes here
});
