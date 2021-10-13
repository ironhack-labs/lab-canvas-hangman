class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById("hangman").getContext("2d");
        // ... your code goes here
        this.canvas = document.getElementById("hangman");
        this.secretWord = secretWord;

        this.startPointX = 100;
        this.startPointY = 100;
        this.lineWidth = 20;
        this.startPointsX_arr = [this.startPointX];
        this.errorLetters = "";

        for (let i = 1; i <= this.secretWord.length; i++) {
            this.startPointsX_arr.push(
                (this.startPointX += this.lineWidth + 25)
            );
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
            this.context.lineTo(
                this.startPointsX_arr[i] + this.lineWidth,
                this.startPointY
            );
            this.context.stroke();
        }
    }

    writeCorrectLetter(index) {
        // ... your code goes herevar canvas = document.getElementById("myCanvas");
        this.context.font = "30px Arial";
        // schleife
        // index = schleifenzählen
        // schreib rein an stelle
        this.context.fillText(
            this.secretWord[index],
            this.startPointsX_arr[index],
            this.startPointY - 5
        );
    }

    writeWrongLetter(letter, errorsLeft) {
        // ... your code goes here
        this.context.clearRect(100, 275, 35, 35); // clears errors left number on canvas, for next number
        this.context.font = "30px Arial";
        this.context.fillText(errorsLeft, 100, 300);

        this.errorLetters += letter;

        this.context.fillText(
            this.errorLetters,
            this.startPointsX_arr[0],
            this.startPointY + 80
        );
    }

    drawHangman(errorsLeft) {
        // ... your code goes here
        
        if (errorsLeft === 9) { //floor
            this.context.beginPath();
            this.context.moveTo(150, 500);
            this.context.lineTo(250, 390);
            this.context.lineTo(350, 500);
            this.context.lineTo(150, 500);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 8) { // line up
            this.context.beginPath();
            this.context.moveTo(250, 390);
            this.context.lineTo(250, 200);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 7) { //line right
            this.context.beginPath();
            this.context.moveTo(250, 200);
            this.context.lineTo(400, 200);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 6) { // line down
            this.context.beginPath();
            this.context.moveTo(400, 200);
            this.context.lineTo(400, 250);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 5) { // head
            this.context.beginPath();
            this.context.arc(400, 275, 25, 0, 2 * Math.PI);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 4) { // body
            this.context.beginPath();
            this.context.moveTo(400, 300);
            this.context.lineTo(400, 375);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 3) { //leg left
            this.context.beginPath();
            this.context.moveTo(400, 375);
            this.context.lineTo(380, 400);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 2) {//leg right
            this.context.beginPath();
            this.context.moveTo(400, 375);
            this.context.lineTo(420, 400);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 1) { //arm left
            this.context.beginPath();
            this.context.moveTo(400, 310);
            this.context.lineTo(390, 330);
            this.context.stroke();
            this.context.closePath();
        }
        if (errorsLeft === 0) {//arm right
            this.context.beginPath();
            this.context.moveTo(400, 310);
            this.context.lineTo(410, 330);
            this.context.stroke();
            this.context.closePath();
        }

    }

    gameOver() {
        // ... your code goes here
    }

    winner() {
        // ... your code goes here
    }
}
