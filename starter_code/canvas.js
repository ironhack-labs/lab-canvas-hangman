

var juego = new HangmanCanvas()
var hangmanOne = new Hangman()


function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById('hangman');
  this.ctx = hangman.getContext('2d');
  this.secretWord = secretWord;
  this.createBoard()
  this.drawLines()
}


var button = document.getElementById("start-game-button")

button.addEventListener("click", function(){
  juego.createBoard()
  juego.drawLines()
})

HangmanCanvas.prototype.createBoard = function () {
  console.log("hols")

 
  this.ctx.clearRect(0,0,800,1200)
  this.ctx.beginPath()
};

  var monito = {
    cuerda: this.ctx.moveTo(100,100)
    this.ctx.lineTo(100,150)
    this.ctx.stroke()
    this.ctx.closePath(),
  
    paloHorizontal: 
    this.ctx.beginPath()
    this.ctx.moveTo(100,100)
    this.ctx.lineTo(30,100)
    this.ctx.stroke()
    this.ctx.closePath(),

    paloVertical: this.ctx.beginPath()
    this.ctx.moveTo(30,100)
    this.ctx.lineTo(30,500)
    this.ctx.stroke()
    this.ctx.closePath(),

    base: this.ctx.beginPath()
    this.ctx.moveTo(70,500)
    this.ctx.lineTo(10,500)
    this.ctx.stroke()
    this.ctx.closePath(),

    cabeza: this.ctx.beginPath()
    this.ctx.arc(100,175,25,0,Math.PI*2,false)
    this.ctx.strokeStyle = "black"
    this.ctx.stroke()
    this.ctx.closePath(),

    cuerpo: this.ctx.beginPath()
    this.ctx.moveTo(100,200)
    this.ctx.lineTo(100,300)
    this.ctx.stroke()
    this.ctx.closePath(),
    
    piernaIzq : this.ctx.beginPath()
    this.ctx.moveTo(100,300)
    this.ctx.lineTo(80,350)
    this.ctx.stroke()
    this.ctx.closePath(),

    piernaDer:  this.ctx.beginPath()
    this.ctx.moveTo(100,300)
    this.ctx.lineTo(120,350)
    this.ctx.stroke()
    this.ctx.closePath(),

    manoDerecha:  this.ctx.beginPath()
    this.ctx.moveTo(100,250)
    this.ctx.lineTo(120,200)
    this.ctx.stroke()
    this.ctx.closePath(),

    manoIzquierda:   this.ctx.beginPath()
    this.ctx.moveTo(100,250)
    this.ctx.lineTo(80,300)
    this.ctx.stroke()
    this.ctx.closePath(),


  }

  
HangmanCanvas.prototype.drawLines = function () {
  console.log("pepe")
  console.log(this.secretWord)
  for( i = 0; i < this.secretWord.length; i++){

    this.ctx.moveTo(100 + (i*50),500)
    this.ctx.lineTo(120 + (i*50),500)
    this.ctx.stroke()
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font(this.secretWord[index], 100 + (i*50),500)
  this.ctx.fillText()



};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font(letter, 500 + i,500 + i)
  this.ctx.fillText()

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.monito.shape

};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.
};

HangmanCanvas.prototype.winner = function () {

};


