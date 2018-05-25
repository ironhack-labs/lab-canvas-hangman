//unión del js con los trazos canvas

//va a "pintar" las palabras de la palabra secreta
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d'); 
  this.secretWord = secretWord; 
  this.ctx.font = "52px serif";
  this.wrongLetter = 800;
}


//trazos básicos "horca"
HangmanCanvas.prototype.createBoard = function () { 
  this.ctx.beginPath();
  this.ctx.moveTo(100,750);
  this.ctx.lineTo(200,750);
  this.ctx.lineTo(150,725);
  this.ctx.lineTo(100,750);
  this.ctx.moveTo(150,725);
  this.ctx.lineTo(150,200);
  this.ctx.lineTo(500,200);
  this.ctx.lineTo(500,300);
  this.ctx.stroke();
  this.ctx.closePath();

};

//dependen del largo de la palabra del secretword
//se declara la variable x como punto de inicio de los trazos
//for para recorrer y "pintar" las letras de la palabra secreta
  //como las líneas dependen de la iteración se dibujan adentro del for
HangmanCanvas.prototype.drawLines = function () {
  var x = 250;
  for (i=0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(x,750);
    //variable x + 50 pixeles del trazo de las x
    this.ctx.lineTo(x+50,750);
    this.ctx.stroke();
    this.ctx.closePath();
    //en cada iteración se va a agregar el valor de x + 70 (considera el largo de la línea + el espacio entre líneas)
    x+= 70;
  }
};

//va a dibujar el texto con la letra del secret word
//con poner los [] se entiende que va a usar la letra en la posición del index
//usamos la variable secret word porque es la palabra que se va a dibujar, empieza en la coordenada 250+70*por el número de letras
HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.fillText(this.secretWord[index],250+70*index,740);
};

// escribe las las letras que son equivocadas y dibuja el ahorcado
// se definió una variable nueva para que tenga la posición en X donde va a dibujar la letra equivocada
HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.fillText(letter,this.wrongLetter,200);
  this.wrongLetter+=60;
  switch(errorsLeft){
    case 5:
      this.drawHangman("head");
    break;
    case 4:
      this.drawHangman("body");
    break;
    case 3:
      this.drawHangman("rightHand");
    break;
    case 2:
      this.drawHangman("leftHand");
    break;
    case 1:
      this.drawHangman("rightLeg");
    break;
    case 0:
      this.drawHangman("leftLeg");
  }
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch(shape){
    case "head":
      this.ctx.beginPath();
      this.ctx.arc(500,350,50,0,Math.PI*2);
      this.ctx.stroke();
      break;
    case "body":
      this.ctx.beginPath();
      this.ctx.moveTo(500,400);
      this.ctx.lineTo(500,550);
      this.ctx.stroke();
      break;
    case "rightHand":
      this.ctx.beginPath();
      this.ctx.moveTo(425,400);
      this.ctx.lineTo(500,450);
      this.ctx.stroke();
      break;
    case "leftHand":
      this.ctx.beginPath();
      this.ctx.moveTo(575,400);
      this.ctx.lineTo(500,450);
      this.ctx.stroke();
      break;
    case "rightLeg":
      this.ctx.beginPath();
      this.ctx.moveTo(400,600);
      this.ctx.lineTo(500,550);
      this.ctx.stroke();
      break;
    case "leftLeg":
      this.ctx.beginPath();
      this.ctx.moveTo(600,600);
      this.ctx.lineTo(500,550);
      this.ctx.stroke();
      break;
  }

};
//no se porqué no carga la imagen
HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();
  imgScale = 640/480;
  img.hangmanCanvas = this; //pasando el canvas como atributo a la imagen
  img.onload = function() {
    this.hangmanCanvas.ctx.drawImage(img, 500, 500,400*imgScale,150);
  };
  img.src = 'images/gameover.png';
};

HangmanCanvas.prototype.winner = function () {
  var img = new Image();
  imgScale = 640/480;
  img.hangmanCanvas = this;
  img.onload = function() {
  this.hangmanCanvas.ctx.drawImage(img, 500, 500,400*imgScale,150);
  };
  img.src = 'images/awesome.png';
};