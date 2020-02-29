class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200); 
    //this.context.clearRect(0, 0, 800, 1200); 
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let secretLength = this.secretWord.length;
    let xPostion = 50;
    let yPosition = 700;

    this.context.beginPath();
    this.context.moveTo(xPostion, yPosition);

    for(let i=0; i < secretLength; i++){ 
     // console.log(xPostion);
    this.context.lineTo(xPostion+50, yPosition);

    this.context.stroke();
    
    xPostion = xPostion + 100;

    this.context.moveTo(xPostion, yPosition);

    //console.log(xPostion);
    
    }

    this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    // let secretLength = this.secretWord.length;
    // let xPostion = 50;
    // let yPosition = 500;

    let letter = this.secretWord[index];
    this.context.font = "40px Arial";
    let offset = index * 100;
    this.context.fillText(letter, offset+50, 680);




  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    console.log(errorsLeft);
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

      //head
      // ctx.arc(x, y, radius, startAngle, endAngle)
      this.context.beginPath();
      this.context.arc(300, 170, 20, 0, Math.PI * 2);
      this.context.stroke();

      this.context.closePath();

    } else if (errorsLeft == 2){
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

      //head
      // ctx.arc(x, y, radius, startAngle, endAngle)
      this.context.beginPath();
      this.context.arc(300, 170, 20, 0, Math.PI * 2);
      this.context.stroke();

      //body
      this.context.moveTo(300, 190);
      this.context.lineTo(300, 240);

      this.context.closePath();
    } else if (errorsLeft == 1){
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

      //head
      // ctx.arc(x, y, radius, startAngle, endAngle)
      this.context.beginPath();
      this.context.arc(300, 170, 20, 0, Math.PI * 2);
      

      //body
      this.context.moveTo(300, 190);
      this.context.lineTo(300, 240);

      //arms & legs

      //arms
      this.context.moveTo(300, 205);
      this.context.lineTo(280, 205);
      this.context.lineTo(320, 205);

      //legs
      this.context.moveTo(300, 240);
      this.context.lineTo(320, 260);
      this.context.moveTo(300, 240);
      this.context.lineTo(280, 260);

      this.context.stroke();
      this.context.closePath();
    } else {
      this.gameOver();
    }
  }

  gameOver() {
    // ... your code goes here
    let img = new Image;
    
    this.context.drawImage(img, 300, 300);

    img.src = '../images/gameover.png';
  }

  winner() {
    // ... your code goes here
  }
}


