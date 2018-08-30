var hangman;

function Hangman() {
	this.words = ['meta', 'juego', 'Ironhack'];
	this.secretWord = "ironhack";
	this.letters = [];
	this.guessedLetter = "";
	this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
	var position = Math.floor(Math.random() * this.words.length);
	var word = ""; 

	if(this.words[position] === "") {
		return word;
	}else{
		word = this.words[position];
		return word;
	}
};

Hangman.prototype.checkIfLetter = function (keyCode) {

	if (keyCode > 64 && keyCode < 91) {
		return true;
	} else {
		return false;
	}
};

Hangman.prototype.checkClickedLetters = function (key) {
	if (this.letters.includes(key)) {
		return false;
	} else {
		return true;
	}
};

Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter += this.secretWord[i].toLocaleUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
	if(!letter.includes(this.secretWord)){
		this.errorsLeft -= 1;
	}
};

Hangman.prototype.checkGameOver = function () {
	if(this.errorsLeft === 0){
		return true;
	} else {
		return false;
	}
};

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};

document.addEventListener('keydown', function(){});

document.onkeydown = function (e) {
	hangman.checkIfLetter(e.keyCode);

}.bind(hangman);
