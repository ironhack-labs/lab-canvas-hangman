class HangmanCanvas {
    constructor(secretWord, errorsLeft) {
        this.context = document.getElementById("hangman").getContext("2d");
        // ... your code goes here
        this.canvas = document.getElementById("hangman")
        this.secretWord = secretWord;
        this.errorsLeft = errorsLeft;

        this.startPointX = 100
        this.startPointY = 100
        this.lineWidth = 20
        this.startPointsX_arr = [this.startPointX]

        for (let i = 1; i <= this.secretWord.length; i++) {
            this.startPointsX_arr.push(this.startPointX += this.lineWidth + 25)
        }


    }

    createBoard() {
        // ... your code goes here
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawLines();
    }

    drawLines() {
        // ... your code goes here
        for (let i = 0; i < this.secretWord.length; i++) {
            this.context.beginPath();
            this.context.moveTo(this.startPointsX_arr[i], this.startPointY);
            this.context.lineTo(this.startPointsX_arr[i] + this.lineWidth, this.startPointY);
            this.context.stroke();
            this.context.closePath();
        }
        this.context.beginPath();
        this.context.font = "30px Arial";
        this.context.fillText("Mistakes left: ", 100, 200)
        this.context.font = "red"
        this.context.fillText(this.errorsLeft, 300, 200);
        this.context.closePath();
    }

    writeCorrectLetter(index) {
        // ... your code goes herevar canvas = document.getElementById("myCanvas");
        this.context.font = "30px Arial";
        // schleife
        // index = schleifenzählen
        // schreib rein an stelle
        this.context.fillText(this.secretWord[index], this.startPointsX_arr[index], this.startPointY - 5);
    }

    writeWrongLetter(letter, errorsLeft) {
        this.context.beginPath();
        this.context.clearRect(290, 150, 100, 100);
        this.context.font = "red"
        this.context.fillText(errorsLeft, 300, 200);
        this.context.closePath();



    }

    drawHangman(errorsLeft) {


    }

    gameOver() {
        // ... your code goes here
    }

    winner() {
        // ... your code goes here
    }
}
