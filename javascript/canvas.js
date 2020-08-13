class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById('hangman').getContext('2d');
        this.secretWord = secretWord
        this.writeCorrectLetter = this.writeCorrectLetter
        this.writeWrongLetter = this.writeWrongLetter
        this.drawHangman = this.drawHangman
            // ... your code goes here
    }

    createBoard() {
        this.context.clearRect()
        this.drawLines()
            // ... your code goes here
    }

    drawLines() {
        let counter = 0;

        while (counter < this.secretWord.length) {
            this.context.beginPath();
            this.context.moveTo(counter * 30 + 20, 500);
            this.context.lineTo(counter * 30, 500)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();

            counter++
        }
    }

    writeCorrectLetter(index) {
        // ... your code goes here
        this.context.font = "30px Arial";
        console.log('correct', this.secretWord.split('')[index])

        return this.context.fillText(this.secretWord.split('')[index], index * 30, 480)
    }

    writeWrongLetter(letter, errorsLeft) {
        // ... your code goes here
        this.context.font = "30px Arial";
        console.log('errorsleft', errorsLeft)

        return this.context.fillText(letter, 500 - (errorsLeft * 25), 50)
    }

    drawHangman(errorsLeft) {
        // ... your code goes here
        if (errorsLeft === 9) {
            this.context.beginPath();
            this.context.moveTo(20, 400);
            this.context.lineTo(100, 400)
            this.context.lineTo(60, 350)
            this.context.closePath()
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }


        if (errorsLeft === 8) {
            this.context.beginPath();
            this.context.moveTo(60, 350);
            this.context.lineTo(60, 100)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 7) {
            this.context.beginPath();
            this.context.moveTo(60, 100);
            this.context.lineTo(300, 100)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 6) {
            this.context.beginPath();
            this.context.moveTo(300, 100);
            this.context.lineTo(300, 150)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 5) {
            this.context.beginPath();
            this.context.moveTo(300, 150);
            this.context.arc(300, 180, 30, 0, Math.PI * 2)
            this.context.fill()
            this.context.lineWidth = 5;
            // this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 4) {
            this.context.beginPath();
            this.context.moveTo(300, 210);
            this.context.lineTo(300, 245)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 3) {
            this.context.beginPath();
            this.context.moveTo(300, 245);
            this.context.lineTo(300, 300)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 2) {
            this.context.beginPath();
            this.context.moveTo(300, 300);
            this.context.lineTo(270, 340)
            this.context.lineWidth = 5;
            this.context.stroke();
            this.context.closePath();
        }

        if (errorsLeft === 1) {
            this.context.beginPath();
            this.context.moveTo(300, 300);
            this.context.lineTo(330, 340)
            this.context.lineWidth = 5;
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