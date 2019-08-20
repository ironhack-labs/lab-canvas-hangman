var hangman;

class Hangman {
  constructor() {
    this.words = [
      "archaeopteryx",
      "renaissance",
      "encapsulation",
      "javascript",
      "retrospective"
    ];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 6;
		this.drawInstructions = ['rightLeg', 'leftLeg', 'rightArm', 'leftArm', 'body', 'head'];
		this.uniqueLetters = "";
  }
}

Hangman.prototype.getWord = function() {
  let random = Math.floor(Math.random() * this.words.length);
  return this.words[random].toUpperCase();
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91) return true;
  return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
  for (let i = 0; i < this.letters.length; i++) {
    if (this.letters[i] === key) {
      console.log(`That letter has been tried already!`);
      return false;
    }
  }
  return true;
};

Hangman.prototype.addCorrectLetter = function(i) {
  return this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) return true;
  return false;
};

Hangman.prototype.checkWinner = function() {
  this.uniqueLetters = this.uniqueCharacters(this.secretWord);
	for (let i = 0; i < this.guessedLetter.length; i++) {
    if ( this.secretWord.indexOf(this.guessedLetter[i]) === -1 ) {
      console.log(this.guessedLetter[i]);
      return false;
    }
  }
	if (this.uniqueLetters.length === this.guessedLetter.length) return true;
	return false;
};

Hangman.prototype.uniqueCharacters = function(array) {
  return array
    .split("")
    .filter(function(item, i, ar) {
      return ar.indexOf(item) === i;
    })
    .join("");
};

Hangman.prototype.isPresent = function(letter, array) {
  for (let i = 0; i < array.length; i++) {
    if (letter === array[i]) return true;
  }
  return false;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
	hangman.secretWord = hangman.getWord();
	console.log(hangman.secretWord);
	canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  document.getElementById("start-game-button").innerText = "RESTART";
};

document.onkeydown = function(e) {
  let clickedLetter = e.keyCode;
  let clickedCharacter = e.key.toUpperCase();
  console.log(`Adivinado hasta ahora ${hangman.guessedLetter}`);

  if ( hangman.errorsLeft > 0 ) {
    if (hangman.checkIfLetter(clickedLetter)) {
      if ( hangman.checkClickedLetters(clickedCharacter) ) {
        let checkLetterIndex = hangman.secretWord.indexOf(clickedCharacter);
        console.log(clickedCharacter);
        if ( checkLetterIndex > -1 ) {
          if ( hangman.guessedLetter.indexOf(clickedCharacter) === -1 )hangman.addCorrectLetter(checkLetterIndex);
          for ( let i = 0 ; i < hangman.secretWord.length ; i++ ) {
            if ( hangman.secretWord[i] === hangman.secretWord[checkLetterIndex] ) {
              canvas.writeCorrectLetter(i);
            }
          }  
        }
        else {
          hangman.letters.push(clickedCharacter);
          hangman.addWrongLetter(clickedCharacter);
          canvas.drawHangman(hangman.drawInstructions[hangman.errorsLeft]);
          canvas.writeWrongLetter(clickedCharacter,hangman.letters.length);
        }
      }
      if ( hangman.checkGameOver() ) {
        canvas.gameOver();
      }
      if ( hangman.checkWinner() ) {
        let image = new Image();
        image.src = "./images/awesome.png";
        canvas.ctx.drawImage(image, 50, 0, 1150, 600);
      }
    }
  }
  else {
    document.getElementById("start-game-button").innerText = "RESTART";
  }
};
