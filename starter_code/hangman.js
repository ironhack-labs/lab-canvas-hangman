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
	this.letters.push(key);

	for(var i = 0; i < this.letters.length; i++){
		if(this.letters[i].includes(this.secretWord)){
			return false;
		}
		else if(key === this.secretWord){
			return true;
		}
	}

/*	if(letters.push(key) ){
	
	}*/
};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

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
