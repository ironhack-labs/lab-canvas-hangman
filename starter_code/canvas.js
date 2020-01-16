class HangmanCanvas {
    constructor(secretWord) {
        this.ctx = document.getElementById('hangman').getContext('2d');
        this.secretWord = secretWord;
    }

    createBoard() {
        const $canvas = document.querySelector("canvas");
        const ctx = $canvas.getContext("2d");
    }

    drawLines() {

    }

    writeCorrectLetter(index) {

    }

    writeWrongLetter(letter, errorsLeft) {

    }

    drawHangman(shape) {

    }

    gameOver() {

    }

    winner() {

    }

}