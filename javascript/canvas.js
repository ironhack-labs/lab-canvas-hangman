class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById("hangman").getContext("2d");
        // ... your code goes here
        this.canvas = document.getElementById("hangman")
        this.secretWord = secretWord;

        this.startPointX = 100
        this.startPointY = 100
        this.lineWidth = 20
        this.startPointsX_arr = [this.startPointX]

        for (let i = 1; i <= this.secretWord.length; i++){
            this.startPointsX_arr.push(this.startPointX+=this.lineWidth+25)
          }
    }

    createBoard() {
        // ... your code goes here
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawLines();
    }

    drawLines() {
        // ... your code goes here
        for (let i = 0; i < this.secretWord.length; i++){
          this.context.beginPath();
          this.context.moveTo(this.startPointsX_arr[i], this.startPointY);
          this.context.lineTo(this.startPointsX_arr[i]+this.lineWidth, this.startPointY);
          this.context.stroke();
        }
    }

    writeCorrectLetter(index) {
        // ... your code goes herevar canvas = document.getElementById("myCanvas");
        this.context.font = "30px Arial";
        // schleife
        // index = schleifenzählen
        // schreib rein an stelle
        this.context.fillText(this.secretWord[index], this.startPointsX_arr[index] ,this.startPointY-5);
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
