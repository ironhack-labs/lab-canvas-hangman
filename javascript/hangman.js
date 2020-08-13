class Hangman {
    constructor(words) {
        this.words = words;
        this.secretWord = words[(Math.ceil(Math.random() * (words.length - 1)))];
        this.letters = [],
            this.guessedLetters = '',
            this.errorsLeft = 10
    }

    pickWord() {
        return this.words[(Math.ceil(Math.random() * (this.words.length - 1)))];
    }

    checkIfLetter(keyCode) {
        if (keyCode >= 65 && keyCode <= 90) {
            return true
        } else {
            return false
        }
    }

    checkClickedLetters(letter) {
        let clickedLetter = true
        this.letters.forEach(element => {
            if (element === letter) {
                clickedLetter = false
            }
        })
        return clickedLetter
    }

    addCorrectLetter(letter) {
        if (this.checkClickedLetters(letter) === true) {
            this.guessedLetters += letter
            this.letters.push(letter)
        }
    }

    addWrongLetter(letter) {
        if (this.checkClickedLetters(letter) === true) {
            this.letters.push(letter)
            this.errorsLeft--
        }
    }

    checkGameOver() {
        if (this.errorsLeft > 0) {
            return false
        } else {
            return true
        }
    }

    checkWinner() {
        let secretWordArray = this.secretWord.split('')
        let winner = true
        secretWordArray.forEach(letter => {
            if (!this.guessedLetters.includes(letter)) winner = false
        })
        return winner
    }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);
        hangmanCanvas.createBoard()
    });
}
//
document.addEventListener('keydown', event => {
    let letter = event.key
    let keycode = event.keyCode

    if (hangman.checkIfLetter(keycode)) {
        if (hangman.checkClickedLetters(letter)) {
            if (hangman.secretWord.includes(letter)) {
                hangman.addCorrectLetter(letter)
                let secretWordArray = hangman.secretWord.split('')
                secretWordArray.forEach((el, index) => {
                    if (el === letter) {
                        hangmanCanvas.writeCorrectLetter(index)
                    }
                })
                if (hangman.checkWinner()) hangmanCanvas.winner()
            } else {
                hangman.addWrongLetter(letter)
                hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)
                hangmanCanvas.drawHangman(hangman.errorsLeft)
                if (hangman.checkGameOver()) hangmanCanvas.gameOver()
            }
        }
    }
});