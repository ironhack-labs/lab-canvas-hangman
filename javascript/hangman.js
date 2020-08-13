class Hangman {
    constructor(words) {
        this.words = words;
        this.secretWord = (this.words[Math.floor(Math.random() * this.words.length)]);
        this.letters = [];
        this.guessedLetters = '';
        this.errorsLeft = 10;
    }

    pickWord() {
        // ... your code goes here
        return this.words[Math.floor(Math.random() * this.words.length)]
    }

    checkIfLetter(keyCode) {
        // ... your code goes here
        if (keyCode >= 65 && keyCode <= 90) {
            return true;
        } else {
            return false;
        }
    }

    checkClickedLetters(letter) {
        return !this.letters.includes(letter);
    }

    addCorrectLetter(letter) {
        this.guessedLetters = letter;
    }

    addWrongLetter(letter) {
        this.errorsLeft--;
        this.letters.push(letter)
    }

    checkGameOver() {
        if (this.errorsLeft > 0) {
            return false
        } else {
            return true
        }
    }

    checkWinner() {
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.guessedLetters.includes(this.secretWord[i])) {
                return true
            } else {
                return false;
            }
        }
    }
}


let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

        // HINT (uncomment when start working on the canvas portion of the lab)
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);

        // ... your code goes here
        hangmanCanvas.drawLines()


        document.addEventListener('keydown', event => {
            // React to user pressing a key
            // ... your code goes here

            const index = hangmanCanvas.secretWord.split('').indexOf(event.key);
            console.log(hangmanCanvas.secretWord)


            if (index === -1) {
                hangman.errorsLeft = hangman.errorsLeft - 1;

                console.log('errors left', hangman.errorsLeft)
                hangmanCanvas.drawHangman(hangman.errorsLeft)
                hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft - 1)
            } else {
                hangmanCanvas.writeCorrectLetter(index)
            }
        });
    });
}