class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    const ctx = this.context;
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(50, 650);
    ctx.lineTo(200, 650);
    ctx.lineTo(120, 550);
    ctx.lineTo(53, 650);
    ctx.moveTo(120, 550);
    ctx.lineTo(120, 120);
    ctx.lineTo(400, 120);
    ctx.lineTo(400, 160);
    ctx.stroke();
  }

  drawLines() {
    const ctx = this.context;
    let X = 350, Y = 700;
    for (let i = 0; i < this.secretWord.length; i++) {
      ctx.beginPath();
      ctx.moveTo(X, Y);
      ctx.lineTo(X + 65, Y);
      ctx.closePath();
      ctx.stroke();
      X += 100;
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    const ctx = this.context;
    ctx.font ="80px Comic Sans MS";
    ctx.fillStyle = "green";
    const pos = 360 + (100 * index);
    ctx.fillText(this.secretWord[index], pos, 680);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    const ctx = this.context;
    ctx.font ="80px Comic Sans MS";
    ctx.fillStyle = "red";
    if(errorsLeft > 0){
      const pos = 535 + ((9 - errorsLeft) * 65);
      ctx.fillText(letter, pos, 250);
    }
  }

  drawHangman(errorsLeft) {
    const ctx = this.context;
    switch (errorsLeft){
      case 0:
        ctx.beginPath();
        ctx.arc(400, 223, 65, 0, (Math.PI * 2));
        ctx.closePath();
        ctx.stroke();
      }
    }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
