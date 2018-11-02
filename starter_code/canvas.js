
class HangmanCanvas {
  constructor(hangman){
  this.context = document.getElementById('hangman').getContext('2d');
  this.context.lineWidth = 10;
  this.game = hangman;
  this.currentXAxis = 520;
  this.currentYAxis = 550;
  this.wrongXAxis = 520;
  this.canvasLetterTracker = [];
  this.createBoard();
  this.drawTracker = ["base", "lineUp", "lineRight", "lineDown", "head", "body", "leftLeg", "rightLeg", "leftArm", "rightArm"];
}

createBoard() {
  for(let i = 0; i < this.game.correctLetters.length; i++) {
    this.context.beginPath();
    this.context.moveTo(this.currentXAxis, 550);
    this.canvasLetterTracker.push(this.currentXAxis);
    this.context.lineTo(this.currentXAxis+=32, 550);
    this.context.stroke();
    this.currentXAxis+=8;
  }
};

drawHangman() {
  switch(this.drawTracker[0]){
    case "base":
    this.context.beginPath();
    this.context.moveTo(40, 550);
    this.context.lineTo(440,550)
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "lineUp":
    this.context.beginPath();
    this.context.moveTo(190, 550);
    this.context.lineTo(190,150)
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "lineRight":
    this.context.beginPath();
    this.context.moveTo(190, 150);
    this.context.lineTo(470, 150)
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "lineDown":
    this.context.beginPath();
    this.context.moveTo(470, 150);
    this.context.lineTo(470, 200);
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "head":
    this.context.beginPath()
    this.context.arc(470, 240, 40, 0, Math.PI*2, true);
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "body":
    this.context.beginPath();
    this.context.moveTo(470, 280);
    this.context.lineTo(470,400)
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "leftLeg":
    this.context.beginPath();
    this.context.moveTo(470, 400);
    this.context.lineTo(420, 460);
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "rightLeg":
    this.context.beginPath();
    this.context.moveTo(470, 400);
    this.context.lineTo(520, 460);
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "leftArm":
    this.context.beginPath();
    this.context.moveTo(470, 300);
    this.context.lineTo(420, 360);
    this.context.stroke();
    this.drawTracker.shift();
          break;
    case "rightArm":
    this.context.beginPath();
    this.context.moveTo(470, 300);
    this.context.lineTo(520, 360);
    this.context.stroke();
    this.drawTracker.shift();
          break;
  }
};


writeCorrectLetter(keyPressed) {
  if (this.canvasLetterTracker.length === 0) {
    return
  }
  for (let i = 0; i < this.game.xIndex.length; i++) {
    this.context.beginPath();
    this.context.font = '36px Arial';
    this.context.fillText(`${keyPressed.toUpperCase()}`, this.canvasLetterTracker[this.game.xIndex[i]], 542);
    this.canvasLetterTracker.splice([this.game.xIndex[i]], 1);
  }
};

  writeWrongLetter(keyPressed) {
    this.context.beginPath();
    this.context.font = "36px Arial";
    this.context.fillText(`${keyPressed.toUpperCase()}`, this.wrongXAxis+=36, 100);
    this.drawHangman();
  };

// drawHangman(x) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
}