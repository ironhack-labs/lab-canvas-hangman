class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
        this.context.beginPath()
        this.context.moveTo(370 + 80 * i, 700)
        this.context.lineTo(430 + 80 * i, 700)
        this.context.stroke()
        this.context.closePath()
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
        if (typeof index.length === "undefined") {
            this.context.font = "60px Arial";
            this.context.fillText(this.secretWord[index], 385 + 80 * index, 690);

        } else {
            index.forEach((element, i) => {

                this.context.font = "60px Arial";
                this.context.fillText(this.secretWord[element], 385 + 80 * element, 690);

            });




        }


  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let y = 390
    let x = 0
    letter.forEach((element, index) => {
        x = 800 + 80 * index;
        this.context.font = "60px Arial"
        console.log(900 + 80 * index);
        if (900 + 80 * index >= 1300) {
            y = 450;
            x -= 400;
        }
        console.log(errorsLeft);
        if (errorsLeft === 0) {
            console.log("perdiste");
            this.gameOver();
        }
        this.context.fillText(element, x, y)

    });


  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(500, 650);
        this.context.lineTo(1100, 650);
        this.context.stroke();
        break;

      case 8:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(575, 650);
        this.context.lineTo(575, 50);
        this.context.stroke();
        break;

      case 7:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(575, 50);
        this.context.lineTo(900, 50);
        this.context.stroke();
        break;

      case 6:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(900, 50);
        this.context.lineTo(900, 150);
        this.context.stroke();
        break;

      case 5:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.arc(900, 200, 50, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.stroke();
        break;

      case 4:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 250);
        this.context.lineTo(900, 450);
        this.context.stroke();
        break;

      case 3:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 300);
        this.context.lineTo(1050, 350);
        this.context.stroke();
        break;

      case 2:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 300);
        this.context.lineTo(750, 350);
        this.context.stroke();
        break;

      case 1:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 450);
        this.context.lineTo(1050, 600);
        this.context.stroke();
        break;

      case 0:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 450);
        this.context.lineTo(750, 600);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    // ... your code goes here

  }

  winner() {
    // ... your code goes here

  }
}
