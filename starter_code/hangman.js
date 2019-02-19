var hangman;

function Hangman() {
  this.words = ['piña', 'pitufo', 'mollete', 'viena'];
  this.secretWord = this.words[0];
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var randomIndex = Math.floor( Math.random() * ( this.words.length) )
  this.secretWord = this.words[randomIndex];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ( ( keyCode > 64 && keyCode < 91 ) || keyCode === 186 ); // 186 es el keyCode de la letra 'ñ'
};

Hangman.prototype.checkClickedLetters = function (key) {
  const result = this.letters.filter( letter => letter === key );
  return result.length === 0;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  return this.checkWinner(); // ???
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft --;
  return this.checkGameOver(); // ???
};

Hangman.prototype.checkGameOver = function () {
  return ( this.errorsLeft === 0 );
};

function differentLetters ( word ) {
  var str = word.toUpperCase();
  var uniql = "";
  for (var x=0;x < str.length;x++) {
    if(uniql.indexOf(str.charAt(x)) == -1) { uniql += str[x]; }
  }
  var sortLetter = uniql.split('').sort().join('');
  return sortLetter;
}

Hangman.prototype.checkWinner = function () {
  var sortGuesses = this.guessedLetter.toUpperCase().split('').sort().join(''); // Pasamos a mayúsculas y orden alfabético
  var sortSecretWord = differentLetters ( this.secretWord );
  return (!this.checkGameOver() && sortGuesses.localeCompare(sortSecretWord) === 0);
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
