
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
		this.ctx.moveTo(this.xstart + i * (this.margin + this.size) + this.margin, this.ystart);
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
  this.ctx.fillText(letter,this.xstart - (errorsLeft+0.5) * (this.size + this.margin), 80);
};

HangmanCanvas.prototype.drawHangman = function (shape) {

	if (shape == 9) {
		this.ctx.beginPath()   
		this.ctx.moveTo(50, 500);
		this.ctx.lineTo(20, 550);
		this.ctx.stroke();
		this.ctx.closePath()
	} else if (shape == 8) {
		this.ctx.beginPath()   
		this.ctx.moveTo(20, 550);
		this.ctx.lineTo(80, 550);
		this.ctx.stroke();
		this.ctx.closePath()
	} else if (shape == 7) {
		this.ctx.beginPath()   
		this.ctx.moveTo(80, 550);
		this.ctx.lineTo(50, 500);
		this.ctx.stroke();
		this.ctx.closePath()
	} else if (shape == 6) {
		this.ctx.beginPath()   
		this.ctx.moveTo(50, 500);
		this.ctx.lineTo(50, 400);
		this.ctx.stroke();
		this.ctx.closePath()
	} else if (shape == 5) {
		this.ctx.beginPath()   
		this.ctx.moveTo(50, 400);
		this.ctx.lineTo(100, 400);
		this.ctx.stroke();
		this.ctx.closePath()
	} else if (shape == 4) {
			this.ctx.beginPath()   
			this.ctx.moveTo(100, 400);
			this.ctx.lineTo(100, 500);
			this.ctx.stroke();
			this.ctx.closePath()
		}	else if (shape == 3) {
				this.ctx.beginPath()   
				this.ctx.moveTo(100, 400);
				this.ctx.lineTo(100, 450);
				this.ctx.stroke();
				this.ctx.closePath()
		} else if (shape == 2) {
			this.ctx.beginPath()   
			this.ctx.arc(100, 450, 50, 0, Math.PI*2, true);
			this.ctx.moveTo(100, 450);
			this.ctx.stroke();
			this.ctx.closePath()
		} else if (shape == 1) {
			this.ctx.beginPath()   
			this.ctx.moveTo(100, 400);
			this.ctx.lineTo(100, 450);
			this.ctx.stroke();
			this.ctx.closePath()
		} else if (shape == 0) {
			this.gameOver();
		}
};

HangmanCanvas.prototype.showPicture = function (shape) {

	var img = new Image()
	img.src = './images/gameover.png'
  img.onload = () => {
		this.ctx.drawImage(img, 400, 100, 500, 500)
	}
} 


HangmanCanvas.prototype.gameOver = function () {
	if (hangman.checkGameOver()) {
		this.showPicture();
	} 
};

HangmanCanvas.prototype.winner = function () {
	console.log('a');
if (hangman.guessedLetter.length === this.secretWord.length) {
	console.log('winner');
	var img = new Image()
	img.src = './images/awesome.png'
  img.onload = () => {
		this.ctx.drawImage(img, 400, 100, 500, 500)
}
}
};
