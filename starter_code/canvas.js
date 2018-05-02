
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.wrongLetterXaxis = 480;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.fillStyle='black';

  this.ctx.beginPath();
  this.ctx.moveTo(75, 650);
  this.ctx.lineTo(150, 700);
  this.ctx.lineTo(0, 700);
  this.ctx.fill();

  this.ctx.beginPath();
  this.ctx.moveTo(75,0);
  this.ctx.lineTo(75,700)
  this.ctx.lineWidth=3;
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(75,0);
  this.ctx.lineTo(400,0)
  this.ctx.lineWidth=5;
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(400,0)
  this.ctx.lineTo(400, 80);
  this.ctx.lineWidth=3;
  this.ctx.stroke();
  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {

  var x = 230;

  this.secretWord.split("").forEach(letter => {
 
        this.ctx.beginPath();
        this.ctx.moveTo(x,697)
        this.ctx.lineTo((x)+50, 697 );
        this.ctx.lineWidth=3;
        this.ctx.stroke();
        x += 60;

  });

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

    let letter = this.secretWord[index].toLowerCase();
    let xAxisArray = []
    var xStartAxis = 242;

    this.secretWord.split("").forEach((l,i) => {

      xAxisArray.push(xStartAxis)

      if(l == letter){
        this.ctx.font = "40px Arial";
        this.ctx.fillText(letter.toUpperCase(),xAxisArray[i],683);
      }

      xStartAxis += 60;
    });

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

    this.ctx.font = "40px Arial";
    this.ctx.fillText(letter.toUpperCase(),this.wrongLetterXaxis,50);
    
    this.wrongLetterXaxis += 60;
    console.log(errorsLeft)
    switch(errorsLeft) {
      case 6:
          this.drawHangman("head");
          break;
      case 5:
          this.drawHangman("body");
          break;
      case 4:
          this.drawHangman("leftArm");
          break;
      case 3:
          this.drawHangman("rightArm");
          break;
      case 2:
          this.drawHangman("leftLeg");
          break;
      case 1:
          this.drawHangman("rightLeg");
    }
};

HangmanCanvas.prototype.drawHangman = function (shape) {

  switch(shape) {
    case 'head':
          this.ctx.beginPath();
          this.ctx.arc(400, 130, 50, 0, Math.PI * 2, true); // Outer circle
          this.ctx.moveTo(365, 130);
          this.ctx.arc(400, 130, 35, 0, Math.PI, false);  // Mouth (clockwise)
          this.ctx.moveTo(385, 110);
          this.ctx.arc(385, 110, 5, 0, Math.PI * 2, true);  // Left eye
          this.ctx.moveTo(420, 110);
          this.ctx.arc(420, 110, 5, 0, Math.PI * 2, true);  // Right eye
          this.ctx.stroke();
        break;
    case 'body':
        this.ctx.beginPath();
        this.ctx.moveTo(400,180)
        this.ctx.lineTo(400, 300 );
        this.ctx.lineWidth=3;
        this.ctx.stroke();
        break;
    case 'leftArm':
        this.ctx.beginPath();
        this.ctx.moveTo(400,200)
        this.ctx.lineTo(350, 250 );
        this.ctx.lineWidth=3;
        this.ctx.stroke();
        break;
    case 'rightArm':
        this.ctx.beginPath();
        this.ctx.moveTo(400,200)
        this.ctx.lineTo(450, 250 );
        this.ctx.lineWidth=3;
        this.ctx.stroke();
        break;
    case 'leftLeg':
        this.ctx.beginPath();
        this.ctx.moveTo(400,300)
        this.ctx.lineTo(350, 400 );
        this.ctx.lineWidth=3;
        this.ctx.stroke();
        break;
    case 'rightLeg':
          this.ctx.beginPath();
          this.ctx.moveTo(400,300)
          this.ctx.lineTo(450, 400 );
          this.ctx.lineWidth=3;
          this.ctx.stroke();
  }


};

HangmanCanvas.prototype.gameOver = function () {

  var img = new Image();   // Create new img element
  img.src = 'images/gameover.png'; // Set source path
  this.ctx.drawImage(img, 300, 150);

};

HangmanCanvas.prototype.winner = function () {

  var img = new Image();   // Create new img element
  img.src = 'images/awesome.png'; // Set source path
  this.ctx.drawImage(img, 300, 150);


};
