class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(
      0,
      this.canvas.width,
      this.canvas.height,
    );
    this.drawLines();
    console.log('mapy')
  }

  drawLines() {
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.drawLines();
    switch (errorsLeft) {
      case 0:
        drawBase1();
        break;
      case 1:
        drawBase2();
        break;
      case 2:
        drawBase3();
        break;
      case 3:
        drawLine1();
        break;
      case 4:
        drawLine2();
        break;
      case 5:
        drawLine3();
        break;
      case 6:
        drawHead();
        break;
      case 7:
        drawBody();
        break;
      case 8:
        drawLeg1();
        break;
      case 9:
        drawLeg2();
        break;
    }

    for (var i = 0; i <= this.errorsLeft; i++) {
      drawHangman(i);
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    function drawBase1() {
      context.lineWidth = 5;
      context.moveTo(100, 700);
      context.lineTo(200, 700);
      context.stroke();
      context.closePath();
    }

    function drawBase2() {
      context.lineWidth = 5;
      context.moveTo(200, 700);
      context.lineTo(150, 650);
      context.stroke();
      context.closePath();
    }

    function drawBase3() {
      context.lineWidth = 5;
      context.moveTo(100, 700);
      context.lineTo(150, 650);
      context.stroke();
      context.closePath();
    }

    function drawLine1() {
      context.lineWidth = 5;
      context.moveTo(150, 650);
      context.lineTo(150, 300);
      context.stroke();
      context.closePath();
    }

    function drawLine2() {
      context.lineWidth = 5;
      context.moveTo(150, 300);
      context.lineTo(350, 300);
      context.stroke();
      context.closePath();
    }

    function drawLine3() {
      context.lineWidth = 5;
      context.moveTo(350, 300);
      context.lineTo(350, 350);
      context.stroke();
      context.closePath();
    }

    function drawHead() {
      context.lineWidth = 5;
      context.beginPath();
      context.arc(350, 390, 40, 0, Math.PI * 2, false);
      context.stroke();
      context.closePath();
    }

    function drawBody() {
      context.lineWidth = 5;
      context.moveTo(350, 430);
      context.lineTo(350, 600);
      context.stroke();
      context.closePath();
    }
    function drawLeg1() {
      context.lineWidth = 5;
      context.moveTo(350, 600);
      context.lineTo(300, 650);
      context.stroke();
      context.closePath();
    }
    function drawleg2() {
      context.lineWidth = 5;
      context.moveTo(350, 600);
      context.lineTo(400, 650);
      context.stroke();
      context.closePath();
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
