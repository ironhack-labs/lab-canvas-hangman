
function HangmanCanvas(secretWord) {
  let canvas = document.getElementById("hangman");

  canvas.width = window.innerWidth;
  canvas.heigth = window.innerHeight;

  this.ctx = canvas.getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.fillStyle = 'white';
  this.ctx.strokeStyle = 'black';
  this.ctx.fillRect(0, 0, 1200, 8000);
  this.ctx.lineWidth = 2;
};

HangmanCanvas.prototype.drawLines = function () {
  let wordCount = this.secretWord.length;
  let letterSpacing = 25;
  let lineLength = 50;
  let x1 = 100;
  let x2 = x1 + lineLength;
  let y = 400;

  for (let i = 0; i < wordCount; i++) {
    let x3 = x2 + letterSpacing;
    let x4 = x3 + lineLength;

    this.ctx.beginPath();
    this.ctx.moveTo(x3, y);
    this.ctx.lineTo(x4, y);
    this.ctx.stroke()
    this.ctx.fill();

    x2 += lineLength + letterSpacing;

  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (indeces) {
  
  for(let i = 0; i < indeces.length; i++){
    let x = 199 + (indeces[i] * 75);
    let y = 390;

    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.secretWord[indeces[i]], x, y);
  }
  
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  for(let i = 0; i < indeces.length; i++){
    let x = 199 + (indeces[i] * 75);
    let y = 390;

    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.secretWord[indeces[i]], x, y);
  }

};

HangmanCanvas.prototype.drawHangman = function (shape) {

  switch(shape){
    case 'triangulo':
        this.ctx.beginPath()
        this.ctx.moveTo(25, 400);
        this.ctx.lineTo(125, 400);
        this.ctx.lineTo(75, 350);
        this.ctx.lineTo(25, 400);
        this.ctx.closePath();
        this.ctx.stroke();
        break;

    case 'posteVertical':
        // this.ctx.beginPath();
        this.ctx.moveTo(75, 350);
        this.ctx.lineTo(75, 150);
        this.ctx.stroke();
        break;

    case 'posteHorizontal':
        // this.ctx.beginPath();
        this.ctx.moveTo(75, 150);
        this.ctx.lineTo(175, 150);
        this.ctx.stroke();
        break;

    case 'cuerda':
      // this.ctx.beginPath();
      this.ctx.moveTo(175, 150);
      this.ctx.lineTo(175, 200);
      this.ctx.stroke();
      break;

    case 'cabeza':
      this.ctx.beginPath();
      this.ctx.strokeStyle = "black"
      let x = 175
      let y = 220
      let radio = 20
      let anguloInicial = 0
      let anguloFinal = Math.PI*2
      this.ctx.arc(x, y, radio, anguloInicial, anguloFinal, true)
      this.ctx.stroke();
      break;

    case 'tronco':
      // this.ctx.beginPath();
      this.ctx.moveTo(175, 240);
      this.ctx.lineTo(175, 300);
      this.ctx.stroke();
      break;

    case 'piernaIzq':
      // this.ctx.beginPath();
      this.ctx.moveTo(175, 300);
      this.ctx.lineTo(160, 330);
      this.ctx.stroke();
      break;

    case 'piernaDer':
      // this.ctx.beginPath();
      this.ctx.moveTo(175, 300);
      this.ctx.lineTo(190, 330);
      this.ctx.stroke();
      break;

    case 'brazoIzq':
      // this.ctx.beginPath();
      this.ctx.moveTo(175, 260);
      this.ctx.lineTo(160, 260);
      this.ctx.stroke();
      break;

    case 'brazoDer':
        // this.ctx.beginPath();
      this.ctx.moveTo(175, 260);
      this.ctx.lineTo(190, 260);
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
