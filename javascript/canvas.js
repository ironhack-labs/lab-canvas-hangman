class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord

    // ... your code goes here
  }


   createBoard() {
     this.context.clearRect(0,0,1200,800);
     this.drawLines()
   }

  drawLines() {
       var x = 300;
       var y = 500;
    this.context.beginPath();
     for (let i=0; i<this.secretWord.length; i++) {
       this.context.moveTo(x,y);
       this.context.lineTo(x+30,y);
       x+=45;
     }
     this.context.stroke();
  }

  writeCorrectLetter(index) {
    var x = 300;
    var y = 500;
    let letter = this.secretWord[index].toUpperCase();
    for (let i=0; i<this.secretWord.length; i++) {
      if (letter===this.secretWord[i].toUpperCase()) {
        this.context.font = '30px Arial'
        this.context.fillText(letter,x+(i*45),y-20)
      } 
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    var x = 1000;
    var y = 100;
  for (let i=0; i<errorsLeft; i++) {
    this.context.font = '30px Arial'
    this.context.fillText(letter.toUpperCase(),x-(errorsLeft*45),y)
   }
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 9:
        this.context.beginPath();
        this.context.moveTo(100, 500);
        this.context.lineTo(180, 440);
        this.context.lineTo(260, 500);
        this.context.closePath();
        this.context.stroke()
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(180,440);
        this.context.lineTo(180,30);
        this.context.closePath();
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(180,30);
        this.context.lineTo(380,30);
        this.context.closePath();
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(380,30);
        this.context.lineTo(380,110);
        this.context.closePath();
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();  
        this.context.arc(380,140,30,2 * Math.PI,false);
        this.context.closePath();
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(380,170);
        this.context.lineTo(380,310);
        this.context.closePath();
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(380,240);
        this.context.lineTo(300,200);
        this.context.closePath();
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(380,240);
        this.context.lineTo(460,200);
        this.context.closePath();
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(380,310);
        this.context.lineTo(460,350);
        this.context.closePath();
        this.context.stroke();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(380,310);
        this.context.lineTo(300,350);
        this.context.closePath();
        this.context.stroke();
    }
  }

  gameOver() {
     let overImage = new Image();
     overImage.src = "/images/gameover.png"
     this.context.drawImage(overImage,600,200)
  }

  winner() {
     let winImage = new Image();
     winImage.src = "/images/awesome.png"
     this.context.drawImage(winImage,600,200)
  }
}
