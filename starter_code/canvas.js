class HangmanCanvas {
  constructor(secretWord) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.secretWord = secretWord;
  }


  createBoard() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 10;
    ctx.beginPath();
    //test
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

  drawLines() {

    if (ctx) {

      for (let i = 0; i < this.secretWord.length; i++) {
        ctx.strokeStyle = '#000000';
        ctx.beginPath();
        ctx.moveTo(500 + 50 * i, 650);
        ctx.lineTo(540 + 50 * i, 650);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }

  writeCorrectLetter(index) {
    ctx.font = "60px Arial";
    ctx.fillText(this.secretWord[index], 500 + 100 * index, 650);
  };


  writeWrongLetter(letter, errorsLeft) {
    ctx.font = "60px Arial";
    ctx.fillText(letter, 500 + 100 * (10 - errorsLeft), 300, 100);
  }

  drawHangman(shape) {
    /*
        shape = errorsLeft;
        switch (shape) {
          case 9:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(250, 650);
            ctx.lineTo(325, 550);
            ctx.lineTo(400, 650);
            ctx.lineTo(250, 650);
            ctx.stroke();
            ctx.closePath();
            break;
          case 8:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(325, 550);
            ctx.lineTo(325, 250);
            ctx.stroke();
            ctx.closePath();
            break;
          case 7:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(325, 250);
            ctx.lineTo(400, 250);
            ctx.stroke();
            ctx.closePath();
            break;
          case 6:
            ctx.lineWidth = 10;
            ctx.arc(400, 300, 30, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case 5:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(400, 360);
            ctx.lineTo(400, 550);
            ctx.stroke();
            ctx.closePath();
            break;
          case 4:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(400, 400);
            ctx.lineTo(350, 450);
            ctx.stroke();
            ctx.closePath();
            break;

          case 3:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(400, 400);
            ctx.lineTo(450, 450);
            ctx.stroke();
            ctx.closePath();
            break;
          case 2:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(400, 550);
            ctx.lineTo(350, 600);
            ctx.stroke();
            ctx.closePath();
            break;
          case 1;
          ctx.lineWidth = 10;
          ctx.beginPath();
          ctx.moveTo(400, 550);
          ctx.lineTo(450, 600);
          ctx.stroke();
          ctx.closePath();
          break;
          case 0:
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(400, 250);
            ctx.lineTo(400, 300);
            ctx.stroke();
            ctx.closePath();
            break;
        }*/
  }

  gameOver() {
    let img1 = new Image();
    img1.src = "./images/gameover.png"
    img1.onload = () => {
      ctx.drawImage(img1, 500, 200, 300, 200);

    };
  }

  winner() {
    let img2 = new Image();
    img2.src = "./images/awesome.png"
    img2.onload = () => {
      ctx.drawImage(img2, 500, 200, 300, 200);
    };
  }

}