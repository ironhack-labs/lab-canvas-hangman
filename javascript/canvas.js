class HangmanCanvas {
    constructor(secretWord) {
        this.canvas = document.getElementById('hangman')
        this.context = this.canvas.getContext('2d');
        this.secretWord = secretWord
            // ... your code goes here
    }
    createBoard() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawLines()
    }
    drawLines() {
        let x = 600
        let y = 500
        for (let i = 0; i < this.secretWord.length; i++) {
            this.context.beginPath()
            this.context.moveTo(x, y)
            this.context.lineTo(x + 30, y)
            this.context.stroke()
            this.context.closePath()
            x += 50
        }
    }
    writeCorrectLetter(index) {
        let x = 600
        let y = 480
        this.context.fillText(index, x, y)
        this.context.moveTo(x + 30, y)
    }
    writeWrongLetter(letter, errorsLeft) {
        // ... your code goes here
    }
    drawHangman(errorsLeft) {
        // ... your code goes here
    }
    gameOver() {
        // ... your code goes here
    }
    winner() {
        // ... your code goes here
    }
}