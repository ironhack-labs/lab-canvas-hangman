class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById('hangman').getContext('2d');
        this.secretWord = secretWord;
        this.context.strokeStyle = 'black';
    }

    createBoard() {
        this.context.clearRect(0, 0, 1200, 800);
        /* this.drawLines(30, 1200, 60, 1000); */
        this.drawLines(0, 1199, 350, 700);
        this.drawLines(350, 700, 700, 1199);
        this.drawLines(0, 1199, 700, 1199);
        this.drawLines(350, 700, 350, 300);
        this.drawLines(350, 300, 550, 300);
        this.drawLines(550, 300, 550, 350);

        let startPositionX = 500;
        const startPostitonY = 780;
        for (let i = 0; i < this.secretWord.length; i += 1) {
            this.drawLines(startPositionX, startPostitonY, startPositionX + 50, startPostitonY);
            startPositionX += 70;
        }
    }

    drawLines(startX, startY, endX, endY) {
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.stroke();
    }

    writeCorrectLetter(index) {
        let startPositionX = 500;
        const startPostitonY = 780;
        const letter = this.secretWord[index];
        for (let i = 0; i < this.secretWord.length; i += 1) {
            if (this.secretWord[i] === letter) {
                this.context.fillText(letter.toUpperCase(), startPositionX, startPostitonY);
                startPositionX += 120;
            }
        }
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
