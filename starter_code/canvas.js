function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
	this.word = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  console.log("Ready");
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.fillStyle = "black";
  this.ctx.beginPath();
  this.ctx.moveTo(200, 500);
  this.ctx.lineTo(100, 600);
  this.ctx.lineTo(300, 600);
  this.ctx.lineTo(200, 500);
  this.ctx.lineTo(200, 50);
  this.ctx.lineTo(500, 50);
  this.ctx.lineTo(500, 100);
  this.ctx.stroke();
	this.ctx.closePath();
	this.drawLines();
};

HangmanCanvas.prototype.drawLines = function() {
	for ( let i = 0, x = 75 ; i < this.word.length ; i++, x += 75 ) {
		this.ctx.beginPath();
		this.ctx.moveTo(x,750);
		this.ctx.lineTo(x+50,750);
		this.ctx.stroke();
		this.ctx.closePath();
	}
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
	let x = (index * 75) + 75;
	this.ctx.font = "75px Arial";
	this.ctx.fillText(this.word[index], x, 725);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errors) {
	let x = (errors * 60) + 550;
	this.ctx.font = "75px Arial";
	this.ctx.fillText(letter, x, 150);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
	switch(shape) {
		case 'head':
			this.ctx.beginPath();
			this.ctx.arc(500, 150, 50, 0, Math.PI * 2);
			this.ctx.stroke();
			this.ctx.closePath();
			break;
		case 'body':
			this.ctx.beginPath();
			this.ctx.moveTo(500,200);
			this.ctx.lineTo(500,400);
			this.ctx.stroke();
			this.ctx.closePath();
			break;
		case 'leftArm':
			this.ctx.beginPath();
			this.ctx.moveTo(500,250);
			this.ctx.lineTo(450,300);
			this.ctx.stroke();
			this.ctx.closePath();
			break;
		case 'rightArm':
			this.ctx.beginPath();
			this.ctx.moveTo(500,250);
			this.ctx.lineTo(550,300);
			this.ctx.stroke();
			this.ctx.closePath();
			break;
		case 'leftLeg':
			this.ctx.beginPath();
			this.ctx.moveTo(500,400);
			this.ctx.lineTo(450,450);
			this.ctx.stroke();
			this.ctx.closePath();
			break;
		case 'rightLeg':
			this.ctx.beginPath();
			this.ctx.moveTo(500,400);
			this.ctx.lineTo(550,450);
			this.ctx.stroke();
			this.ctx.closePath();
			break;
	}
};

HangmanCanvas.prototype.gameOver = function() {
	this.ctx.font = "50px Arial";
	this.ctx.fillText("x", 470, 150);
	this.ctx.fillText("x", 505, 150);
	this.ctx.font = "75px Arial";
	this.ctx.fillText("GAME OVER", 550, 300);
	this.ctx.fillText("LOSER", 640, 400);
};

HangmanCanvas.prototype.winner = function() {

};
