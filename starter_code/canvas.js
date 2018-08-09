function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.secret = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
  var y = 1200;
  var x = 800;

  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function() {
  console.log("drawing");
  console.log(this.secret.length);
  var dist = 50;
  var wordL = this.secret.length * 2 * dist;
  // Dashed line drawn with distance for each letter ;-)
  this.ctx.setLineDash([dist, dist]);
  this.ctx.beginPath();
  this.ctx.moveTo(450, 200);
  this.ctx.lineTo(450 + wordL, 200);
  this.ctx.stroke();
  this.ctx.setLineDash([]);
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  console.log("writing correct");
  var correct = this.secret;
  this.ctx.font = "60px serif";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(correct[index].toUpperCase(), 460 + 100 * index, 195);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  console.log("Incorrect");
  this.ctx.clearRect(0, 0, 1200, 150);
  this.ctx.font = "40px serif";
  this.ctx.fillStyle = "purple";
  this.ctx.fillText(
    "Bad decisions in your life remaining: " + (errorsLeft - 1),
    200,
    100
  );
  this.ctx.font = "60px serif";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(letter.toUpperCase(), 460 + 60 * (10 - errorsLeft), 500);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  console.log("drawing");
  this.ctx.beginPath();
  switch (shape) {
    case 10:
      this.ctx.moveTo(350, 200);
      this.ctx.lineTo(350, 150);
      this.ctx.stroke();
      break;
    case 9:
      this.ctx.moveTo(350, 150);
      this.ctx.lineTo(200, 150);
      this.ctx.stroke();
      break;
    case 8:
      this.ctx.moveTo(200, 150);
      this.ctx.lineTo(200, 600);
      this.ctx.stroke();
      break;
    case 7:
      this.ctx.moveTo(50, 600);
      this.ctx.lineTo(350, 600);
      this.ctx.stroke();
      break;
    case 6:
      //this.ctx.moveTo(350, 200);
      this.ctx.arc(350, 234, 34, 0, 2 * Math.PI);
      this.ctx.stroke();
      break;
    case 5:
      this.ctx.moveTo(350, 268);
      this.ctx.lineTo(350, 418);
      this.ctx.stroke();
      break;
    case 4:
      this.ctx.moveTo(350, 418);
      this.ctx.lineTo(350 - 50, 418 + 75);
      this.ctx.stroke();
      break;
    case 3:
      this.ctx.moveTo(350, 418);
      this.ctx.lineTo(350 + 50, 418 + 75);
      this.ctx.stroke();
      break;
    case 2:
      this.ctx.moveTo(350, 268 + 50);
      this.ctx.lineTo(350 - 45, 268 + 100);
      this.ctx.stroke();
      break;
    case 1:
      this.ctx.moveTo(350, 268 + 50);
      this.ctx.lineTo(350 + 45, 268 + 100);
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};