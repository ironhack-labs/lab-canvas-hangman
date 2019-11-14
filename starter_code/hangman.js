let hangman;

class Hangman {
	constructor(words) {
		this.words = ['words', 'Ironhack', 'awesome'];
		this.secretWord = '';
		this.letters = [];
		this.guessedLetter = '';
		this.errorsLeft = 10;
	}

  	getWord() {
		return this.words[Math.floor(Math.random() * this.words.length)];

  	}

  	checkIfLetter(keyCode) {
  		if (keyCode > 64 && keyCode < 91){ 
  			return true; 			
  		} else {
  			return false;
  		}
  	}

  	checkClickedLetters(key) {
  		if (this.letters.includes(key)) {
  			return false;
  		} else {
  			return true;
  		}
  	}

  	addCorrectLetter(i) {
  		this.guessedLetter += this.secretWord[i].toUpperCase(); 
  	}

  	addWrongLetter(letter) {
  		if (letter != this.secretWord){
  			this.errorsLeft -= 1;
  		}
  	}

  	checkGameOver() {
  		if (this.errorsLeft <= 0) {
  			return true;
  		} else {
  			return false;
  		}
  	}

  	checkWinner() {
  		if (this.guessedLetter.split('').sort().join('') == this.secretWord.split('').sort().join('')) {
  			return true;
  		} else {
  			return false;
  		}
  	}

}

const words = ['Ironhack', 'awesome', 'beer'];

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman(words);

};

document.onkeydown = (e) => {

};
