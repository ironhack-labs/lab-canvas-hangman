
function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById('hangman')
  this.ctx = this.canvas.getContext('2d')
  this.secretWord=secretWord

}

HangmanCanvas.prototype.createBoard = function () {

 this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
  
};

HangmanCanvas.prototype.drawLines = function () {
var x=200
var y=400

for(var i=0; i<this.secretWord.length; i++ ){console.log(this.secretWord)
  this.ctx.beginPath()
  this.ctx.moveTo(x,y)
  x+=80
  this.ctx.lineTo(x,y)
  this.ctx.stroke();
  this.ctx.closePath()
  x+=50
  
}
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var ul = document.getElementById("rightletters")
  var li = document.getElementById("right")

  li.appendChild(document.createTextNode("this.secretWord[index]"));
  ul.appendChild(li);

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
 var ul = document.getElementById("wrongletters")
 var li = document.getElementById("wrong")


  if (errorsLeft ===9 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
  if (errorsLeft ===8 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
  if (errorsLeft ===7 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
  if (errorsLeft ===6 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
  if (errorsLeft ===5 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
  if (errorsLeft ===4 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
  if (errorsLeft ===3 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  } 
  if (errorsLeft ===2 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  } 
  if (errorsLeft ===1 ){
    li.appendChild(document.createTextNode("letter"));
    ul.appendChild(li);
  }
};

HangmanCanvas.prototype.drawHangman = function (shape) {

if (shape ===9){


//base
ctx.beginPath()
ctx.moveTo(70,500)
ctx.lineTo(10,500)
ctx.stroke()
ctx.closePath()}

if (shape ===8){
//poste
ctx.beginPath()
ctx.moveTo(30,100)
ctx.lineTo(30,500)
ctx.stroke()
ctx.closePath()}

if (shape ===7){
//barra horizontal superior
ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(30,100)
ctx.stroke()
ctx.closePath()


//palito arriba de cabeza 
ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(100,150)
ctx.stroke()
ctx.closePath()}

if (shape ===6){
//cabeza
ctx.beginPath()
ctx.arc(100,175,25,0,Math.PI*2,false)
ctx.strokeStyle = "black"
ctx.stroke()
ctx.closePath()}

if (shape ===5){
//cuerpo
ctx.beginPath()
ctx.moveTo(100,200)
ctx.lineTo(100,300)
ctx.stroke()
ctx.closePath()}

if (shape ===4){
//brazo derecho
ctx.beginPath()
ctx.moveTo(100,250)
ctx.lineTo(120,200)
ctx.stroke()
ctx.closePath()}

if (shape ===3){
//brazo izquierdo
ctx.beginPath()
ctx.moveTo(100,250)
ctx.lineTo(80,300)
ctx.stroke()
ctx.closePath()}

if (shape ===2){
//piernaizquierda
ctx.beginPath()
ctx.moveTo(100,300)
ctx.lineTo(80,350)
ctx.stroke()
ctx.closePath()}

if (shape ===1)
//pierna derecha
ctx.beginPath()
ctx.moveTo(100,300)
ctx.lineTo(120,350)
ctx.stroke()
ctx.closePath()



};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
