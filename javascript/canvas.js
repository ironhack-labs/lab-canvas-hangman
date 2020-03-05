class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
   
  }

  createBoard() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
  }

  drawLines() {
    let numberOfLines = this.context.secretWord.length;
    let x = 100;
    let y = 100;

    for(let i = 0; i < numberOfLines; i++)
    {
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x, y);
      ctx.lineTo(x+=10, y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
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
