class HangmanCanvas {
    constructor(secretWord) {
        this.secretWord = secretWord;
        this.context = document.getElementById('hangman').getContext('2d');
    }

    createBoard() {
        this.context.strokeRect(0, 0, 1200, 550);
        this.drawLines();
    }

    drawLines() {
        let x = 500;
        let y = 450;
        let secretLetters = this.secretWord.split('');
        //console.log(secretLetters);

        for (let i = 0; i < secretLetters.length; i++) {

            //console.log(secretLetters[i])
            this.context.beginPath();
            this.context.moveTo(x, y);
            this.context.lineTo(x += 30, y);
            this.context.stroke();
            this.context.closePath();

            this.context.clearRect(x += 30, y, 50, 50)

        }


    }

    writeCorrectLetter(index, letter) {
        let i = 510
        if (index > 0) i += (60 * index);
        this.context.fillStyle = "black";
        this.context.font = "30px Arial";
        this.context.fillText(letter, i, 440, 500); // 510 440 +100 en x 
    }

    writeWrongLetter(letters, errorsLeft) {
        let x = 800;
        for (let i = 0; i < letters.length; i++) {
            this.context.fillStyle = "black";
            this.context.font = "30px Arial";
            this.context.fillText(letters[i], x += 15, 100, 500) // 510 440 +100 en x
            this.drawHangman(errorsLeft);

            this.context.clearRect(x += 15, 100, 50, 50)
        }

    }

    drawHangman(errorsLeft) {
        console.log(errorsLeft)
        this.context.beginPath();

        if (errorsLeft < 5) {
            this.context.arc(300, 185, 35, 0, Math.PI * 2);
            this.context.stroke();
        }

        if (errorsLeft < 1) {
            //leg
            this.context.moveTo(300, 350); // /
            this.context.lineTo(250, 400);
            this.context.stroke();
        }

        if (errorsLeft < 2) {
            ///leg
            this.context.moveTo(300, 350); // 
            this.context.lineTo(350, 400);
            this.context.stroke();
        }

        if (errorsLeft < 3) {
            //arm
            this.context.moveTo(300, 260); // 
            this.context.lineTo(350, 320);
            this.context.stroke();
        }

        if (errorsLeft < 4) {
            //arm
            this.context.moveTo(300, 260); // 
            this.context.lineTo(260, 320);
            this.context.stroke();
        }

        if (errorsLeft < 4) {
            //body
            this.context.moveTo(300, 220); // |
            this.context.lineTo(300, 350);
            this.context.stroke();
        }

        if (errorsLeft < 6) {
            this.context.moveTo(300, 100); // |
            this.context.lineTo(300, 150);
            this.context.stroke();
        }

        if (errorsLeft < 7) {
            this.context.moveTo(125, 100); // -
            this.context.lineTo(300, 100);
            this.context.stroke();
        }

        if (errorsLeft < 8) {
            this.context.moveTo(125, 100); // -
            this.context.lineTo(300, 100);
            this.context.stroke();
        }


        if (errorsLeft < 9) {
            this.context.moveTo(125, 450); // |
            this.context.lineTo(125, 100);
            this.context.stroke();
        }


        if (errorsLeft < 10) {
            // base
            this.context.moveTo(125, 450); // \ este es el punto fijo
            this.context.lineTo(200, 500);
            this.context.stroke();

            this.context.moveTo(125, 450);
            this.context.lineTo(50, 500); // /
            this.context.stroke();

            this.context.moveTo(50, 500); // -
            this.context.lineTo(200, 500);
            this.context.stroke();
            this.context.closePath();

        }

    }

    gameOver() {
        const img = new Image();
        img.src = 'images/gameover.png';
        img.onload = () => {
            //ctx.globalAlpha = 0.5
            this.context.drawImage(img, 0, 0, 1200, 550);
        }
    }

    winner() {
        const img = new Image();
        img.src = 'images/awesome.png';
        img.onload = () => {
            this.context.drawImage(img, 0, 0, 1200, 550);
        }
    }
}