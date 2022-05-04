class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    new secretWord =hangman.secretWord;
  }

  createBoard() {
    ctx.clearRect(0, 0, 1200, 800);
    drawLines()
  }

  drawLines() {
    for (let i=0, i<secretWord.length, i++){

    ctx.beginPath()
    ctx.moveTo((i*10+30),790);
    ctx.lineTo((i*10+40),790);
    ctx.stroke()
    ctx.closePath()
    }
  }

  writeCorrectLetter(index) {
    checkClickedLetters(letter)
    if (this.secretWord.includes(letter)){
      ctx.fittText(letter, (index*10+30), 780)
    } 
  }

  writeWrongLetter(letter, errorsLeft) {
    if (!this.secretWord.includes(letter)) {
      ctx.fittText(letter, (index*10+690), 400)}
      
  }

  drawHangman(errorsLeft) {
    ctx.beginPath()
    ctx.moveTo((10,790);
    if (errorsLeft=9) ctx.lineTo(30,790);
    if (errorsLeft=8) ctx.lineTo(20,780);
    if (errorsLeft=7) ctx.lineTo(10,790), ctx.moveTo(20,780);
    if (errorsLeft=6) ctx.lineTo(20,300);
    if (errorsLeft=5) ctx.lineTo(20,590);
    if (errorsLeft=4) ctx.lineTo(60,300);
    if (errorsLeft=3) ctx.lineTo(60,320), ctx.moveTo(80, 320);
    if (errorsLeft=2) ctx.arc(80, 320, 20, 0, 2 * Math.PI), ctx.moveTo(100, 320);
    if (errorsLeft=1) ctx.lineTo(110,330), ctx.moveTo(100, 320);
    if (errorsLeft=0) ctx.lineTo(90,330)

    ctx.stroke()
    ctx.closePath()
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
