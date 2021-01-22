class Hangman {
    constructor(words) {
        this.words = words;
        this.secretWord = this.pickWord();
        this.letters = [];
        this.guessedLetters = "";
        this.errorsLeft = 10;

    }

    pickWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }

    checkIfLetter(keyCode) {
        if (keyCode.keyCode >= 65 && keyCode.keyCode <= 90)
            return true
    }


    checkClickedLetters(letter) {
        this.letters.push(letter)
        for (let i = 0; i < this.letters.length; i++)
            if (this.letters[i].indexOf(letter) === -1) {
                return false
            } else { return true }
    }




    addCorrectLetter(letter) {
        if (this.checkClickedLetters(letter) === true) {
            this.guessedLetters += letter
            this.letters.push(letter)
        }
    }


    addWrongLetter(letter) {
        // ... your code goes here
    }

    checkGameOver() {
        if (this.errorsLeft > 0) {
            return false
        } else {
            return true
        }
    }

    checkWinner() {
        // ... your code goes here
    }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

        // HINT (uncomment when start working on the canvas portion of the lab)
        // hangman.secretWord = hangman.pickWord();
        // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

        // ... your code goes here
    });
}

document.addEventListener('keydown', event => {
    // React to user pressing a key
    // ... your code goes here
});