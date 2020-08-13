// javascripts/intro.js
// const canvas = document.getElementById('hangman');
// const ctx = canvas.getContext('2d');


class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById('hangman').getContext('2d');
        this.cw = 1200;
        this.ch = 800;
        this.ipx = 500;
        this.ipy = 500;
        this.secretWord = secretWord;
        // ... your code goes here
    }

    createBoard() {
        // ctx.clearRect
        // ... your code goes here
        this.context.clearRect(0, 0, this.cw, this.ch)
        this.context.beginPath();
        this.context.moveTo(75, 450);
        this.context.lineTo(150, 500);
        this.context.lineTo(0, 500);
        this.context.lineTo(75, 450);
        this.context.lineTo(75, 0);
        this.context.lineTo(350, 0);
        this.context.lineTo(350, 50);
        this.context.stroke();

    }


    drawLines() {
        // ... your code goes here

        let x = 200;
        for (let i = 0; i < this.secretWord.length; i++) {

            this.context.beginPath();
            this.context.moveTo(x, 500);
            this.context.lineTo(x + 40, 500);
            this.context.stroke();
            x += 50

        }


    }

    writeCorrectLetter(index) {
        // ... your code goes here

        let x = 1050 + index * -55;



        this.context.fillText(this.secretWord[index], 0, 0);
    }

    writeWrongLetter(letter, errorsLeft) {
        // ... your code goes here
        let x = 1050 + errorsLeft * -55;
        this.context.fillText(letter, x, 150);
    }

    drawHangman(errorsLeft) {
        // ... your code goes here
        switch (shape) {
            case 'head':
                this.context.beginPath();
                this.context.arc(350, 85, 35, 0, Math.PI * 2);
                this.context.stroke();
                this.context.closePath();
                break;

            case 'body':
                this.context.beginPath();
                this.context.moveTo(350, 120);
                this.context.lineTo(350, 270);
                this.context.stroke();
                break;

            case 'left leg':
                this.context.beginPath();
                this.context.moveTo(350, 270);
                this.context.lineTo(300, 350);
                this.context.stroke();
                break;

            case 'right leg':
                this.context.beginPath();
                this.context.moveTo(350, 270);
                this.context.lineTo(400, 350);
                this.context.stroke();
                break;

            case 'left arm':
                this.context.beginPath();
                this.context.moveTo(350, 160);
                this.context.lineTo(270, 210);
                this.context.stroke();
                break;

            case 'right arm':
                this.context.beginPath();
                this.context.moveTo(350, 160);
                this.context.lineTo(430, 210);
                this.context.stroke();
                break;

            case 'left foot':
                this.context.beginPath();
                this.context.moveTo(300, 350);
                this.context.lineTo(270, 350);
                this.context.stroke();
                break;

            case 'right foot':
                this.context.beginPath();
                this.context.moveTo(400, 350);
                this.context.lineTo(430, 350);
                this.context.stroke();
                break;

            case 'left eye':
                this.context.beginPath();
                this.context.moveTo(335, 70);
                this.context.lineTo(345, 80);
                this.context.moveTo(345, 70);
                this.context.lineTo(335, 80);
                this.context.stroke();
                break;

            case 'right eye':
                this.context.beginPath();
                this.context.moveTo(355, 70);
                this.context.lineTo(365, 80);
                this.context.moveTo(365, 70);
                this.context.lineTo(355, 80);
                this.context.stroke();
                break;

            default:
                break;
        }
    }


    gameOver() {
        // ... your code goes here
        document.getElementById("loser").className += " visible";
        this.context.clearRect(0, 0, 1200, 500);
        const gameOverImg = new Image();
        gameOverImg.src = './images/gameover.png';
        gameOverImg.onload = () => this.context.drawImage(gameOverImg, 315, 0, 570, 240);
    }



    winner() {
        // ... your code goes here
        document.getElementById("winner").className += " visible";
        this.context.clearRect(0, 0, 1200, 500);
        const winnerImg = new Image();
        winnerImg.src = './images/awesome.png';
        winnerImg.onload = () => this.context.drawImage(winnerImg, 247, 0, 705, 500);
    }
}