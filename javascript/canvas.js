class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById("hangman").getContext("2d");
        // ... your code goes here
        this.canvas = document.getElementById("hangman")
        this.secretWord = secretWord;
    }

    createBoard() {
        // ... your code goes here
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawLines();
    }

    drawLines() {
        // ... your code goes here
        let startPointX = 100
        const startPointY = 500
        const lineWidth = 50
        for (let i = 0; i < this.secretWord.length; i++){
          this.context.beginPath();
          this.context.moveTo(startPointX, startPointY);
          this.context.lineTo(startPointX+lineWidth, startPointY);
          this.context.stroke();
          startPointX+=lineWidth+25
        }
    }

    writeCorrectLetter(index) {
        // ... your code goes here
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
