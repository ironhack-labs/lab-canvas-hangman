var hangman;

class Hangman {
  constructor() {
    this.words = ["archaeopteryx", "renaissance", "encapsulation", "javascript", "retrospective"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
  /*
  getWord() {
    let random = Math.floor(Math.random()*this.words.length);
    return this.words[random];
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) return true;
    return false;
  }

  checkClickedLetters(letter) {
    for (let i = 0; i < this.letters.length; i++) {
      if (this.letters[i] === letter) return false;
    }
    return true;
  }

  addCorrectLetter(key){
    return this.guessedLetter = this.guessedLetter.concat(this.secretWord[key].toUpperCase());
  }

  addWrongLetter(letter) {
    this.errorsLeft--
  }

  checkGameOver() {
    if( this.errorsLeft === 0 ) return true;
    return false;
  }

  checkWinner() {
    let uniqueLetters = this.uniqueCharacters(this.secretWord);
    for ( let i = 0 ; i < this.guessedLetter.length ; i++ ) {
      if ( !this.isPresent( this.guessedLetter[i] , this.secretWord ) ) return false;
    }
    if ( uniqueLetters.length !== this.guessedLetter.length ) return false;
    return true;
  }

  uniqueCharacters(array) {
    return array.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
  }

  isPresent(letter, array) {
    for ( let i = 0 ; i < array.length ; i++ ) {
      if ( letter === array[i] ) return true;
    }
    return false;
  }
  */
}

Hangman.prototype.getWord = function () {
  let random = Math.floor(Math.random()*this.words.length);
  return this.words[random];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91) return true;
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  for (let i = 0; i < this.letters.length; i++) {
    if (this.letters[i] === key) return false;
  }
  return true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  return this.guessedLetter = this.guessedLetter.concat(this.secretWord[i].toUpperCase());
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
};

Hangman.prototype.checkGameOver = function () {
  if( this.errorsLeft === 0 ) return true;
  return false;
};

Hangman.prototype.checkWinner = function () {
  let uniqueLetters = this.uniqueCharacters(this.secretWord);
  for ( let i = 0 ; i < this.guessedLetter.length ; i++ ) {
    if ( !this.isPresent( this.guessedLetter[i] , this.secretWord ) ) return false;
  }
  if ( uniqueLetters.length !== this.guessedLetter.length ) return false;
  return true;
};

Hangman.prototype.uniqueCharacters = function(array) {
  return array.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
}

Hangman.prototype.isPresent = function(letter, array) {
  for ( let i = 0 ; i < array.length ; i++ ) {
    if ( letter === array[i] ) return true;
  }
  return false;
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
