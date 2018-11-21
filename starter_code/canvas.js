
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

function Hangman(){
	this.words=['a','l','g','o'];
	this.secretWord='';
	this.letters=[];
	this.guessedLetter='';
	this.errorsLeft= 10;
}

Hangman.prototype.getWord= function (){
	var word=this.words[Math.floor(Math.random()*this.words.length)]
	return word;
}
Hangman.prototype.checkIfLetter= function (letter){
	return (letter>=65 && letter<=90 || letter>=97 && letter<=122);
}

Hangman.prototype.checkClickedLetters= function (letter){ 
	var existe= this.letters.find(function(element) {
  				return element == letter;
  			});
	return existe?false:true;
}

Hangman.prototype.addCorrectLetter= function (pos){
	this.guessedLetter+=this.secretWord.substring(pos,pos+1).toUpperCase();
}

Hangman.prototype.addWrongLetter= function (pos){
	this.errorsLeft--;
}


Hangman.prototype.checkGameOver= function (pos){
	return (this.errorsLeft>0?false:true);
}

Hangman.prototype.checkWinner= function (){
	var contadorWin=0;
	for(var i=0;i<this.secretWord.length;i++){
		for(var j=0;j<this.guessedLetter.length;j++){
			if(this.guessedLetter[j] == this.secretWord[i]){
				this.guessedLetter[j]=null;
				contadorWin++;
				break;
			}
		}
	}
	return contadorWin==this.secretWord.length;
}


HangmanCanvas.prototype.createBoard = function () {

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
