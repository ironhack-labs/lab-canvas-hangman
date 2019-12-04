
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.drawLines()
  }

  drawLines() {
    let xPosition = 300;
    for(let i = 0; i < this.secretWord.length ;i++){
      this.ctx.beginPath();
      this.ctx.moveTo(xPosition,600);
      xPosition +=50;
      this.ctx.lineTo(xPosition,600);
      this.ctx.strokeStyle = '#000000';
      this.ctx.stroke();
      xPosition += 20;
    }
    this.ctx.closePath();
  }

  writeCorrectLetter(letter) {
    this.ctx.beginPath();
    let xTrueLetter = 315;
    this.ctx.font = '30px Arial'
    for(let i = 0; i < this.secretWord.length; i++){
      if(letter == this.secretWord[i]){
        this.ctx.fillText(letter,xTrueLetter, 590)
      }
      xTrueLetter += 70;
    }
    this.ctx.closePath();
  }

  writeWrongLetter(letters, errorsLeft) {
    //console.log('letters', letters)
    //console.log('errorsLeft', errorsLeft)
    this.ctx.beginPath();
    let xLetter = 650;
    this.ctx.font = '30px Arial'
    for(let i = 0; i < letters.length; i++){
      this.ctx.fillText(letters[i],xLetter, 200)
      xLetter += 40;
    }
    this.drawHangman(errorsLeft)
    this.ctx.closePath();
  }

  drawHangman(shape) {
    switch (shape) {
      case 9:
          this.ctx.beginPath();
          this.ctx.moveTo(100,600);
          this.ctx.lineTo(200,600);
          this.ctx.lineTo(150,550);
          this.ctx.lineTo(100,600);
          this.ctx.lineWidth = 3;
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 8:
          this.ctx.beginPath();
          this.ctx.moveTo(150,550);
          this.ctx.lineTo(150,100);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = '#000000';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 7:
          this.ctx.beginPath();
          this.ctx.moveTo(150,100);
          this.ctx.lineTo(500,100);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = '#000000';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 6:
          this.ctx.beginPath();
          this.ctx.moveTo(500,100);
          this.ctx.lineTo(500,150);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = '#000000';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 5:
          this.ctx.beginPath();
          this.ctx.arc(500,200, 50, 0, 2*Math.PI, true);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = 'pink';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 4:
          this.ctx.beginPath();
          this.ctx.moveTo(500,250);
          this.ctx.lineTo(500,400);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = 'pink';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 3:
          this.ctx.beginPath();
          this.ctx.moveTo(500,400);
          this.ctx.lineTo(450,500);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = 'pink';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 2:
          this.ctx.beginPath();
          this.ctx.moveTo(500,400);
          this.ctx.lineTo(550,500);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = 'pink';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 1:
          this.ctx.beginPath();
          this.ctx.moveTo(500,275);
          this.ctx.lineTo(450,350);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = 'pink';
          this.ctx.stroke();
          this.ctx.closePath();
        break;
      case 0:
          this.ctx.beginPath();
          this.ctx.moveTo(500,275);
          this.ctx.lineTo(550,350);
          this.ctx.lineWidth = 3;
          this.ctx.strokeStyle = 'pink';
          this.ctx.stroke();
          this.ctx.closePath();
          setTimeout(function(){ 
            this.gameOver()
          }.bind(this), 750);
        break;
    }


  }

  gameOver() {
    let imgGameOver = new Image();
    imgGameOver.src = 'images/gameover.png';
    imgGameOver.onload = function(){
    this.ctx.drawImage(imgGameOver,300,250)
    }.bind(this)
  }

  winner() {
    let imgWinner = new Image();
    imgWinner.src = 'images/awesome.png';
    imgWinner.onload = function(){
    this.ctx.drawImage(imgWinner,175,100)
    }.bind(this)
  }

}