class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.word = secretWord;
    this.x = 650;
    this.y = 230;
  }

  createBoard() {
  this.context.clearRect(0,0, 800, 1200);
  this.drawLines();
  }

  drawLines() {
  let i;
  for (i=0; i<this.word.length; i++){
  let j = ((2*i) + 5) * 50;
  this.context.beginPath();
  this.context.moveTo(j,750);
  this.context.lineTo(j,750);
  this.context.stroke();
  }

  
  writeCorrectLetter(index) {
  this.coordinate = ((2 * index) + 5) * 50 + 25;
  this.context.font = '15px monospace';
  this.context.fillText(this.secretWord.charAt(index).toUpperCase(), this.coordinate, this.y); 
  }

  writeWrongLetter(letter, errorsLeft) {
    this.index = this.secretWord.indexOf(letter);
    if (this.index === -1){
      this.context.font = '15px monospace';
      this.context.fillText.toUpperCase((letter, this.x, this.y);
      this.x += 50;
      this.y += 50;
      Hangman.errorsLeft--;
    } else {
      this.writeCorrectLetter(this.index);
    };
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft){
     case 9: 
      this.context.beginPath();
      this.context.moveTo(100,100);
      this.context.lineTo(100,500);
      this.context.closePath();
      this.context.stroke();
     break;
     case 8:
      this.context.beginPath();
      this.context.moveTo(100,100);
      this.context.lineTo(350,100);
      this.context.closePath();
      this.context.stroke();
      break;
      case 7:
      this.context.beginPath();
      this.context.moveTo(100,500);
      this.context.lineTo(50,550);
      this.context.lineTo (150,550);
      this.context.closePath();
      this.context.stroke();
      break;
      case 6:
      this.context.beginPath();
      this.context.arc(350, 170, 40, 0, Math.PI * 2);
      this.context.stroke();
      break;
      case 5:
      this.context.beginPath();
      this.context.moveTo(350,100);
      this.context.lineTo(350,130);
      this.context.closePath();
      this.context.stroke();
      break;
      case 4:
      this.context.beginPath();
      this.context.moveTo(350,100);
      this.context.lineTo(350,130);
      this.context.closePath();
      this.context.stroke();
      break;
      case 3:
      this.context.beginPath();
      this.context.moveTo(350,210);
      this.context.lineTo(350,360);
      this.context.closePath();
      this.context.stroke();
      break;
      case 2:
      this.context.beginPath();
      this.context.moveTo(350,360);
      this.context.lineTo(290,450);
      this.context.closePath();
      this.context.stroke();
      break;
      case 1:
      this.context.beginPath();
      this.context.moveTo(350,360);
      this.context.lineTo(410,450);
      this.context.closePath();
      this.context.stroke();
      break;
      case 0:
      this.gameOver();
    };
  }

  gameOver() {
const img = new Image();
imgScale = 640/480;
img.onload = function() {
this.context.drawImage(img, 360, 100,150*imgScale,150);
};
img.src = '../images/gameover.png';  
  }

  winner() {
const img = new Image();
imgScale = 640/480;
img.onload = function() {
this.context.drawImage(img, 360, 100,150*imgScale,150);
};
img.src = '../images/awesome.png'; 
  }
}
