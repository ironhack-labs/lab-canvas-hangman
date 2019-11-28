class HangmanCanvas {
    constructor(secretWord) {
        this.ctx = document.getElementById('hangman').getContext('2d');

    }

    createBoard() {
        this.ctx.clearRect(0, 0, 1200, 800);

    }

    drawLines() {
        // --- lines ---
        this.ctx.beginPath();
        this.ctx.moveTo(50, 750);
        this.ctx.lineTo(150, 750);
        this.ctx.lineTo(100, 710);
        this.ctx.closePath();
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(100, 710);
        this.ctx.lineTo(100, 100);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(100, 100);
        this.ctx.lineTo(400, 100);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(200, 750);
        this.ctx.lineTo(250, 750);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(270, 750);
        this.ctx.lineTo(320, 750);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(340, 750);
        this.ctx.lineTo(390, 750);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(410, 750);
        this.ctx.lineTo(460, 750);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(480, 750);
        this.ctx.lineTo(530, 750);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        /*
        this.ctx.fillStyle = "#000000";
        this.ctx.font = "25px Arial";
        this.ctx.fillText("Beispiel", 210, 240);
        */
    }

    writeCorrectLetter(index) {

        switch (index) {
            case 0:
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "25px Arial";
                this.ctx.fillText(`${this.secretWord[index]}`, 210, 740);
            case 1:
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "25px Arial";
                this.ctx.fillText(`${this.secretWord[index]}`, 280, 740);
            case 2:
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "25px Arial";
                this.ctx.fillText(`${this.secretWord[index]}`, 350, 740);
            case 3:
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "25px Arial";
                this.ctx.fillText(`${this.secretWord[index]}`, 420, 740);
            case 4:
                this.ctx.fillStyle = "#000000";
                this.ctx.font = "25px Arial";
                this.ctx.fillText(`${this.secretWord[index]}`, 490, 740);

        }


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