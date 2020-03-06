
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    // ... your code goes here
    
  }
  
  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let x = 300;
    let y = 700;
    
    for(let i= 0; i < hangman.secretWord.length; i++){}
    
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    
    let textY = (errorsLeft *50)+100;
    this.context.fillStyle = "green"
    this.context.font = "25px Roboto";
    this.context.fillText (letter,1000,textY)
    
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    if (errorsLeft==9){
      this.context.strokeStyle = "blue";
      this.context.fillStyle = "yellow";
      this.context.beginPath();
      this.context.moveTo(550,250);
      this.context.arc(550, 300, 50, 0, Math.PI*2,false);
      this.context.fill();
      this.context.closePath();
    }
  }

  gameOver() {
    // ... your code goes here
    let gameOverImg = new Image();
    gameOverImg.src ="../images/gameover.png";
    this.context.drawImage(gameOverIMg, 200, 200)
  }

  winner() {
    // ... your code goes here
    let winImg = new Image();
    winImg.src ="../images/awesome.png";
    this.context.drawImage(winImg, 200, 100)
  }
}
