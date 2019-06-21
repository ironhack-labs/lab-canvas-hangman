
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.guessedLetterX = 700;
    this.correctLetterX = 355;
    this.letters = [...secretWord];
  }
  createBoard(){

    //clear board
    this.ctx.clearRect(0, 0, 1200, 800);

    //line one
    this.ctx.beginPath();
    this.ctx.moveTo(120, 700);
    this.ctx.lineTo(320, 700);
    this.ctx.stroke();

    // //line two
    this.ctx.beginPath();
    this.ctx.moveTo(320, 700);
    this.ctx.lineTo(220, 650);
    this.ctx.stroke();

    // //line three
    this.ctx.beginPath();
    this.ctx.moveTo(220, 650);
    this.ctx.lineTo(120, 700);
    this.ctx.stroke();

    //line four
    this.ctx.beginPath();
    this.ctx.moveTo(220,650);
    this.ctx.lineTo(220,200);
    this.ctx.stroke();

    //line five 
    this.ctx.beginPath();
    this.ctx.moveTo(220,200);
    this.ctx.lineTo(500,200);
    this.ctx.stroke();

    //line six
    this.ctx.beginPath();
    this.ctx.moveTo(500,200);
    this.ctx.lineTo(500,350);
    this.ctx.stroke();

    this.ctx.closePath();

    let x1 = 330;
    let x2 = 380;

    for (let i = 0; i < this.secretWord.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(x1 += 70 ,700);
      this.ctx.lineTo(x2 += 70,700);
      this.ctx.stroke();
    }
    
  }

  writeCorrectLetter(letter){

    let offSetX = 70;

    if(letter !== undefined){

      this.letters.forEach((l, i)=>{
        if(l == letter){
  
          offSetX = offSetX * (i + 1);
  
          this.ctx.fillStyle = "black";
          this.ctx.font ="50px Arial";
          this.ctx.textAlign = 'center';
          this.ctx.fillText(letter, this.correctLetterX + offSetX, 690, 50);
          
          offSetX = 70;
        }
      });
    }

  }

  writeWrongLetter(letter, errorsLeft){

    if(letter !== undefined && errorsLeft <= 6){
      this.ctx.fillStyle = "black";
      this.ctx.font ="50px Arial";
      this.ctx.textAlign = 'center';
      this.ctx.fillText(letter, this.guessedLetterX += 30, 250, 50);
    }

  }

  drawHangman(errorNumber){
    switch(errorNumber){
      case 1:
        //draw head
        this.ctx.beginPath();
        this.ctx.arc(500, 375, 26, 0, 2 * Math.PI);
        this.ctx.stroke();
        console.log('head', errorNumber);
      break;
      case 2:
        //draw torso
        this.ctx.beginPath();
        this.ctx.moveTo(500, 400);
        this.ctx.lineTo(500, 500);
        this.ctx.stroke();
      break;
      case 3:
        //draw right-arm
        this.ctx.beginPath();
        this.ctx.moveTo(500, 420);
        this.ctx.lineTo(460, 440);
        this.ctx.stroke();
      break;
      case 4:
        //draw left-arm
        this.ctx.beginPath();
        this.ctx.moveTo(500, 420);
        this.ctx.lineTo(540, 440);
        this.ctx.stroke();
      break;
      case 5:
        //draw right-leg
        this.ctx.beginPath();
        this.ctx.moveTo(500, 500);
        this.ctx.lineTo(460, 550);
        this.ctx.stroke();
      break;
      case 6:
        //draw left-leg;
        this.ctx.beginPath();
        this.ctx.moveTo(500, 500);
        this.ctx.lineTo(540, 550);
        this.ctx.stroke();
      break;
    }
  }

  gameOver(){
    //CLEAR BOARD AND PRINT TO CANVAS 'GAME OVER LOOSER!'
    setTimeout(()=>{
      this.ctx.clearRect(0, 0, 1200, 800);
      this.ctx.fillStyle = "black";
      this.ctx.font ="50px Arial";
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Game Over Looser!', 600, 400, 320);
    }, 500);

  }

  winner(){
    //CLEAR BOARD AND PRING TO CANVAS 'WINNER WINNER CHICKEN DINNER!!!'
    setTimeout(()=>{
      this.ctx.clearRect(0, 0, 1200, 800);
      this.ctx.fillStyle = "black";
      this.ctx.font ="50px Arial";
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Winner Winner Chicken Dinner!', 600, 400, 500);
      }, 500);
  }
}
