
function HangmanCanvas(secretWord) {
  // this.ctx = document.getElementById('hangman').getContext('2d');
  this.canvas = document.getElementById("hangman")
  this.ctx = this.canvas.getContext('2d');

  //Variables para dibujar línas de letras
  this.secretWord = secretWord

  //Método para dibujar lína de letra
  this.drawLine = function(x,y,lineW){
    this.ctx.beginPath()
    this.ctx.moveTo(x,y) 
    this.ctx.lineTo(x+lineW,y)
    this.ctx.strokeStyle = "black"
    this.ctx.stroke()
    this.ctx.closePath()
  }
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
};

HangmanCanvas.prototype.drawLines = function () {
  var x = 500
  var y = 100
  var lineW = 50
  var space = 10
  console.log(this.secretWord)
  for (var i=0; i < this.secretWord.length; i++){
    this.drawLine(x,y,lineW)
    x += lineW + space
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch(shape){
    case 4:
      this.drawHead()
      break;
    case 3:
      this.drawBody()
      break;
    case 2:
      this.drawArms()
      break;
    case 1:
      this.drawRightLeg()
      break;
    case 0:
      this.drawLeftLeg()
      break;
  }
};

HangmanCanvas.prototype.drawHead = function () {
  //cabeza
  this.ctx.beginPath()
  this.ctx.lineWidth=5;
  this.ctx.arc(200,100,25,0,2*Math.PI,true)
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
};

HangmanCanvas.prototype.drawBody = function () {
  //cuerpo
  this.ctx.beginPath()
  this.ctx.moveTo(200,125) 
  this.ctx.lineTo(200,250)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
};

HangmanCanvas.prototype.drawArms = function () {
  //brazos
  this.ctx.beginPath()
  this.ctx.moveTo(125,175) 
  this.ctx.lineTo(275,175)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
};

HangmanCanvas.prototype.drawRightLeg = function () {
  //piernas derecha
  this.ctx.beginPath()
  this.ctx.moveTo(200,250) 
  this.ctx.lineTo(250,350)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
};

HangmanCanvas.prototype.drawLeftLeg = function () {
  //piernas izquierda
  this.ctx.beginPath()
  this.ctx.moveTo(200,250) 
  this.ctx.lineTo(150,350)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
};

HangmanCanvas.prototype.drawHanger = function () {
  //hanger
  this.ctx.beginPath()
  this.ctx.moveTo(100,50) 
  this.ctx.lineTo(100,350)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
  
  this.ctx.beginPath()
  this.ctx.moveTo(100,50) 
  this.ctx.lineTo(200,50)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
  
  this.ctx.beginPath()
  this.ctx.moveTo(200,50) 
  this.ctx.lineTo(200,75)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
  
  this.ctx.beginPath()
  this.ctx.moveTo(100,350) 
  this.ctx.lineTo(150,450)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
  
  this.ctx.beginPath()
  this.ctx.moveTo(100,350) 
  this.ctx.lineTo(50,450)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
  
  this.ctx.beginPath()
  this.ctx.moveTo(50,450) 
  this.ctx.lineTo(150,450)
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "black"
  this.ctx.stroke()
  this.ctx.closePath()
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
