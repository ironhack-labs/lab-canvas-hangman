
function HangmanCanvas(secretWord) {
 this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = Array.from(secretWord);   //reasignamos el array 
  this.start = 0;
  this.xsw = []; 
  this.y = 0;
   
}




HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 600, 600); //se limpia el canvas 
 
 // Asta
  this.ctx.beginPath();
  this.ctx.moveTo(45, 470);
  this.ctx.lineTo(45, 50);
  this.ctx.stroke();
  this.ctx.closePath();
//Gancho
  this.ctx.beginPath();
  this.ctx.moveTo(45, 50);
  this.ctx.lineTo(450, 50);
  this.ctx.lineTo(450, 100);
  this.ctx.stroke();
  this.ctx.closePath();

// LA BASE (TRIANGULO): 

this.ctx.beginPath();
this.ctx.moveTo(10, 500);
this.ctx.lineTo(80, 500);
this.ctx.lineTo(45, 470);
this.ctx.fill();
this.ctx.closePath();

};


HangmanCanvas.prototype.drawLines = function (secretWord) {
  let sw = 0;

  for (let i=0; i < this.secretWord.length; i++){                //reiteramos en secretword
    this.ctx.beginPath();
    this.ctx.moveTo(100+sw, 500);
    this.ctx.lineTo(200+sw, 500);
    this.ctx.stroke();
    this.ctx.closePath();
    this.xsw.push(sw + 110)
    sw += 150
  } 

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.fillStyle ='black';
  this.ctx.font = '50px Avenir';  // no me cambia el tamaño de letra 
  this.ctx.fillText(this.secretWord[index], this.xsw [index], 500);
  this.secretWord.splice(index, 1,'')
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  if (errorsLeft > 0) {
    this.ctx.fillText(letter, 800 + this.y, 100)  // draws filled text on the canvas
    this.y += 30
    this.drawHangman(errorsLeft)
  } else this.gameOver()
};

HangmanCanvas.prototype.drawHangman = function (shape) {  //con switch queda 
  switch(shape) {
    case 6:
      //CABEZA
      this.ctx.beginPath();
      this.ctx.arc(450, 130, 30, 0, Math.PI*2, true);
      this.ctx.stroke();
      break;
    case 5:
      //CUERPO
      this.ctx.beginPath();
      this.ctx.moveTo(450, 160);
      this.ctx.lineTo(450, 300);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 4:
      //RIGHT LEG
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(400, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

      case 3:
      //LEFT LEG
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(500, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 2:
      //RIGHT ARM
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(400, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 1:
      //CARA DE MUERTO
      this.ctx.font = "10px arial";
      this.ctx.strokeText("X   X", 437, 125);
      this.ctx.beginPath();
      this.ctx.moveTo(437, 140);
      this.ctx.lineTo(463, 140);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    
  }
};

HangmanCanvas.prototype.gameOver = function () {
  const img = new Image()
  img.src= './images/gameover.png'
  img.onload = () => this.ctx.drawImage(img, 0, 0, 1200, 800)
};

HangmanCanvas.prototype.winner = function () {
  const img = new Image()
  img.src= './images/awesome.png'
  img.onload = () => this.ctx.drawImage(img, 0, 0, 1200, 800)

};

