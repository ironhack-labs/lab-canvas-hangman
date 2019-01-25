
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800)
  
};

HangmanCanvas.prototype.drawLines = function () {
  for (let i = 0; i< hangman.secretWord.length; i++){
    
    this.ctx.beginPath();
    this.ctx.moveTo(100+(i*150), 500);
    this.ctx.lineTo(200+(i*150), 500);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  console.log(hangman.secretWord)
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
 
 for (let i = 0 ; i < hangman.secretWord.length ; i++){
   if (hangman.secretWord[i] === this.secretWord [index]){
    this.ctx.lineWidth = 2
    this.ctx.font = '48px "serif"';
     this.ctx.strokeText(this.secretWord[index], 100 + (i*150), 470)
      //(150*i)+130, 490)
   }
 }
// (index) = indexOf(this.secretWord)
//   //for (Hangman.checkIfLetter() && Hangman.checkClickedLetters()){
// //   } Hangman.addCorrectLetter()
//  this.ctx.font = '48px serif'
//  this.ctx.strokeText = (index, 100,500)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
 this.ctx.lineWidth = 2
 this.ctx.strokeText = (letter, 550 + (errorsLeft *50 ), 100);
 this.drawHangman(errorsLeft)
}
HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  switch (errorsLeft){
  case 9:
this.ctx.beginPath();
this.ctx.moveTo(10, 500);
this.ctx.lineTo(80, 500);
this.ctx.lineTo(45, 470);
this.ctx.fill();
this.ctx.closePath();
break

case 8:
// ASTA 
this.ctx.beginPath();
this.ctx.moveTo(45, 470);
this.ctx.lineTo(45, 50);
this.ctx.stroke();
this.ctx.closePath();
break

case 7:
//gancho
this.ctx.beginPath();
this.ctx.moveTo(45, 50);
this.ctx.lineTo(450, 50);
this.ctx.lineTo(450, 100);
this.ctx.stroke();
this.ctx.closePath();
break

case 6:
//cabeza
this.ctx.beginPath();
this.ctx.arc(450, 130, 30, 0, Math.PI*2, true);
this.ctx.stroke();
break

case 5:
//cuerpo 
this.ctx.beginPath();
this.ctx.moveTo(450, 160);
this.ctx.lineTo(450, 300);
this.ctx.stroke();
this.ctx.closePath();
break

case 4:
//right
this.ctx.beginPath();
this.ctx.moveTo(450, 300);
this.ctx.lineTo(400, 370);
this.ctx.stroke();
this.ctx.closePath();
break

case 3:
//left
this.ctx.beginPath();
this.ctx.moveTo(450, 300);
this.ctx.lineTo(500, 370);
this.ctx.stroke();
this.ctx.closePath();
break

case 2:
//right arm
this.ctx.beginPath();
this.ctx.moveTo(450, 200);
this.ctx.lineTo(400, 210);
this.ctx.stroke();
this.ctx.closePath();
break

case 1:
//left arm
this.ctx.beginPath();
this.ctx.moveTo(450, 200);
this.ctx.lineTo(500, 210);
this.ctx.stroke();
this.ctx.closePath();
break

case 0:
//cara de muerto
this.ctx.font = "10px arial";
this.ctx.strokeText("X     X", 437, 125);
this.ctx.beginPath();
this.ctx.moveTo(437, 140);
this.ctx.lineTo(463, 140);
this.ctx.stroke();
this.ctx.closePath();
break
  }
};

HangmanCanvas.prototype.gameOver = function () {
  if (hangman.errorsLeft === 0){
    let imagen = new Image()
    imagen.src = "./images/gameover.png"
    imagen.onload = () => {
    this.ctx.drawImage(imagen, 300, 300, 400, 400)
  }
  }
};

HangmanCanvas.prototype.winner = function () {
let ganador=new Image()
ganador.src="./images/ganador.png"
ganador.onload= () =>{
  this.ctx.drawImage(ganador,300,300,400,400)
}
}