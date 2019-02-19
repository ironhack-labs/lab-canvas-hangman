var hangman;

 function Hangman() {
   this.words = ['prueba', 'otraprueba', 'terceraprueba'];
   this.secretWord = '';
   this.letters = [];
   this.guessedLetter = '';
   this.errorsLeft = 10;

}

function randomElementArray(myArray) {
  return myArray[Math.floor(Math.random()*myArray.length)];
}

Hangman.prototype.getWord = function () {
  this.secretWord = randomElementArray(this.words);
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode <= 90 && keyCode >= 65) {
    this.letters.push(String.fromCharCode(keyCode));
    return true;
  } else {
    return false;
  }
  
  /* 
  No pille que pedía verificar si el código de la tecla pertenece a una letra o no.

  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return abc.includes(keyCode.toString().toLowerCase())

  // aquí la linea 52 de Hangman.js de jasmine no tiene lógica */

};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft --;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function () {
  return this.secretWord.length == this.guessedLetter.length;
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
