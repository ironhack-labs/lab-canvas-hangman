 //let hangman = new Hangman();
const winnerImg = new Image();
winnerImg.src = "./images/awesome.png";
const looserImg = new Image();
looserImg.src = "./images/gameover.png";
function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;

  this.canvas = document.getElementById("hangman");

  this.ctx = this.canvas.getContext("2d");
}

  this.prototype.createBoard = function() {
    //dibujo 
   this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  }

  this.prototype.drawLines = function() { 
    //revisa el secretword no addCorrectLetter imprime las lineas conforme al numero de caracteres
    ctx.beginPath();
    for (var y = 0; y < Hangman.secretWord.length; y += 1) {
        addLineSubPath(ctx, y);
    }
    ctx.stroke();

    function addLineSubPath(ctx, y) {
      ctx.moveTo(y*30, 0);
      ctx.lineTo(y*30+25, 0);
    }
  }

  this.prototype.writeCorrectLetter = function (index) {
    //se pone en posicion busca letra por el index que tiene 
  this.ctx.font = "40px Arial";
  this.ctx.fillText(this.secretWord[i], 500,300)
  }

  HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
      //recibe la letra incorrecta y los errores que tiene 
  }

  HangmanCanvas.prototype.drawHangman = function (shape) {
    let errors = shape 
    //un switch que dependiendo los fallos se va dibijando o un if revisando los errores 
    if(errors === 1){
       //base triangulo
      ctx.beginPath();
      ctx.moveTo(290, 650);
      ctx.lineTo(400, 750);
      ctx.lineTo(180, 750);
      ctx.lineTo(290, 650);
      ctx.stroke();
      ctx.closePath();
    }else if(errors === 2){
       //linea 
      ctx.beginPath();
      ctx.moveTo(290, 650);
      ctx.lineTo(290, 200);
      ctx.stroke();
      ctx.closePath();
    } else if(erros === 3){
         //linea horizontal 
      ctx.beginPath();
      ctx.moveTo(290, 200);
      ctx.lineTo(500, 200);
      ctx.stroke();
      ctx.closePath();
    }else if(errors === 4){
      ///vertical
      ctx.beginPath();
      ctx.moveTo(500, 200);
      ctx.lineTo(500, 250);
      ctx.stroke();
      ctx.closePath();
    }else if(erors === 5){
        //cabeza
      ctx.beginPath();
      ctx.arc(500, 300, 50, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.closePath();
    }else if(errors === 6){
      //cuerpo
      ctx.beginPath();
      ctx.moveTo(500, 350);
      ctx.lineTo(500, 550);
      ctx.stroke();
      ctx.closePath();
    }else if(erros === 7){
      //brazoIzq
      ctx.beginPath();
      ctx.moveTo(500, 380);
      ctx.lineTo(450, 480);
      ctx.stroke();
      ctx.closePath();
       //brazoDer
       ctx.beginPath();
       ctx.moveTo(500, 380);
       ctx.lineTo(550, 480);
       ctx.stroke();
       ctx.closePath();
    }else if(erros === 8){
      //piernaIzq
      ctx.beginPath();
      ctx.moveTo(500, 550);
      ctx.lineTo(450, 680);
      ctx.stroke();
      ctx.closePath();
    }else if(errors === 9){
        //piernaDer
      ctx.beginPath();
      ctx.moveTo(500, 550);
      ctx.lineTo(550, 680);
      ctx.stroke();
      ctx.closePath();
    }
  }

  Hangman.prototype.gameOver = function() {
    //carga la imagen si ganas
    this.ctx.drawImage(winnerImg,150, 150, 500, 250);
  }

  Hangman.prototype.winner = function() {
    //carga la imagen si pierdes
    this.ctx.drawImage(looserImg, 150, 150, 500, 250);
  }




