function HangmanCanvas(secretWord) {

  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.coords = [];
  this.initialY = 700;
  this.wrongX = 250;

}

HangmanCanvas.prototype.createBoard = function () {

};

HangmanCanvas.prototype.drawLines = function () {

  //La posición inicial para las lineas donde aparecerán las letras
  var initialX = 100;

  for (var i = 0; i < this.secretWord.length; i++) {

    //Aumentamos eje de las x para comenzar a dibujar otra line adelante de la anterior
    initialX += 120;
    //Agregamos las coordenadas de X al array para poder utilizarlas despues,
    //Y se mantiene igual.
    this.coords.push(initialX);
    this.ctx.beginPath();
    this.ctx.moveTo(initialX, this.initialY);
    this.ctx.lineTo(initialX + 55, this.initialY);
    this.ctx.closePath();
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

  //Obtenemos la posición de la linea
  var actualPositionX = this.coords[index];
  var correct = this.secretWord;
  this.ctx.font = "60px Arial";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(correct[index].toUpperCase(), actualPositionX, this.initialY, 195);

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  var worngLetterY = 100;

  this.ctx.font = "60px Arial";
  this.ctx.fillStyle = "black";

  this.wrongX += 60;
  this.ctx.fillText(letter.toUpperCase(), this.wrongX, worngLetterY, 195);

};

HangmanCanvas.prototype.drawHangman = function (shape) {

  //Se dibuja el hangman dependiendo del parametro shape
  switch (shape) {
    case "base":
      drawEqTriangle(this.ctx);
      break;

    case "pole":
      drawPole(this.ctx);
      break;

    case "horizontal":
      drawHorizontal(this.ctx);
      break;

    case "down":
      drawDown(this.ctx);
      break;

    case "head":
      drawHead(this.ctx);
      break;

    case "body":
      drawBody(this.ctx);
      break;

    case "leftHand":
      drawLeftHand(this.ctx);
      break;

    case "rightHand":
      drawRightHand(this.ctx);
      break;

    case "leftFoot":
      drawleftFoot(this.ctx);
      break;

    case "rightFoot":
      drawrightFoot(this.ctx);
      break;

    default:
      break;
  }
};

//Triangulo
function drawEqTriangle(ctx) {

  ctx.beginPath();
  ctx.moveTo(50, 550);
  ctx.lineTo(200, 550);
  ctx.lineTo(125, 500);
  ctx.closePath();
  ctx.stroke();
}


//Palo vertical
function drawPole(ctx) {

  ctx.beginPath();
  ctx.moveTo(125, 500);
  ctx.lineTo(125, 175);
  ctx.closePath();
  ctx.stroke();
}

//Palo horizontal
function drawHorizontal(ctx) {

  ctx.beginPath();
  ctx.moveTo(125, 175);
  ctx.lineTo(300, 175);
  ctx.closePath();
  ctx.stroke();
}

//Palo abajo  
function drawDown(ctx) {

  ctx.beginPath();
  ctx.moveTo(300, 175);
  ctx.lineTo(300, 210);
  ctx.closePath();
  ctx.stroke();
}

//Cabeza
function drawHead(ctx) {

  var endAngle = Math.PI * 2;
  ctx.beginPath();
  ctx.moveTo(300, 220);
  ctx.arc(300, 230, 20, 0, endAngle, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

}

//Cuerpo
function drawBody(ctx) {

  ctx.beginPath();
  ctx.moveTo(300, 230);
  ctx.lineTo(300, 370);
  ctx.closePath();
  ctx.stroke();

}

//Mano izquierda
function drawLeftHand(ctx) {

  ctx.beginPath();
  ctx.moveTo(300, 260);
  ctx.lineTo(255, 300);
  ctx.closePath();
  ctx.stroke();

}

//Mano derecha
function drawRightHand(ctx) {

  ctx.beginPath();
  ctx.moveTo(300, 260);
  ctx.lineTo(345, 300);
  ctx.closePath();
  ctx.stroke();

}

//Pie izquierdo
function drawleftFoot(ctx) {

  ctx.beginPath();
  ctx.moveTo(300, 370);
  ctx.lineTo(255, 420);
  ctx.closePath();
  ctx.stroke();

}

//Pie derecho
function drawrightFoot(ctx) {

  ctx.beginPath();
  ctx.moveTo(300, 370);
  ctx.lineTo(345, 420);
  ctx.closePath();
  ctx.stroke();

}





//Imagen Game Over
HangmanCanvas.prototype.gameOver = function () {

  var context = this.ctx;
  var img = new Image();

  img.onload = function () {
    context.drawImage(img, 500, 200, 500, 300);
  };
  img.src = 'images/gameover.png';

};


//Aqui pintaremos la imagen de you are awesome
HangmanCanvas.prototype.winner = function () {

  var context = this.ctx;
  var img = new Image();

  img.onload = function () {
    context.drawImage(img, 500, 200, 500, 300);
  };
  img.src = 'images/awesome.png';

};