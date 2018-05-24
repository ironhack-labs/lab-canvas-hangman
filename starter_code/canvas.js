
function HangmanCanvas(secretWord) {
  	this.ctx = document.getElementById('hangman').getContext('2d');
  	console.log("Llamando las funciones para dibujar: " + secretWord);
  	this.ctx.fillStyle = "black";
  	this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
	console.log("obj");
	
	let anchoLetra = 50;
	let x = 30;
	let y = 80;
	let espacioEntreLetras = 10;
	this.ctx.beginPath();
	for(var k = 0; k < secretWord.length; k++){

		this.ctx.moveTo(x,y);
		this.ctx.lineTo(x + anchoLetra ,y);
		x = x + anchoLetra + espacioEntreLetras;
	}		
	this.ctx.strokeStyle = 'white';
	this.ctx.stroke();

	let xCabeza = 400;
	let yCabeza = 200;
	let anchoCabeza = 60;
	let largoCuerpo = 200;
	//HangMan Head
	this.ctx.beginPath();
	this.ctx.arc(xCabeza,yCabeza,anchoCabeza,0,2*Math.PI,false);
	this.ctx.strokeStyle = 'white';
	this.ctx.stroke();

	//HangMan Body
	this.ctx.beginPath();
	this.ctx.moveTo(xCabeza , yCabeza + anchoCabeza );
	this.ctx.lineTo(xCabeza , yCabeza + anchoCabeza + largoCuerpo);
	this.ctx.strokeStyle = 'yellow';
	this.ctx.stroke();

}

HangmanCanvas.prototype.createBoard = function () {	
	// this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);		
	console.log("obj");
};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
