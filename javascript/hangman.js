class Hangman {
    constructor(words) {
        this.words = words;
        this.secretWord = this.pickWord()
        this.letters = [];
        this.guessedLetters = "";
        this.errorsLeft = 10;
    }

    pickWord() {
        let randomNumber = Math.floor(Math.random() * this.words.length)
        let randomWord = this.words[randomNumber]
        return randomWord
    }

    checkIfLetter(keyCode) {
        if (keyCode >= 65 && keyCode <= 90) { return true } else { return false }
    }

    checkClickedLetters(letter) {
        if (this.letters.includes(letter)) {
            return false
        } else {
            return true;
        }
    }

    addCorrectLetter(letter) {
        this.guessedLetters += letter;
    }

    addWrongLetter(letter) {
        this.errorsLeft--;
        this.letters.push(letter);
    }

    checkGameOver() {
        if (this.errorsLeft > 0) { return false } else { return true }
    }

    checkWinner() {
        for (let i = 0; i < this.secretWord.length; i++) {
            if (!this.guessedLetters.includes(this.secretWord[i])) {
                return false
            }
        }
        return true
    }
}

let hangman;
const startGameButton = document.getElementById('start-game-button');
const img = document.querySelector('img')
if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);
        hangmanCanvas.createBoard()
        img.style.display = 'none'
    });
}
document.addEventListener('keydown', event => {
    if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event)) {
        hangmanCanvas.writeCorrectLetter(event.key)
    } else if (hangman.checkIfLetter(event.keyCode) && !hangman.checkClickedLetters(event)) {
        hangmanCanvas.writeWrongLetter(event.key)
        hangmanCanvas.drawHangman()
    }
});