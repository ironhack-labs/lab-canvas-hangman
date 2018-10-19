var canvas = document.getElementById('hangman');
var ctx = canvas.getContext('2d');

class HangmanCanvas {
  constructor (secretWord){
    this.canvas = document.getElementById('hangman');
    this.ctx = canvas.getContext('2d');
    this.width = this.canvas.width
    this.height = this.canvas.height;
    this.secretWord = secretWord;
  }
  createBoard (){
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  drawLines () {
    var x = 450
    var y = 700
    console.log(this)
    for (var i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x+40,y);
      this.ctx.closePath();
      this.ctx.stroke();
      x += 50;
      }
  }
  writeCorrectLetter(index) {
    this.ctx.font = "50px sans-serif"
    this.ctx.fillText(this.secretWord[index], 455 + index*50, 695)
  }
  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "50px sans-serif"
    var xW = 900
    var yW = 100 + errorsLeft*60
    this.ctx.fillText(letter, xW, yW)
  }
  degreeToRadius (degrees){
    return degrees*2*Math.PI/360
  }
  drawHangman(strikes){
    if(strikes == 9) {
    ctx.beginPath()
    ctx.moveTo(100, 700)
    ctx.lineTo(300, 700)
    ctx.lineTo(200, 640)
    ctx.closePath()
    ctx.stroke()}
    else if (strikes == 8) {
    ctx.beginPath()
    ctx.moveTo(200, 640)
    ctx.lineTo(200, 200)
    ctx.stroke()}
    else if (strikes == 7) {
    ctx.beginPath()
    ctx.moveTo(200, 200)
    ctx.lineTo(400, 200)
    ctx.stroke()}
    else if(strikes == 6) {
    ctx.beginPath()
    ctx.moveTo(400, 200)
    ctx.lineTo(400, 250)
    ctx.stroke()}
    else if(strikes == 5) {
    ctx.beginPath()
    ctx.arc(400, 290, 40, this.degreeToRadius(0), this.degreeToRadius(360), true)
    ctx.stroke()}
    else if(strikes == 4) {
    ctx.beginPath()
    ctx.moveTo(400, 330)
    ctx.lineTo(400, 500)
    ctx.stroke()}
    else if(strikes == 3) {
    ctx.beginPath()
    ctx.moveTo(400, 500)
    ctx.lineTo(330, 570)
    ctx.stroke()}
    else if (strikes == 2) {
    ctx.beginPath()
    ctx.moveTo(400, 500)
    ctx.lineTo(470, 570)
    ctx.stroke()}
    else if(strikes == 1) {
    ctx.beginPath()
    ctx.moveTo(400, 400)
    ctx.lineTo(330, 350)
    ctx.stroke()}
    else if(strikes == 0) {
    ctx.beginPath()
    ctx.moveTo(400, 400)
    ctx.lineTo(470, 350)
    ctx.stroke()}
  }
}

// var obj = new HangmanCanvas(word)

