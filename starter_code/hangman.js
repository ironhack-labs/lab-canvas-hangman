var hangman;
var ctx;

class Hangman {
	constructor(word) {
		this.word = word;
		this.wordArray = word.split('');
		this.guessArray = new Array(this.wordArray.length).fill('_');
		this.wrongLetters = [];
		this.correctLetters = [];
		this.lives = 10;
		this.points = 0;
	}
	checkClickedLetters(letter) {
		if (
			this.wrongLetters.indexOf(letter) != -1 ||
			this.correctLetters.indexOf(letter) != -1
		) {
			return false;
		} else {
			if (this.word.indexOf(letter) != -1) {
				replaceGuessed(this.word, this.guessArray, letter);
				this.addCorrectLetter(letter);
				//add points
			} else {
				this.addWrongLetter(letter);
			}
			return true;
		}
	}
	addCorrectLetter(letter) {
		this.wordArray = this.wordArray.filter((charLetter) => {
			return charLetter !== letter;
		});
		this.correctLetters.push(letter);
	}
	addWrongLetter(letter) {
		this.wrongLetters.push(letter);
		this.lives -= 1;
	}
	checkGameOver() {
		if (this.lives > 0) {
			if (this.checkWinner()) {
				clearCanvas();
				return true;
			}
			return true;
		} else {
			console.log('Game Over! no more lives');
			clearCanvas();
			return false;
		}
	}
	checkWinner() {
		if (this.wordArray.length === 0) {
			return true;
		} else {
			return false;
		}
	}
}

function clearCanvas() {
	console.log('Game over! you won!');
	console.log(ctx.width, ctx.height);
	ctx.clearRect(
		0,
		0,
		document.getElementById('hangman').width,
		document.getElementById('hangman').height,
	);
}

function replaceGuessed(word, guess, letter) {
	word.split('').forEach((wordLetter, index) => {
		if (wordLetter === letter) {
			guess[index] = letter;
		}
	});
}

function drawHangman() {
	switch (hangman.lives) {
		case 9:
			drawBase();
			break;
		case 8:
			drawBase2();
			break;
		case 7:
			drawBase3();
			break;
		case 6:
			drawHead();
			break;
		case 5:
			drawTorso();
			break;
		case 4:
			drawArm();
			break;
		case 3:
			drawArm2();
			break;
		case 2:
			drawFeet();
			break;
		case 1:
			drawFeet2();
			break;
		case 0:
			drawFace();
			break;
		default:
			break;
	}
}

function drawLetter(letter, position) {
	ctx.fillStyle = 'black';
	ctx.font = '30px Arial';
	ctx.fillText(letter, ...position);
}
function drawGuessedWord() {
	hangman.guessArray.forEach((letter, index) => {
		drawLetter(letter, [670 + 22 * index, 275]);
	});
	hangman.wrongLetters.forEach((letter, index) => {
		drawLetter(letter, [670 + 22 * index, 330]);
	});
}
function drawBase() {
	ctx.beginPath();
	ctx.moveTo(200, 700);
	ctx.lineTo(300, 700);
	ctx.lineTo(250, 600);
	ctx.closePath();
	ctx.stroke();
}
function drawBase2() {
	ctx.beginPath();
	ctx.moveTo(250, 600);
	ctx.lineTo(250, 200);
	ctx.closePath();
	ctx.stroke();
}
function drawBase3() {
	ctx.beginPath();
	ctx.moveTo(250, 200);
	ctx.lineTo(600, 200);
	ctx.lineTo(600, 250);
	ctx.stroke();
}
function drawHead() {
	ctx.beginPath();
	ctx.arc(600, 275, 25, 0, Math.PI * 2, true);
	ctx.stroke();
}
function drawTorso() {
	ctx.beginPath();
	ctx.moveTo(600, 300);
	ctx.lineTo(600, 500);
	ctx.stroke();
}
function drawArm() {
	ctx.beginPath();
	ctx.moveTo(600, 350);
	ctx.lineTo(650, 325);
	ctx.stroke();
}
function drawArm2() {
	ctx.beginPath();
	ctx.moveTo(600, 350);
	ctx.lineTo(550, 325);
	ctx.stroke();
}
function drawFeet() {
	ctx.beginPath();
	ctx.moveTo(600, 500);
	ctx.lineTo(650, 575);
	ctx.stroke();
}
function drawFeet2() {
	ctx.beginPath();
	ctx.moveTo(600, 500);
	ctx.lineTo(550, 575);
	ctx.stroke();
}
function drawFace() {
	ctx.beginPath();
	ctx.arc(597, 290, 15, 0 - 2.45, (Math.PI * 2) / 3 - 2.45, false);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(590, 260);
	ctx.lineTo(600, 270);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(600, 260);
	ctx.lineTo(590, 270);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(600, 260);
	ctx.lineTo(610, 270);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(610, 260);
	ctx.lineTo(600, 270);
	ctx.stroke();
}

document.getElementById('start-game-button').onclick = function() {
	hangman = new Hangman('test');
	ctx = document.getElementById('hangman').getContext('2d');
};

$(document).ready(function() {
	$(document).keydown(function(e) {
		drawGuessedWord();
		let guessedLetter = e.key;
		if (e.keyCode > 64 && e.keyCode < 91 && hangman.checkGameOver()) {
			hangman.checkClickedLetters(guessedLetter);
			drawHangman();
			drawGuessedWord();
		}
	});
});
