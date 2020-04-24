// lo visual

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    this.context.beginPath()
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.context.lineWidth = 5;
    

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawFirstPalo() {
    ctx.beginPath();
    ctx.moveTo(75,450);
    ctx.lineTo(75, 20);
    ctx.stroke();

  }
  drawSecondPalo() {
    ctx.beginPath();
    ctx.moveTo(75,20);
    ctx.lineTo(230,20);
    ctx.stroke();

  }
  drawMiniPalo() {
    ctx.beginPath();
    ctx.moveTo(230,20);
    ctx.lineTo(230,40);
    ctx.stroke();

  }
  drawHangmanHead() {
    this.context.beginPath();
    this.context.arc(230, 90, 50, 0, Math.PI * 2);
    this.context.stroke();
  }
  drawHangmanBody() {
    this.context.beginPath();
    this.context.moveTo(230, 140);
    this.context.lineTo(230, 300);
    this.context.stroke();
  }
  drawOneLeg() {
    this.context.beginPath();
    this.context.moveTo(230, 300);
    this.context.lineTo(260, 420);
    this.context.stroke();
  }
  drawOtherLeg() {

    this.context.beginPath();
    this.context.moveTo(230, 300);
    this.context.lineTo(200, 420);
    this.context.stroke();
  }
  drawOneArm() {
    this.context.beginPath();
    this.context.moveTo(230, 160);
    this.context.lineTo(260, 280);
    this.context.stroke();

  }
  drawOtherArm() {
    this.context.beginPath();
    this.context.moveTo(230, 160);
    this.context.lineTo(200, 280);
    this.context.stroke();

  }
  

  drawHangman(errorsLeft) {
    if (errorsLeft <= 9) {
      this.drawFirstPalo();
    }
    if (errorsLeft <= 8) {
      this.drawSecondPalo();

    }
    if (errorsLeft <= 7) {
      this.drawMiniPalo();

    }
    if (errorsLeft <= 6) {
      this.drawHangmanHead();
    }

    if (errorsLeft <= 5) {
      this.drawHangmanBody();

    }
    if (errorsLeft <= 4) {
      this.drawOneLeg();


    }
    if (errorsLeft <= 3) {
      this.drawOtherLeg();

    }
    if (errorsLeft <= 2) {
      this.drawOneArm();

    }
    if (errorsLeft <= 1) {
      this.drawOtherArm();

    }
    
}


gameOver() {
  let fail = new Image();
  fail.scr = '/images/gameover.png';
  fail.addEventListener('load', e => {
    this.context.drawImage(fail, 340, 110);
  })

}

winner() {
  let youwin = new Image();
  youwin.src = '/images/awesome.png';
  youwin.addEventListener('load', e => {
    this.context.drawImage(fail, 340, 110);
  })
}