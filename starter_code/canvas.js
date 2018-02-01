
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function (length) {
  for(var i = 0; i < length; i++){
    this.ctx.beginPath();
    this.ctx.fillRect(200+(i*75), 700, 60, 5);
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
    for(var i = 0; i < hangman.secretWord.length; i++){
      if(hangman.secretWord[i] === index){
        this.ctx.font = "50px Arial";
        this.ctx.fillText(index.toString(), 215 + (i*75), 680);
      }
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {  
    console.log(letter);  
  if(hangman.letters.includes(letter)){
      console.log('Cals')  
      return false;
      }
      if(!hangman.checkIfLetter(letter.charCodeAt())){
        return false;
      }
      if(10-errorsLeft <=5){
        this.ctx.font = "50px Arial";
        this.ctx.fillText(letter.toString(), 515 + ((10 - errorsLeft)*75), 180);
      }
      else {
        this.ctx.font = "50px Arial";
        this.ctx.fillText(letter.toString(), 515 + ((5 - errorsLeft)*75), 280);
      }
      this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function () {
    switch (hangman.errorsLeft) {
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(90, 705);
        this.ctx.lineTo(190, 705);
        this.ctx.lineTo(140, 655);
        this.ctx.fill();
        break;
      case 8:
        this.ctx.beginPath();
        this.ctx.fillRect(137.5, 255, 5, 405);
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.fillRect(137.5, 255, 200, 5);
        break;
      case 6:
        this.ctx.beginPath();
        this.ctx.fillRect(337.5, 255, 5, 100);
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.arc(340.5, 385, 30, 0, 2*Math.PI);
        this.ctx.stroke();
        break;
      case 4:
        this.ctx.beginPath();
        this.ctx.fillRect(340.5, 415, 3, 100);
        break;
      case 3:
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(340.5, 415, 3 ,100);
        this.ctx.lineTo(360.5, 455, 3 ,100);
        this.ctx.stroke();
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(340.5, 415, 3 ,100);
        this.ctx.lineTo(320.5, 455, 3 ,100);
        this.ctx.stroke();
        break;
      case 1:
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(340.5, 505, 3 ,100);
        this.ctx.lineTo(320.5, 540, 3 ,100);
        this.ctx.stroke();
        break;
      case 0:
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(340.5, 505, 3 ,100);
        this.ctx.lineTo(360.5, 540, 3 ,100);
        this.ctx.stroke();
        break;
      default:
        break;
    }
};

HangmanCanvas.prototype.gameOver = function () {
    var img = new Image;
    var that = this;
    img.src = 'images/gameover.png'
    img.onload = function() {
      that.ctx.drawImage(img, 200, 200);
    };
    
};

HangmanCanvas.prototype.winner = function () {
    var img = new Image;
    var that = this;
    img.src = 'images/awesome.png'
    img.onload = function() {
      that.ctx.drawImage(img, 200, 200);
  };
};
