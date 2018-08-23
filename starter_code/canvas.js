
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.word = secretWord;
  this.palabra = [];
  this.contador = 0;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800); 
  this.ctx.strokeRect(0,0,1200,800)
};

HangmanCanvas.prototype.drawLines = function () {
  for (var i=0; i<this.word.length; i++){
    var j= i*74;
    this.ctx.beginPath();
    this.ctx.moveTo(300+j,700);
    this.ctx.lineTo(356+j,700);
    this.ctx.stroke();
  }
  
  
  
};

HangmanCanvas.prototype.writeCorrectLetter = function (buchstabe, index) {
  for (var i=0; i<this.word.length; i++){
    this.palabra.push("");
  }
  this.palabra.splice(index,1,buchstabe);
  var self = this;
  this.palabra.forEach(function(item, index){
    var i = index*73;
    self.ctx.font = '55px serif';
    self.ctx.fillText(item,310+i,690);
  });
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var i = this.contador*73;
  this.ctx.font = '55px serif';
  this.ctx.fillText(String.fromCharCode(letter),0+i,150);
  this.contador++;
  this.drawHangman();
};

HangmanCanvas.prototype.drawHangman = function() {
  console.log(this.contador);
  switch(this.contador){  
    //triángulo
    case 1:
    this.ctx.beginPath();
    this.ctx.moveTo(100,700);
    this.ctx.lineTo(200,700);
    this.ctx.lineTo(150,670);
    this.ctx.lineTo(100,700);
    this.ctx.stroke();
    break;
    
    //asta
    case 2:
    this.ctx.beginPath();
    this.ctx.moveTo(150,670);
    this.ctx.lineTo(150,200);
    this.ctx.stroke();
    break;
    
    //poste
    case 3:
    this.ctx.beginPath();
    this.ctx.moveTo(150,200);
    this.ctx.lineTo(350,200);
    this.ctx.stroke();
    break;

    //soga
    case 4:
    this.ctx.beginPath();
    this.ctx.moveTo(350,200);
    this.ctx.lineTo(350,250);
    this.ctx.stroke();
    break;
    
    //cabeza
    case 5:
    this.ctx.beginPath();
    this.ctx.arc(350, 290, 40, 0, 2*Math.PI, true);
    this.ctx.stroke(); 
    break;

    //tronco
    case 6:
    this.ctx.beginPath();
    this.ctx.moveTo(350,330);
    this.ctx.lineTo(350,490);
    this.ctx.stroke();
    break;
    
    //pierna izquierda
    case 7:
    this.ctx.beginPath()
    this.ctx.moveTo(350,490);
    this.ctx.lineTo(279,570);
    this.ctx.stroke();
    break;
    
    //pierna derecha
    case 8:
    this.ctx.beginPath()
    this.ctx.moveTo(350,490);
    this.ctx.lineTo(421,570);
    this.ctx.stroke();
    break;
    
    //brazo izquierdo
    case 9:
    this.ctx.beginPath()
    this.ctx.moveTo(350,390);
    this.ctx.lineTo(279,340);
    this.ctx.stroke();
    break;
    
    //brazo derecho
    case 10:
    this.ctx.beginPath()
    this.ctx.moveTo(350,390);
    this.ctx.lineTo(421,340);
    this.ctx.stroke();
    break;
    
    
  }
};

HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();
  var self = this;
  img.src="./images/gameover.png";
  img.onload = function() {
    self.ctx.drawImage(img, 0, 0,1200,600);
  }; 
};

HangmanCanvas.prototype.winner = function () {
  var img = new Image();
  var self = this;
  img.src="./images/awesome.png";
  img.onload = function() {
    self.ctx.drawImage(img, 0, 0,1200,600);
  };
};






