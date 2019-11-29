let drawLinesCounter = 0;

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord; 
  }

  createBoard() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, 800, 1200);
  }

  drawLines() { //works
    //800x1200
    let widthOfCanvas = 1200;
    let heightOfCanvas = 800;
    let canvasCenterX = widthOfCanvas/2;
    //console.log("Center: " + canvasCenterX);
    let LineY = 600;
    let lineWidth = 20;
    let spaceWidth = 10;
    //console.log("Secret: " + this.secretWord);
    let lineNoCount = this.secretWord.split("").length;
    //console.log("lineCount: " + lineNoCount);

    let fillLineLengthInclSpaces = (lineNoCount * (lineWidth+spaceWidth))-spaceWidth;
    //console.log("fullLen: " + fillLineLengthInclSpaces);
    let lineStartPosition = canvasCenterX - fillLineLengthInclSpaces/2;
    //console.log("lineStart: " + lineStartPosition);
    let lineEndPosition = lineStartPosition + lineWidth;
    //console.log("lineEnd: " + lineEndPosition);

    //draw a line for every char of the secret word
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "black";

    this.ctx.beginPath();
    for (let letter of this.secretWord) {
      console.log("StartX: ", lineStartPosition, " EndX: ", lineEndPosition, "constY:", LineY);
      this.ctx.moveTo(lineStartPosition, LineY);
      this.ctx.lineTo(lineEndPosition, LineY);
      this.ctx.stroke();
      lineStartPosition = lineEndPosition + spaceWidth
      lineEndPosition = lineStartPosition + lineWidth;
    }
  }

  writeCorrectLetter(index) {

    console.log();
    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "black";
    //--> identify "key pressed" number of chars in secret
    if (!(this.secretWord.indexOf(//add char) === this.secretWord.lastIndexOf(//add char))) {
      for () {

      }
    }
    




    console.log(this.secretWord);
    console.log(this.secretWord.charAt(index));
    this.ctx.fillText(`${this.secretWord.charAt(index)}`,10,40);
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}