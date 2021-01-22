class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    const ctx = this.context;
    ctx.lineWidth = 5;
    ctx.clearRect(0, 0, 1200, 800);

    ctx.beginPath();
    ctx.moveTo(50, 750);
    ctx.lineTo(200, 750);
    ctx.lineTo(130, 650);
    ctx.lineTo(50, 750);
    ctx.moveTo(130, 650);
    ctx.lineTo(130, 150);
    ctx.lineTo(500, 150);
    ctx.lineTo(500, 200);
    ctx.stroke();
    ctx.closePath();
  }

  drawLines() {
    const length = this.secretWord.length;
    const ctx = this.context;
    let startX = 300;
    let startY = 750;
    for (let i = 0; i < length; i++) {
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + 50, startY);
      ctx.stroke();
      ctx.closePath();
      startX += 70;
    }
  }

  writeCorrectLetter(index) {
    const ctx = this.context;
    ctx.font ="60px Arial";
    let pos = 300 + index * 70;
    ctx.fillText(this.secretWord[index], pos, 740);
  }

  writeWrongLetter(letter, errorsLeft) {
    const ctx = this.context;
    ctx.font ="60px Arial";
    if(errorsLeft > 0){
      let pos = 600 + (10 - errorsLeft) * 50;
      ctx.fillText(letter, pos, 240);
    }
  }

  drawHangman(errorsLeft) {
    const ctx = this.context;
    switch (errorsLeft) {
      case 9:
        // head
        ctx.beginPath();
        ctx.arc(500, 260, 60, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        break;
      case 8:
        // body
        ctx.beginPath();
        ctx.moveTo(500, 320);
        ctx.lineTo(500, 500);
        ctx.stroke();
        ctx.closePath();
        break;
      case 7:
        // left arm
        ctx.beginPath();
        ctx.moveTo(500, 370);
        ctx.lineTo(420, 420);
        ctx.stroke();
        ctx.closePath();
        break;
      case 6:
        // right arm
        ctx.beginPath();
        ctx.moveTo(500, 370);
        ctx.lineTo(580, 420);
        ctx.stroke();
        ctx.closePath();
        break;
      case 5:
        // left leg
        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.lineTo(400, 580);
        ctx.stroke();
        ctx.closePath();
        break;
      case 4:
        // right leg
        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.lineTo(600, 580);
        ctx.stroke();
        ctx.closePath();
        break;
      case 3:
        // left eye
        ctx.beginPath();
        ctx.font = "40px Arial";
        ctx.fillText("X", 460, 260);
        ctx.closePath();
        break;
      case 2:
    //right eye
    ctx.beginPath();
    ctx.font = "40px Arial";
    ctx.fillText("X", 510, 260);
    ctx.closePath();
        break;
      case 1:
    // mouth 
    ctx.beginPath();
    ctx.font = "40px Arial";
    ctx.fillText("__", 480, 295);
    ctx.closePath();
        break;
      case 0:
        alert("GAME OVER");
        break;
      default:
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