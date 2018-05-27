
function HangmanCanvas(secretWord) {
  this.space=600;
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
  this.imgGameOver=new Image();
  this.imgGameOver.src='./images/gameover.png';
  this.imgWinner=new Image();
  this.imgWinner.src='./images/awesome.png';
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200, 1200);
  this.ctx.beginPath();
  this.ctx.moveTo(150,650);//triangle top
  this.ctx.lineTo(100,700);
  this.ctx.lineTo(200,700);
  this.ctx.lineTo(150,650);
  this.ctx.lineTo(150,120);
  this.ctx.lineTo(500,120);
  this.ctx.lineTo(500,150);
  this.ctx.stroke();
  
};


HangmanCanvas.prototype.drawLines = function () {
  let len=this.secretWord.length;
  console.log(this.secretWord);
  let x1=250;
  for(let i=0;i<len;i++){
    this.ctx.beginPath();
    this.ctx.moveTo(x1,700);
    this.ctx.lineTo(x1+40,700);
    this.ctx.stroke();
    x1+=60;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font='25px serif';
  this.ctx.fillText(this.secretWord[index],270+60*index,690);
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font='20px serif';
  this.ctx.fillText(letter,this.space,200);
  this.space+=18;
  
  this.drawHangman(errorsLeft);
  
  
};

HangmanCanvas.prototype.drawHangman = function (shape) {

  switch(shape){
    
    case 9:
    this.ctx.beginPath();
    this.ctx.arc(500,190,40,0,2*Math.PI);
    this.ctx.stroke();
    break;
    case 8:
    this.ctx.beginPath();
    this.ctx.arc(480,180,5,0,2*Math.PI);
    this.ctx.stroke();
      
    break;
    case 7:
    this.ctx.beginPath();
    this.ctx.arc(520,180,5,0,2*Math.PI);
    this.ctx.stroke();
    break;
    case 6://boca
    this.ctx.beginPath();
    this.ctx.arc(500,205,8,0,2*Math.PI);
    this.ctx.stroke();
    break;
    case 5://cuello
    this.ctx.beginPath();
    this.ctx.moveTo(500,230);
    this.ctx.lineTo(500,250);
    this.ctx.stroke();
    break;
    case 4:
    this.ctx.beginPath();
    this.ctx.moveTo(500,250);
    this.ctx.lineTo(450,330);
    this.ctx.stroke();
    break;
    case 3:
    this.ctx.beginPath();
    this.ctx.moveTo(500,250);
    this.ctx.lineTo(550,330);
    this.ctx.stroke();
    break;
    case 2:
    this.ctx.beginPath();
    this.ctx.moveTo(500,230);
    this.ctx.lineTo(500,350);
    this.ctx.stroke();
    break;
    case 1:
    this.ctx.beginPath();
    this.ctx.moveTo(500,350);
    this.ctx.lineTo(450,430);
    this.ctx.stroke();
    break;
    //case 0:
    //this.ctx.beginPath();
    //this.ctx.moveTo(500,350);
    //this.ctx.lineTo(550,430);
    //this.ctx.stroke();
    //this.gameOver();
    //break;
  }
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(500,350);
  this.ctx.lineTo(550,430);
  this.ctx.stroke();
this.ctx.drawImage(this.imgGameOver,0,0,500,500);
};

HangmanCanvas.prototype.winner = function () {
this.ctx.drawImage(this.imgWinner,0,0,500,500);
};
