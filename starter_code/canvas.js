
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
	this.margin = 20;
	this.size = 20;
	this.xstart = 800;
	this.ystart = 400;
}

HangmanCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0,0,800, 1200);
};

HangmanCanvas.prototype.drawLines = function () {
	this.ctx.moveTo(this.xstart,this.ystart)
	for (var i= 0; i<this.secretWord.length; i++) {
		this.ctx.moveTo(this.xstart + i*(this.margin+this.size) +this.margin, this.ystart);
		this.ctx.lineTo(this.xstart + (i+1)*(this.margin+this.size), this.ystart);
		this.ctx.stroke();
	}

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
	this.ctx.font= 2*this.size + "px Georgia";
	this.ctx.fillText(this.secretWord[index],this.xstart + (index+0.5) * (this.size + this.margin), this.ystart-6);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
	this.ctx.font= 2*this.size + "px Georgia";
	this.ctx.fillText(letter,this.xstart + (10-errorsLeft+0.5) * (this.size + this.margin), 80);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
	if(shape == 10) {
		this.ctx.moveTo(20, this.ystart+100);
		this.ctx.lineTo(120, this.ystart+100);
		this.ctx.stroke();
	} else if( shape == 9) {
		this.ctx.moveTo(20, this.ystart+100);
		this.ctx.lineTo(120, this.ystart+100);
		this.ctx.stroke();
	}

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
