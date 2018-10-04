
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.word= ""
  this.letters=""
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,document.getElementById('hangman').width, document.getElementById('hangman').height)
  //document.querySelector(".canvas").innerHTML = '<canvas id="hangman" height="800px" width="1200px"></canvas>'
};

HangmanCanvas.prototype.drawLines = function () {
  
  for(i=0; i<hangman.secretWord.length;i++){
    this.word +="_";
  }
  this.ctx.font = '55px serif';
  this.ctx.strokeText(this.word,300,570);
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  for(var i=0;i<index.length;i++){
  this.word = this.word.substr(0,index[i])+ hangman.secretWord[index[i]]+this.word.substr(index[i]+1, this.word.length)
  }

  this.ctx.clearRect(298,530, 900, 900)
  this.ctx.font = '45px serif';
  this.ctx.strokeText(this.word,300,580);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  
  this.letters += letter
  this.ctx.font = '44px serif';
  this.ctx.fillText(this.letters,430,270);
  this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  var ctx = this.ctx;
  switch(shape) {
  case 10 :
    ctx.moveTo(100,600);
    ctx.lineTo(200, 500);
    ctx.lineTo(300, 600);
    ctx.lineTo(100,600);
    ctx.stroke();
    break;

    case 9:
    ctx.moveTo(200,500);
    ctx.lineTo(200,200);
    ctx.stroke();
    break;

    case 8:
    ctx.lineTo(400, 200);
    ctx.stroke();
    break;

    case 7:
    ctx.lineTo(400,250);
    ctx.stroke();
    break;

    case 6:
    ctx.arc(400,280, 30, 0, Math.PI*2);
    ctx.stroke();
    break;

    case 5:
    ctx.moveTo(400,310);
    ctx.lineTo(400, 450);
    ctx.stroke();
    break;

    case 4:
    ctx.lineTo(330,530);
    ctx.stroke();
    break;

    case 3:
    ctx.moveTo(400,450);
    ctx.lineTo(470,530);
    ctx.stroke();
    break;

    case 2:
    ctx.moveTo(330,370);
    ctx.lineTo(400,370);
    ctx.stroke();
    break;
    
    case 1:
    ctx.lineTo(470,370);
    ctx.stroke();
    break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
