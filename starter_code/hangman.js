var hangman;

function Hangman() {
	this.words = [];
	this.secretWord = "";
	this.letters = [];
	this.guessedLetter = "";
	this.errorsLeft = 10;
}
Hangman.prototype.getWord = function () {
	return this.secretWord;
};
Hangman.prototype.checkIfLetter = function (keyCode) {
	if ((typeof(keyCode) === "number") && (keyCode < 57)){
		return false;
	} else{ 
		return true;
	}

};
Hangman.prototype.checkClickedLetters = function (key) {
	
	if (this.letters.indexOf(key) == -1){
		
		this.letters.push(key);
		return true;

	}else{
		return false;
	}
		
};
Hangman.prototype.addCorrectLetter = function (i) {


};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
