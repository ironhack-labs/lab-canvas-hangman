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

    let word = this.secretWord.split("");

    
    for(let i = 0; i < word.length; i++)
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

    let letter = this.secretWord[index];
    this.context.font = "30pt Arial";
    let draw = (index * 100) + 90;    
    this.context.fillText(letter, draw, 550);
  }

  writeWrongLetter(letter, errorsLeft) {
   
    this.context.font = "18pt Arial";
    let draw = 800 - (20 * (errorsLeft -10));
    this.context.fillText(letter, draw, 200);
    
  }

  drawHangman(errorsLeft) {
    //BASE
    this.context.beginPath();
    this.context.moveTo(10,600);
    this.context.lineTo(20, 550);
    this.context.lineTo(30, 600);
    this.context.lineTo(10, 600);
    this.context.stroke();
    this.context.closePath();

    //Lines
    this.context.beginPath();
    this.context.moveTo(20,600);
    this.context.lineTo(20, 100);
    this.context.lineTo(200, 100);
    this.context.lineTo(200, 150);
    this.context.stroke();
    this.context.closePath();
  }

  gameOver() {
   
  }

  winner() {
    var img = new Image();
    //imgScale = 640/480;
    img.onload = function() {
      this.context.drawImage(img, 0, 0,img.width,img.height);
    };
    img.src = './images/gameover.png';
  }
}
