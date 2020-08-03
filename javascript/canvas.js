class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.writingX = 650;
    this.writingY = 300;
    this.wrongX = 800;
    this.wrongY = 50;
    this.hangmanCoords = {
      [9]: {
        start: { x: 20, y: this.writingY },
        end: { x: 150, y: this.writingY },
      },
      [8]: {
        start: { x: 20, y: this.writingY },
        end: { x: 85, y: this.writingY - 50 },
      },
      [7]: {
        start: { x: 85, y: this.writingY - 50 },
        end: { x: 150, y: this.writingY },
      },
      [6]: {
        start: { x: 85, y: this.writingY - 50 },
        end: { x: 85, y: this.writingY - 300 },
      },
      [5]: {
        start: { x: 85, y: this.writingY - 300 },
        end: { x: 285, y: this.writingY - 300 },
      },
      [4]: {
        start: { x: 285, y: this.writingY - 300 },
        end: { x: 285, y: this.writingY - 250 },
      },
      [3]: { arc: { x: 285, y: this.writingY - 220, r: 30 } },
      [2]: {
        start: { x: 285, y: this.writingY - 190 },
        end: { x: 285, y: this.writingY - 120 },
      },
      [1]: {
        start: { x: 285, y: this.writingY - 120 },
        end: { x: 315, y: this.writingY - 80 },
      },
      [0]: {
        start: { x: 285, y: this.writingY - 120 },
        end: { x: 255, y: this.writingY - 80 },
      },
    };
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.context.strokeStyle = "black";
    this.context.lineWidth = 2;
    this.context.beginPath();
    let positionX = this.writingX;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(positionX, this.writingY);
      positionX += 20;
      this.context.lineTo(positionX, this.writingY);
      this.context.stroke();
      positionX += 10;
      this.context.moveTo(positionX, this.writingY);
    }
  }

  writeCorrectLetter(letter) {
    this.context.font = "20px Verdana";

    this.secretWord.split("").forEach((l, index) => {
      if (letter != l) return;

      const writtenX = this.writingX + 5 + index * 30;
      this.context.fillText(letter, writtenX, this.writingY - 15);
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    if (errorsLeft > 0) {
      this.context.font = "20px Verdana";
      this.context.fillText(letter, this.wrongX, this.wrongY);
      this.wrongX += 25;
    }
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    console.log(errorsLeft)
    const ctx = this.context;
    if (errorsLeft === 3) {
      const { arc: { x, y, r } } = this.hangmanCoords[errorsLeft];
      console.log(x, y, r)
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.stroke();
      return;
    }

    const { start, end } = this.hangmanCoords[errorsLeft];
    console.log(start, end)

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  gameOver() {
    // ... your code goes here
    if (errosLeft === 0) {
    }
  }

  winner() {
    // ... your code goes here
  }
}