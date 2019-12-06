class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    //Forca
    this.ctx.beginPath();
    //LBase
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(200, 500);
    this.ctx.lineTo(170, 540);
    //RBase
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(200, 500);
    this.ctx.lineTo(230, 540);
    //BBase
    this.ctx.moveTo(170, 540);
    this.ctx.lineTo(230, 540);
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(200, 500); // Desenho e direcao das linhas
    this.ctx.strokeStyle = "black";
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(400, 200);
    this.ctx.moveTo(400, 200);
    this.ctx.lineTo(400, 250);
    this.ctx.stroke();
  }

  drawLines() {
    let word = this.secretWord;
    let size = 0;
    for (let i = 0; i < word.length; i++) {
      size = i;
    }

    if (size === 1) {
      //FirstLine
      this.ctx.beginPath();
      this.ctx.moveTo(270, 540);
      this.ctx.lineTo(330, 540);
      this.ctx.stroke();

      //SecondLine
      this.ctx.beginPath();
      this.ctx.moveTo(380, 540);
      this.ctx.lineTo(440, 540);
      this.ctx.stroke();
    } else if (size === 2) {
      //FirstLine
      this.ctx.beginPath();
      this.ctx.moveTo(270, 540);
      this.ctx.lineTo(330, 540);
      this.ctx.stroke();

      //SecondLine
      this.ctx.beginPath();
      this.ctx.moveTo(380, 540);
      this.ctx.lineTo(440, 540);
      this.ctx.stroke();

      //ThirdLine
      this.ctx.beginPath();
      this.ctx.moveTo(490, 540);
      this.ctx.lineTo(550, 540);
      this.ctx.stroke();
    } else if (size === 3) {
      //FirstLine
      this.ctx.beginPath();
      this.ctx.moveTo(270, 540);
      this.ctx.lineTo(330, 540);
      this.ctx.stroke();

      //SecondLine
      this.ctx.beginPath();
      this.ctx.moveTo(380, 540);
      this.ctx.lineTo(440, 540);
      this.ctx.stroke();

      //ThirdLine
      this.ctx.beginPath();
      this.ctx.moveTo(490, 540);
      this.ctx.lineTo(550, 540);
      this.ctx.stroke();

      //FourLine
      this.ctx.beginPath();
      this.ctx.moveTo(600, 540);
      this.ctx.lineTo(660, 540);
      this.ctx.stroke();
    }
  }

  writeCorrectLetter(index) {}

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {
    //Head
    this.ctx.beginPath();
    this.ctx.arc(400, 270, 20, 0, Math.PI * 2);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
    //Body
    this.ctx.beginPath();
    this.ctx.moveTo(400, 290);
    this.ctx.lineTo(400, 350);
    this.ctx.stroke();
    //RHand
    this.ctx.beginPath();
    this.ctx.moveTo(400, 310);
    this.ctx.lineTo(430, 330);
    this.ctx.stroke();
    //LHand
    this.ctx.beginPath();
    this.ctx.moveTo(400, 310);
    this.ctx.lineTo(370, 330);
    this.ctx.stroke();
    //RLeg
    this.ctx.beginPath();
    this.ctx.moveTo(400, 350);
    this.ctx.lineTo(370, 400);
    this.ctx.stroke();
    //LLeg
    this.ctx.beginPath();
    this.ctx.moveTo(400, 350);
    this.ctx.lineTo(430, 400);
    this.ctx.stroke();
  }

  gameOver() {}

  winner() {}
}
