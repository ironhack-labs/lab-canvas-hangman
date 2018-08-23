
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  hangman.secretWord = secretWord.toLowerCase();  
}

HangmanCanvas.prototype.createBoard = function (x, y) {
  this.ctx.beginPath();
  this.ctx.moveTo(x, y);
  this.ctx.lineTo(x-50, y+40);
  this.ctx.lineTo(x+50, y+40);
  this.ctx.lineTo(x, y);
  this.ctx.lineTo(x, y-450);
  this.ctx.moveTo(x-80, y-350);
  this.ctx.lineTo(x+350, y-500);
  this.ctx.moveTo(x+300, y-495);
  this.ctx.lineTo(x+300, y-350);
  this.ctx.arc(x+285, y-329, 25, Math.PI*1.7, Math.PI*0.3, false);
  this.ctx.arc(x+315, y-329, 25, Math.PI*0.7, Math.PI*1.3, false);
  this.ctx.stroke();
  this.ctx.beginPath();
  this.ctx.arc(x+850, y-460, 50, 0, Math.PI*2, false);
  this.ctx.fill();
  this.ctx.font = '55px serif';
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = '#ffffff';
  this.ctx.fillText(hangman.errorsLeft, x+850, y-445);
  this.ctx.fillStyle = '#000000';      
};

HangmanCanvas.prototype.drawLines = function (x, y) {
  this.ctx.beginPath();
  x+=95;
  for(i=0; i<hangman.secretWord.length; i++){
    x+=5;
    this.ctx.moveTo(x, y);
    x+=35;
    this.ctx.lineTo(x, y);
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (letter, x, y) {
  x+=117.5;
  y-=5;
  let index = 0
  while(index>-1){
    index = hangman.secretWord.indexOf(letter,index);    
    if (index >-1){
      let x2 = x + index * 40;
      this.ctx.font = '40px serif';
      this.ctx.textAlign = "center";
      this.ctx.fillText(hangman.secretWord[index].toUpperCase(), x2, y);
      index ++;
    }
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft, x, y) {
  var wrongLetters = '';
  letter.forEach(element => {
    wrongLetters += element.toUpperCase();    
  });
  this.ctx.font = '40px serif';
  this.ctx.textAlign = "start";
  this.ctx.fillText(wrongLetters, x+500, y-450);
  this.drawHangman(errorsLeft, x, y);
  this.ctx.beginPath();
  this.ctx.arc(x+850, y-460, 50, 0, Math.PI*2, false);
  this.ctx.fill();
  this.ctx.font = '55px serif';
  this.ctx.textAlign = "center";
  this.ctx.fillStyle = '#ffffff';
  this.ctx.fillText(hangman.errorsLeft, x+850, y-445);
  this.ctx.fillStyle = '#000000';
};

HangmanCanvas.prototype.drawHangman = function (shape, x, y) {
  switch (shape){
    case 9:
      //1 Head
      this.ctx.beginPath();
      this.ctx.arc(x+300, y-320, 20, 0, Math.PI*2, false);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fill();
      this.ctx.fillStyle = '#000000';
      this.ctx.stroke();
      this.ctx.moveTo(x+290, y-325);
      this.ctx.lineTo(x+298, y-325);
      this.ctx.moveTo(x+302, y-325);
      this.ctx.lineTo(x+310, y-325);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(x+300, y-313, 5, 0, Math.PI*2, false);
      this.ctx.stroke();
      break;

    case 8:
      //2 Body
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-300);
      this.ctx.lineTo(x+300, y-200);
      this.ctx.stroke();
      break;
      
    case 7:
      //3 Rigth leg
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-200);
      this.ctx.lineTo(x+275, y-150);
      this.ctx.lineTo(x+265, y-100);  
      this.ctx.stroke();
      break;
      
    case 6:
      //4 Left leg
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-200);
      this.ctx.lineTo(x+325, y-150);
      this.ctx.lineTo(x+335, y-100);  
      this.ctx.stroke();
      break;
      
    case 5:
      //5 Rigth arm
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-280);
      this.ctx.lineTo(x+285, y-250);
      this.ctx.lineTo(x+280, y-220);  
      this.ctx.stroke();
      break;

    case 4:
      //6 Left arm
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-280);
      this.ctx.lineTo(x+315, y-250);
      this.ctx.lineTo(x+320, y-220);  
      this.ctx.stroke();
      break;

    case 3:
      //7 Rigth leg
      this.ctx.beginPath();
      this.ctx.moveTo(x+265, y-100);
      this.ctx.lineTo(x+280, y-93);
      this.ctx.stroke();
      break;

    case 2:
      //8 Left leg
      this.ctx.beginPath();
      this.ctx.moveTo(x+335, y-100);
      this.ctx.lineTo(x+320, y-93);
      this.ctx.stroke();
      break;

    case 1:
      //9 Change arms
      this.ctx.clearRect(x+280, y-280, 18, 80);
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-280);
      this.ctx.lineTo(x+282, y-265);
      this.ctx.lineTo(x+300, y-300);
      this.ctx.stroke();
      this.ctx.clearRect(x+302, y-280, 18, 80);
      this.ctx.beginPath();
      this.ctx.moveTo(x+300, y-280);
      this.ctx.lineTo(x+318, y-265);
      this.ctx.lineTo(x+300, y-300);  
      this.ctx.stroke();
      break;

    case 0:
      //10 Head
      this.ctx.beginPath();
      this.ctx.arc(x+300, y-320, 15, 0, Math.PI*2, false);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fill();
      this.ctx.fillStyle = '#000000';
      this.ctx.beginPath();
      this.ctx.moveTo(x+289, y-327);
      this.ctx.lineTo(x+297, y-319);
      this.ctx.moveTo(x+297, y-327);
      this.ctx.lineTo(x+289, y-319);
      this.ctx.moveTo(x+303, y-327);
      this.ctx.lineTo(x+311, y-319);
      this.ctx.moveTo(x+311, y-327);
      this.ctx.lineTo(x+303, y-319);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(x+300, y-308, 7, Math.PI*1.1, Math.PI*1.9, false);
      this.ctx.stroke();
      break;

    default:
      console.log('not identified');
  }
};

HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();   // Create new img element
  img.src = './images/gameover.png'; // Set source path
  img.onload = function(){
    setTimeout(function(){
      board.ctx.drawImage(img, 315, 280, 570, 240);
    },1000);
  }
};

HangmanCanvas.prototype.winner = function () {
  var img = new Image();   // Create new img element
  img.src = './images/awesome.png'; // Set source path
  img.onload = function(){
    setTimeout(function(){
      board.ctx.drawImage(img, 164, 91, 872, 618);
    },1000);
  }
};
