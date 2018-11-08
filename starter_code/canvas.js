function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.word = secretWord
  this.createBoard();
  this.drawLines()
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1500, 1500)
  
  
};

HangmanCanvas.prototype.drawLines = function () {
  for(i=0;i<this.word.length;i++){
    this.ctx.beginPath()
    this.ctx.moveTo(500+i*50, 700)
    this.ctx.lineTo((500+i*50)+40,700)
    this.ctx.stroke()
  }

  
  
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var letra = this.word[index]
  this.ctx.font="30px Avenir"
  this.ctx.fillStyle="black"
  //this.ctx.fillText("Perdiste",500,500)
  console.log(letra)
  
  this.ctx.strokeText(letra,520+index*50,700)

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (numero) {
  console.log(numero)
  if(numero ===1){
    console.log("aqui estas")
    this.ctx.beginPath()
    this.ctx.moveTo(284,155);
    this.ctx.lineTo(285,265);
    this.ctx.stroke();
    this.ctx.closePath();

  }
  if(numero ===2){
    this.ctx.beginPath()
    this.ctx.moveTo(285,266);
    this.ctx.lineTo(217,335);
    this.ctx.stroke();
    this.ctx.closePath()
  }
  if(numero ===3){
    this.ctx.beginPath()
    this.ctx.moveTo(288,268);
    this.ctx.lineTo(348,335);
    this.ctx.stroke();

  }
  if(numero ===4){
    this.ctx.beginPath()
    this.ctx.moveTo(285,156);
    this.ctx.lineTo(216,216);
    this.ctx.stroke();
  }
  if(numero ===5){
    this.ctx.beginPath()
    this.ctx.moveTo(285,158);
    this.ctx.lineTo(339,207);
    
    this.ctx.stroke();
    this.ctx.closePath()
  }
  if(numero ===6){
    this.ctx.beginPath()
    this.ctx.moveTo(288.5, 116 - 42);
    this.ctx.bezierCurveTo(288.5 + (0.5522847498307936 * 41.5), 116 - 42,  288.5 + 41.5, 116 - (0.5522847498307936 * 42), 288.5 + 41.5, 116);
    this.ctx.bezierCurveTo(288.5 + 41.5, 116 + (0.5522847498307936 * 42), 288.5 + (0.5522847498307936 * 41.5), 116 + 42, 288.5, 116 + 42);
    this.ctx.bezierCurveTo(288.5 - (0.5522847498307936 * 41.5), 116 + 42, 288.5 - 41.5, 116 + (0.5522847498307936 * 42), 288.5 - 41.5, 116);
    this.ctx.bezierCurveTo(288.5 - 41.5, 116 - (0.5522847498307936 * 42), 288.5 - (0.5522847498307936 * 41.5), 116 - 42, 288.5, 116 - 42);
    this.ctx.stroke()

    
  }
  if(numero===7){
    this.ctx.beginPath()
    this.ctx.moveTo(287,157);
    this.ctx.lineTo(146,79);
    this.ctx.stroke()

  }

}

HangmanCanvas.prototype.gameOver = function () {
  //this.ctx.clearRect(0, 0, 1200, 800)
  this.ctx.font="80px Avenir"
  this.ctx.fillStyle="black"
  //this.ctx.fillText("Perdiste",500,500)
  this.ctx.strokeText("Perdiste",500,500)


};

HangmanCanvas.prototype.winner = function () {
  this.ctx.clearRect(0, 0, 1200, 800)
  this.ctx.font="80px Avenir"
  this.ctx.fillStyle="black"
  //this.ctx.fillText("Ganaste",500,500)
  this.ctx.strokeText("Ganaste",500,500)

};
