class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800); 
    this.context.lineWidth = 5;
    this.drawLines();
  }

  drawLines() {
    
    let x = 80;
    let y = 600;

    let word = this.secretWord.length;

    
    for(let i = 0; i < word; i++)
    {
      this.context.beginPath();
      this.context.moveTo(x,y);
      this.context.lineTo(x+50, y);
      this.context.stroke();
      x += 100;
      this.context.closePath();  
    }
  }

  writeCorrectLetter(index) {

    let letter = hangman.secretWord[index];
    this.context.font = "30pt Arial";
    let draw = (index * 100) + 90;    
    this.context.fillText(letter, draw, 550);
    console.log(letter);
  }

  writeWrongLetter(letter, errorsLeft) {
   
    this.context.font = "18pt Arial";
    let draw = 800 - (20 * (errorsLeft -10));
    this.context.fillText(letter, draw, 200);
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 9:
        this.context.beginPath(); 
        this.context.moveTo(200,450);
        this.context.lineTo(100,500);
        this.context.lineTo(300,500);
        this.context.lineTo(200,450);
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath(); 
        this.context.moveTo(200,450);
        this.context.lineTo(200,150);
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath(); 
        this.context.moveTo(200,150);
        this.context.lineTo(350,150);
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath(); 
        this.context.moveTo(350,150);
        this.context.lineTo(350,200);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath(); 
        this.context.arc(350, 230, 30, 0, 2 * Math.PI )
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath(); 
        this.context.moveTo(350,260);
        this.context.lineTo(350,360);
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath(); 
        this.context.moveTo(350,360);
        this.context.lineTo(300,410);
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath(); 
        this.context.moveTo(350,360);
        this.context.lineTo(400,410);
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath(); 
        this.context.moveTo(350,300);
        this.context.lineTo(400,350);
        this.context.stroke();
        break;
      case 0:
        this.context.beginPath(); 
        this.context.moveTo(350,300);
        this.context.lineTo(300,350);
        this.context.stroke();

    }
  }

  gameOver() {
   setTimeout(function(){
     let img = document.querySelector(".loser");
     hangmanCanvas.context.drawImage(img, 200, 200, 800, 400);
   }, 1000);
  }

  winner() {
    setTimeout(function() {
      let img = document.querySelector(".winner");
      hangmanCanvas.context.drawImage(img, 200, 100, 800, 600);
    }, 1000);
  }
}
