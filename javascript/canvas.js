const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");


class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.imgLoss = new Image()
    this.imgLoss.src = "/images/gameover.png"
    this.imgWin = new Image()
    this.imgWin.src = "/images/awesome.png"
    this.index = ""
  }

  createBoard() {
    ctx.fillStyle = "#d3d3d3";
    ctx.fillRect(20, 20, 1200, 800);
    this.drawLines();

  }

  drawLines() {
    let n = this.secretWord.length;
    let space = 100
console.log(n)
for(let i=0;i<=n; i++){
  ctx.beginPath();
  ctx.moveTo(space, 300);
  ctx.lineTo(space+50, 300);

  ctx.stroke();

  ctx.closePath();
  console.log(space)
space += 100

}

  }

  writeCorrectLetter(index) {


    /* 

writeCorrectLetter(index) and 
writeWrongLetter(letter, errorsLeft) - 
the methods that should write the letter 
on which the user has just clicked, on the 
appropriate part of the canvas. After checking if the
 letter was not already clicked, we
  should write it on our board. 
  If the secret word includes the letter, 
  we should write it in the position where
   it belongs, and if the letter is not included 
   in the secret word, we should write it on the top 
   right corner, so that the user knows which letters 
   were already clicked.

  */
  }

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(errorsLeft) {
    // ... your code goes here
    /* 
drawHangman(errorsLeft) - the method that should 
draw the hangman. You will see that the drawing is 
composed of multiple lines and one circle. Go ahead and 
experiment, you will see it is pretty straightforward. */
  }

  gameOver() {
    ctx.drawImage(this.imgLoss)
  }

  winner() {ctx.drawImage(this.imgWin);
  }
}
