function HangmanCanvas() {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.letterPos = 500;
}

HangmanCanvas.prototype.createBoard = function(secretWord) {
  // clear field
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  // turns left
  this.ctx.font = "12px Arial";
  this.ctx.fillText("Errors left: 6", 450, 20);
  // drawn hang
  this.ctx.beginPath();
  this.ctx.moveTo(100, 400);
  this.ctx.lineTo(200, 350);
  this.ctx.lineTo(300, 400);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.moveTo(200, 350);
  this.ctx.lineTo(200, 10);
  this.ctx.lineTo(400, 10);
  this.ctx.lineTo(400, 60);
  this.ctx.stroke();
  // drawn lines
  if (secretWord.length >= 10) {
    this.printError("Word too long!");
    return false;
  }
  var xpos = 500;

  secretWord.split("").forEach(
    function(letter, index) {
      this.drawLines(xpos);
      xpos += 50;
    }.bind(this)
  );
};

HangmanCanvas.prototype.drawLines = function(xpos) {
  this.ctx.beginPath();
  this.ctx.moveTo(xpos, 350);
  this.ctx.lineTo(xpos + 40, 350);
  this.ctx.stroke();
};

HangmanCanvas.prototype.printError = function(error) {
  this.clearError();
  this.ctx.fillStyle = "red";
  this.ctx.font = "30px Arial";
  this.ctx.fillText(error, 500, 100);
  this.ctx.fillStyle = "black";
};

HangmanCanvas.prototype.clearError = function() {
  this.ctx.clearRect(480, 75, 580, 90);
};

HangmanCanvas.prototype.writeCorrectLetter = function(letter, index) {
  this.clearError();
  this.ctx.font = "24px Arial";
  this.ctx.fillText(letter, 510 + 50 * index, 340);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.clearError();
  this.ctx.font = "18px Arial";
  this.ctx.fillText(letter, this.letterPos, 200);
  this.ctx.clearRect(400, 10, 680, 50);
  this.ctx.font = "12px Arial";
  this.ctx.fillText("Errors left: " + errorsLeft, 450, 20);
  this.letterPos += 50;
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  switch (shape) {
    case "Head":
      this.ctx.beginPath();
      this.ctx.arc(400, 100, 40, 0, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case "Body":
      this.ctx.beginPath();
      this.ctx.moveTo(400, 140);
      this.ctx.lineTo(400, 250);
      this.ctx.stroke();
      break;
    case "Leftarm":
      this.ctx.beginPath();
      this.ctx.moveTo(400, 140);
      this.ctx.lineTo(350, 200);
      this.ctx.stroke();
      break;
    case "Rightarm":
      this.ctx.beginPath();
      this.ctx.moveTo(400, 140);
      this.ctx.lineTo(450, 200);
      this.ctx.stroke();
      break;
    case "Leftleg":
      this.ctx.beginPath();
      this.ctx.moveTo(400, 250);
      this.ctx.lineTo(350, 300);
      this.ctx.stroke();
      break;
    case "Rightleg":
      this.ctx.beginPath();
      this.ctx.moveTo(400, 250);
      this.ctx.lineTo(450, 300);
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {
  this.clearError();
  this.ctx.font = "30px Arial red";
  this.ctx.fillText("Lost", 500, 100);
};

HangmanCanvas.prototype.winner = function() {
  this.clearError();
  this.ctx.font = "30px Arial green";
  this.ctx.fillText("You won!", 500, 100);
};
