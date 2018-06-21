var hangman;

function Hangman(secretWord) {
  this.words = ['maman', 'papa', 'soeur', 'frère']; // Array of the world to be guessed
  this.secretWord = secretWord; // Chosen word
  this.letters = []; // Array
  this.guessedLetter = ''; // A string
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*(this.words.length))];
};

Hangman.prototype.checkIfLetter = function (letter) {
  return (letter <= 90 && letter >= 65);
};

Hangman.prototype.checkClickedLetters = function (key) {
  return (!this.letters.includes(key));
};

Hangman.prototype.addCorrectLetter = function (letter) {
  result = this.guessedLetter += this.secretWord[letter].toUpperCase();
  return result
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  return this.letters.push(letter);  
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft == 0);
};

Hangman.prototype.checkWinner = function () {
  var sortedGuessed = this.guessedLetter.split('').sort().join('');
  var sortedSecret = this.secretWord.split('').sort().join('');
  return (sortedGuessed == sortedSecret);
};

document.getElementById('start-game-button').onclick = function () {
  var hangmanGame = new Hangman("Ironhack");  
  console.log(hangmanGame.secretWord);
  
  var hangmanCanvas = new HangmanCanvas("Ironhack");
  hangmanCanvas.drawLines();
};

document.onkeydown = function (e) {
  if (hangmanGame.secretWord.includes(e)) {
    hangmanCanvas.writeCorrectLetter()
  } else {
    hangmanCanvas.writeWrongLetter();
  }
};
