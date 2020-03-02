class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    let secretLength = this.secretWord.length;
    let x = 300;
    let y = 600;

    this.context.beginPath();
    this.context.moveTo(x, y);

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.lineTo(x + 50, y);
      this.context.stroke();
      x += 100;
      this.context.moveTo(x, y);
    }
this.context.closePath();
  }



  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = this.secretWord[index]
    this.context.font = '40pt Arial'
    let offset = index * 40
    this.context.filledText()


  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '28px serif';
    let offset = 800 - (20 * (errorsLeft-10));
    this.context.fillText(letter, offset, 200);
    this.context.stroke();


  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    if(errorsLeft == 9){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.closePath();
    } else if (errorsLeft == 8){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.moveTo(250, 500);
      this.context.lineTo(150, 400);
      this.context.closePath();
    } else if (errorsLeft == 7){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.moveTo(250, 500);
      this.context.lineTo(150, 400);
      this.context.moveTo(150, 400);
      this.context.lineTo(50, 500);
      this.context.closePath();
    } else if (errorsLeft == 6){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.moveTo(250, 500);
      this.context.lineTo(150, 400);
      this.context.moveTo(150, 400);
      this.context.lineTo(50, 500);
      this.context.moveTo(150, 400);
      this.context.lineTo(150, 100);
      this.context.closePath();
    } else if (errorsLeft == 5){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.moveTo(250, 500);
      this.context.lineTo(150, 400);
      this.context.moveTo(150, 400);
      this.context.lineTo(50, 500);
      this.context.moveTo(150, 400);
      this.context.lineTo(150, 100);
      this.context.moveTo(150, 100);
      this.context.lineTo(300, 100);
      this.context.closePath();
    } else if (errorsLeft == 4){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.moveTo(250, 500);
      this.context.lineTo(150, 400);
      this.context.moveTo(150, 400);
      this.context.lineTo(50, 500);
      this.context.moveTo(150, 400);
      this.context.lineTo(150, 100);
      this.context.moveTo(150, 100);
      this.context.lineTo(300, 100);
      this.context.moveTo(300, 100);
      this.context.lineTo(300, 150);
      this.context.closePath();
    }  else if (errorsLeft == 3){
      this.context.beginPath();
      this.context.moveTo(50, 500);
      this.context.lineTo(250, 500);
      this.context.moveTo(250, 500);
      this.context.lineTo(150, 400);
      this.context.moveTo(150, 400);
      this.context.lineTo(50, 500);
      this.context.moveTo(150, 400);
      this.context.lineTo(150, 100);
      this.context.moveTo(150, 100);
      this.context.lineTo(300, 100);
      this.context.moveTo(300, 100);
      this.context.lineTo(300, 150);
    }


    // ctx.arc(x, y, radius, startAngle, endAngle)
    this.context.beginPath();
    this.context.arc(300, 180, 30, 0, Math.PI * 2);
    this.context.stroke();

    this.context.closePath();

    this.context.moveTo(300, 210);
    this.context.lineTo(300, 250);



    // arms
    this.context.moveTo(300, 205);
    this.context.lineTo(280, 205);
    this.context.lineTo(320, 205);
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
