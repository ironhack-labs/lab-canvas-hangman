var hangman;

var words = [	"pepe" , "ironhack", "bitcoin", "fakenews", "trump",
				"iceland", "fries", "winning", "pixel", "metrorail",
				"blackberry"];

 function Hangman(words) {
	this.words = words;
	this.secretWord;
	this.letters = [];
	this.guessedLetter = "";
	this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {
	this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
	return this.secretWord;
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
	return keyCode.length == 1 && keyCode.match(/[a-z]/i) != null; 
 };

Hangman.prototype.checkClickedLetters = function (key) {
	return !this.letters.includes(key);
 };

 Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter += i;
	this.letters.push(i);
	
	var indexes = [];
	
	for(var x = 0; x < this.secretWord.length; x++){
		if(i === this.secretWord.charAt(x))
			indexes.push(x);
	}
	
	console.log(indexes);
	
	for(var y = 0; y < indexes.length; y++)
		myCanvas.writeCorrectLetter(i, indexes[y]);
	
	return this.checkWinner();
 };

 Hangman.prototype.addWrongLetter = function (letter) {
	myCanvas.writeWrongLetter(letter , 10 - this.errorsLeft);
	this.errorsLeft--;
	this.letters.push(letter);
	return this.checkGameOver();
 };

 Hangman.prototype.checkGameOver = function () {
	
	return this.errorsLeft < 1;
 };

 Hangman.prototype.checkWinner = function () {
	
	for(var i = 0; i < this.secretWord.length; i++)
	{
		if(!this.guessedLetter.includes(this.secretWord.charAt(i)))
			return false;
	}
	return true;
 };

document.getElementById('start-game-button').onclick = function () {
    myHangMan = new Hangman(words);
	myHangMan.getWord();
	myCanvas = new HangmanCanvas(myHangMan);
};


document.onkeydown = function (e) {
	console.log(e.key);
	var letter = e.key;
	if(myHangMan.checkIfLetter(letter))
	{
		if(myHangMan.checkClickedLetters(letter)){
			if(myHangMan.secretWord.includes(letter)){
				if(myHangMan.addCorrectLetter(letter))
				{
					myCanvas.winner("You Won!!");
				}
			}
			else{
				if(myHangMan.addWrongLetter(letter)){
					myCanvas.gameOver("You Lost!!");
				}
			}
		}
	}

};

// GameLogic 

var myHangMan;
var myCanvas;

/*var myHangMan = new Hangman(words);
myHangMan.getWord();
var myCanvas = new HangmanCanvas(myHangMan);*/
