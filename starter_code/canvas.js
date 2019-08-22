
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.lineWidth = 5
  this.ctx.clearRect(0, 0, 800, 1200)
  this.ctx.beginPath()
  this.ctx.moveTo(200,600)
  this.ctx.lineTo(270,650)
  this.ctx.lineTo(130,650)
  this.ctx.lineTo(200,600)
  this.ctx.lineTo(200,100)
  this.ctx.lineTo(450,100)
  this.ctx.lineTo(450,150)
  this.ctx.stroke()
};

HangmanCanvas.prototype.drawLines = function () {
  let word = hangman.secretWord
  console.log(word)
  console.log(word.length)
  let space = 350
  let endPoint = 420
  for(i=0;i<word.length;i++){
    this.ctx.beginPath();
    this.ctx.moveTo(space, 650);
    this.ctx.lineTo(endPoint, 650);
    this.ctx.stroke();
    space += 80
    endPoint += 80
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  console.log('index: ' + index)
  let letter = hangman.secretWord[index]
  switch (index) {
    case 0:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 360, 650);
      break;
    case 1:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 440, 650);
      break;
    case 2:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 520, 650);
      break;
    case 3:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 600, 650);
      break;
    case 4:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 680, 650);
    case 5:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 760, 650);
      break;
    case 6:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 840, 950);
      break;
    case 7:
      this.ctx.font = '70px serif';
      this.ctx.fillText(letter, 920, 650);
      break;  
    default:
      break;
  }
  console.log(letter)
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
