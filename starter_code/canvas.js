
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.xCorrectLetterPosition = 280; //increment by 50
  this.yCorrectLetterPosition = 440;
  this.xWrongLetterPosition = 500; //increment by 40
  this.yWrongLetterPosition = 130;
  this.shapes = ["rightLeg", "leftLeg", "leftArm", "rightArm", "body", "head", "gallowDown", "gallowAcross", "gallowUp", "triangle" ]
}

HangmanCanvas.prototype.createBoard = function () {
  // Clear the board
  this.ctx.clearRect(0, 0, 1000, 500);
  this.ctx.font = "45px Arial";
  this.ctx.lineWidth = 2.5;
};

HangmanCanvas.prototype.drawLines = function () {
  var xStartingPoint = 275;
  var yPoint = 455;

  for (x = 0; x < this.secretWord.length; x++){
    this.ctx.beginPath();
    this.ctx.moveTo(xStartingPoint, yPoint);
    this.ctx.lineTo(xStartingPoint + 40, yPoint);
    this.ctx.stroke();
    xStartingPoint += 50;
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.fillText(this.secretWord.charAt(index), this.xCorrectLetterPosition + (index * 50), this.yCorrectLetterPosition);

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.fillText(letter, this.xWrongLetterPosition , this.yWrongLetterPosition);
  this.xWrongLetterPosition += 40;
  this.drawHangman(this.shapes[errorsLeft])
};

HangmanCanvas.prototype.drawHangman = function (shape) {
switch (shape){
  case "head":
    // Head
    this.ctx.beginPath();
    this.ctx.arc(400, 95, 35, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    break;

  case "body":
    //Body
    this.ctx.beginPath();
    this.ctx.moveTo(400, 130);
    this.ctx.lineTo(400, 260);
    this.ctx.stroke();
    break;

  case "leftArm":
    //Left arm
    this.ctx.beginPath();
    this.ctx.moveTo(400, 150);
    this.ctx.lineTo(350, 200);
    this.ctx.stroke();
    break;
  
  case "rightArm":
  //Right arm
  this.ctx.beginPath();
  this.ctx.moveTo(400, 150);
  this.ctx.lineTo(450, 200);
  this.ctx.stroke();
  break;
  
  case "leftLeg":
  //Left leg
  this.ctx.beginPath();
  this.ctx.moveTo(400, 260);
  this.ctx.lineTo(350, 310);
  this.ctx.stroke();
  break;
  
  case "rightLeg":
  //Right leg
  this.ctx.beginPath();
  this.ctx.moveTo(400, 260);
  this.ctx.lineTo(450, 310);
  this.ctx.stroke();
  break;

  case "triangle":
  //Left foot
  this.ctx.beginPath();
  this.ctx.moveTo(200, 420);
  this.ctx.lineTo(250, 455);
  this.ctx.lineTo(150, 455);
  this.ctx.lineTo(200, 420);
  this.ctx.stroke();

  break;
  
  case "gallowUp":
  //Right foot
  this.ctx.beginPath();
  this.ctx.moveTo(200, 420);
  this.ctx.lineTo(200, 10);
  this.ctx.stroke();
  break;

  case "gallowAcross":
  //Left hand
  this.ctx.beginPath();
  this.ctx.moveTo(200, 10);
  this.ctx.lineTo(400, 10);
  this.ctx.stroke();
  break;

  case "gallowDown":
  //Right hand
  this.ctx.beginPath();
  this.ctx.moveTo(400, 10);
  this.ctx.lineTo(400, 60);
  this.ctx.stroke();
  break;
}
};

HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();
  img.src = "images/gameover.png";
  this.ctx.drawImage(img, 300, 100);
  console.log("img is:", img);

};

HangmanCanvas.prototype.winner = function () {  
  var img = new Image();
  img.src = "images/awesome.png";
  this.ctx.drawImage(img, 300, 100);
};
