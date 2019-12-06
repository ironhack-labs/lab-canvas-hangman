class HmRender {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    const w = (this.canvas.width = 1200);
    const h = (this.canvas.height = 800);
    const oneThirdOfWidth = w / 3;
    const oneSixthOfHeight = h / 6;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 5;
    for (let i = 0; i < this.secretWord.length; i += 1) {
      const lineStart = oneThirdOfWidth;
      const lineEnd = oneThirdOfWidth + 50;
      const hOffset = lineEnd - lineStart + 15;
      this.ctx.beginPath();
      this.ctx.moveTo(lineStart + hOffset * i, oneSixthOfHeight * 6 - 30);
      this.ctx.lineTo(lineEnd + hOffset * i, oneSixthOfHeight * 6 - 30);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  writeCorrectLetter(index) {}

  // need to test this string
  writeWrongLetter(triedLettersArr, errorsLeft) {
    const triedLettersStr = triedLettersArr.join(' - ').toUpperCase();
    this.ctx.font = '60px sans-serif';
    this.ctx.fillText(`${triedLettersStr} lalalalalala`, 100, 100);
  }

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}