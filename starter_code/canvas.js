
function HangmanCanvas(hangman) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.hangman = hangman;
  console.log(hangman);
  this.createBoard();
  this.drawHangman();
}

HangmanCanvas.prototype.createBoard = function () {
	this.ctx.clearRect(0, 0, 800, 1200);
	this.drawLines();
};

// height="800px" width="1200px

HangmanCanvas.prototype.drawLines = function () {
	this.ctx.beginPath();
	console.log(myHangMan.secretWord + " " + myHangMan.secretWord.length);
	
	for(var i = 0; i < this.hangman.secretWord.length; i++){
		this.ctx.moveTo(250 + i*60, 600);
		this.ctx.lineTo(300 + i*60, 600);

	}

	this.ctx.stroke();
	
};

HangmanCanvas.prototype.writeCorrectLetter = function (letter ,index) {
	//console.log("calling");
	this.ctx.font = '48px serif';
	this.ctx.fillText(letter,260 + index*60, 570);
	
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, index) {
	this.ctx.font = '48px serif';
	this.ctx.fillText(letter,400 + index*50, 200);
	this.addDrawHangman(index);
};

HangmanCanvas.prototype.drawHangman = function () {
	this.ctx.beginPath();
	
	//Triangle
    this.ctx.moveTo(50, 600);
    this.ctx.lineTo(100, 570);
    this.ctx.lineTo(150, 600);
	this.ctx.lineTo(50, 600);
	
	//Line
	this.ctx.moveTo(100, 570);
	this.ctx.lineTo(100, 100);
	this.ctx.lineTo(325, 100);
	this.ctx.lineTo(325, 125);
	
	this.ctx.stroke();
    //this.ctx.fill();
};

HangmanCanvas.prototype.addDrawHangman = function (index) {
	
	this.ctx.beginPath();
	console.log(index);
	switch(index){
			case 0:
				var x = 325; // x coordinate
				var y = 160; // y coordinate
				var radius = 35; // Arc radius
				var startAngle = 0; // Starting point on circle
				var endAngle = Math.PI*2; // End point on circle
				this.ctx.arc(x, y, radius, startAngle, endAngle, true);
				break;
			case 1:
				this.ctx.moveTo(325, 195);
				this.ctx.lineTo(325, 240);
				break;
			case 2:
				this.ctx.moveTo(325, 240);
				this.ctx.lineTo(325, 285);
				break;
			case 3:
				this.ctx.moveTo(325, 285);
				this.ctx.lineTo(325, 330);
				break;
			case 4:
				this.ctx.moveTo(325, 330);
				this.ctx.lineTo(280, 390);
				break;
			case 5:
				this.ctx.moveTo(325, 330);
				this.ctx.lineTo(370, 390);
				break;
			case 6:
				this.ctx.moveTo(325, 240);
				this.ctx.lineTo(280, 270);
				break;
			case 7:
				this.ctx.moveTo(325, 240);
				this.ctx.lineTo(370, 270);
				break;
			case 8:
				this.ctx.moveTo(280, 270);
				this.ctx.lineTo(280, 310);
				break;
			case 9:
				this.ctx.moveTo(370, 270);
				this.ctx.lineTo(370, 310);
				break;
		
	}
	
	this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function (word) {
	this.ctx.font = '60px serif';
	this.ctx.fillText(word ,400, 400);
};

HangmanCanvas.prototype.winner = function (word) {
	this.ctx.font = '60px serif';
	this.ctx.fillText(word , 400, 400);	
};
