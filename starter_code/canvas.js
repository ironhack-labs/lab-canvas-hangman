function HangmanCanvas(secretWord) {
	this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function() {};

HangmanCanvas.prototype.drawLines = function() {
	var x = 800;
	var y = 100;

	this.ctx.moveTo(x, y);
	this.ctx.lineTo(x, y);
	this.ctx.lineTo(x + 40, y);
	this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
