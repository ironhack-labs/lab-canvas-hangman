class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.posX = 400;
    this.posY = 500;
    this.letterPosArray = [];
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    console.log(this.secretWord);
    let space = 10;
    let line = 50;
    let linePos = this.posX;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.letterPosArray.push(linePos);
      this.ctx.beginPath();
      this.ctx.moveTo(linePos + space, this.posY);
      this.ctx.lineTo(linePos + line, this.posY);
      this.ctx.stroke();
      this.ctx.closePath();
      linePos += line + space;
    }
  }

  writeCorrectLetter(i) {
    let letterPos = this.letterPosArray[i] + 10;
    console.log(hangman.key, this.letterPosArray, hangman.index);
    this.ctx.font = "50px Arial";
    this.ctx.fillText(hangman.key, letterPos, this.posY - 10);
  }

  writeWrongLetter() {
    let letterPosX = 500 + hangman.wrongLetter.length * 50;
    let letterPosY = 200;
    console.log("wrong letter");
    this.ctx.font = "50px Arial";
    this.ctx.fillText(hangman.key, letterPosX, letterPosY);
  }

  drawHangman() {
    console.log("draw hangman");
    var sticks = [
      this.ctx.lineTo(this.posX - 10, this.posY),
      this.ctx.lineTo(this.posX - 110, this.posY),
      this.ctx.lineTo(this.posX - 60, this.posY - 40),
      this.ctx.lineTo(this.posX - 60, this.posY - 400),
      this.ctx.lineTo(this.posX + 150, this.posY - 400),
      this.ctx.lineTo(this.posX + 150, this.posY - 370),
      [
        this.ctx.moveTo(this.posX + 190, this.posY - 330),
        this.ctx.arc(this.posX + 150, this.posY - 330, 40, 0, 2 * Math.PI)
      ],
      [
        this.ctx.moveTo(this.posX + 150, this.posY - 290),
        this.ctx.lineTo(this.posX + 150, this.posY - 150)
      ],
      [
        this.ctx.moveTo(this.posX + 150, this.posY - 260),
        this.ctx.lineTo(this.posX + 100, this.posY - 230)
      ],
      [
        this.ctx.moveTo(this.posX + 150, this.posY - 260),
        this.ctx.lineTo(this.posX + 200, this.posY - 230)
      ],
      [
        this.ctx.moveTo(this.posX + 150, this.posY - 150),
        this.ctx.lineTo(this.posX + 100, this.posY - 120)
      ],
      [
        this.ctx.moveTo(this.posX + 150, this.posY - 150),
        this.ctx.lineTo(this.posX + 200, this.posY - 120)
      ]
    ];
    this.ctx.moveTo(this.posX - 60, this.posY - 40);
    sticks[hangman.wrongLetter.length];
    console.log(sticks);
    this.ctx.closePath();
  }
  gameOver() {}

  winner() {}
}
