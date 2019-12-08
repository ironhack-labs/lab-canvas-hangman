class HangmanCanvas {
    constructor(secretWord) {
        this.lineGap = 20;
        this.lineWidth = 30;
        this.secretWord = secretWord;

        this.lines = [];

        this.ctx = document.getElementById('hangman').getContext('2d');
        this.ctx.clearRect(0, 0, 1200, 500);
        this.ctx.font = "30px Arial";
    }

    createBoard() {

    }

    drawLines() {

        let x = 360;
        let y = 463;

        this.ctx.beginPath();

        this.secretWord.split('').forEach(() => {

            x += this.lineGap + this.lineWidth;

            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + this.lineWidth, y);
            this.ctx.stroke();

            this.lines.push({ posX: x, posY: y });
        });
    }

    writeCorrectLetter(index) {

        let posX = this.lines[index].posX + 2;
        let posY = this.lines[index].posY - 4;

        this.ctx.fillText(this.secretWord[index], posX, posY);
    }

    writeWrongLetter(letter, errorsLeft) {
        let diff = 10 - errorsLeft;
        let index = diff * 30 + 650;

        this.ctx.fillText(letter, index, 60);
    }

    drawHangman(errorsLeft) {
        switch (errorsLeft) {
            case 9:
                this.ctx.moveTo(226, 400);
                this.ctx.lineTo(154, 458);
                this.ctx.lineTo(299, 458);
                this.ctx.lineTo(226, 400);
                this.ctx.stroke();
                break;

            case 8:
                this.ctx.lineTo(226, 40);
                this.ctx.stroke();
                break;

            case 7:
                this.ctx.lineTo(500, 40);
                this.ctx.stroke();
                break;

            case 6:
                this.ctx.lineTo(500, 90);
                this.ctx.stroke();
                break;

            case 5:
                this.ctx.beginPath();
                this.ctx.arc(500, 130, 40, 0, 2 * Math.PI);
                this.ctx.stroke();
                break;

            case 4:
                this.ctx.beginPath();
                this.ctx.moveTo(500, 170);
                this.ctx.lineTo(500, 320);
                this.ctx.stroke();
                break;

            case 3:
                this.ctx.lineTo(430, 380);
                this.ctx.stroke();
                break;

            case 2:
                this.ctx.moveTo(500, 320);
                this.ctx.lineTo(560, 385);
                this.ctx.stroke();
                break;

            case 1:
                this.ctx.moveTo(500, 210);
                this.ctx.lineTo(440, 270);
                this.ctx.stroke();
                break;

            case 0:
                this.ctx.moveTo(500, 210);
                this.ctx.lineTo(550, 270);
                this.ctx.stroke();
                break;

            default:
                break;
        }

    }

    gameOver() {

    }

    winner() {

    }

}