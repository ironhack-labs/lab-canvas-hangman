var hangman;

function Hangman() {
  this.words = ["hola", "hey", "ironhack"];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 8;
  this.newCanvas = new HangmanCanvas(this.secretWord);
};

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode < 65 || keyCode > 122) {
    return false;

  } else {
    return true
  };
};

Hangman.prototype.checkClickedLetters = function (key) {

  if (this.letters.includes(key)) {
    return false
  } else {
    return true
  };

};

Hangman.prototype.addCorrectLetter = function (i) {

  return this.guessedLetter += this.secretWord.charAt(i).toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {

  return this.errorsLeft--;

};

Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft == 0) {

    return true;
  } else {
    return false;
  };

};

Hangman.prototype.checkWinner = function () {

  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } else {
    return false;
  }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  document.getElementById('hangman').style.display = 'block';
  //console.log(hangman);
}
document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e)) {
    var key = e.key;
    if (hangman.checkClickedLetters(key)) {
      hangman.letters.push(key);
      if (hangman.secretWord.includes(key)) {
        var index = hangman.secretWord.indexOf(key);
        hangman.addCorrectLetter(index);
        hangman.newCanvas.writeCorrectLetter(index);
        if (hangman.checkWinner()) {
          console.log('winwin');
          hangman.newCanvas.winner();
        }
      } else {
        hangman.addWrongLetter(key);
        hangman.newCanvas.writeWrongLetter(key, hangman.errorsLeft);
        hangman.newCanvas.drawHangman(8 - hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangman.newCanvas.gameOver();
        }
      }
    }
  } else {
    alert("please put a letter");
  }
};