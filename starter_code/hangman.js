var hangman;

function Hangman() {
  this.words = ["JASMINE", "CANVAS", "JQUERY", "JAVASCRIPT", "UNDEFINED"],
  this.secretWord = "",
  this.letters = [],
  this.guessedLetter = "",
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  var selectedWord = [Math.floor(Math.random()*this.words.length)];
  return ("" + selectedWord + "");
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    var clickedLetter = String.fromCharCode(keyCode);
    this.letters.push(clickedLetter);
    console.log(this.letters);
    return true;
  }
  else {
    return false;
  };
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  }
  else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  var splittedSecretWord = this.secretWord.split("");
  if (splittedSecretWord.includes(i)) {
    var x = String.fromCharCode(i)
    console.log(x)
    this.guessedLetter + x;
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  var splittedSecretWord = this.secretWord.split("");
  if (splittedSecretWord.includes(letter)) {
    return false;
  }
  else {
    return this.errorsLeft --;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  }
  else {
    return false;
  };
};

Hangman.prototype.checkWinner = function () {
  // Hacer de secretWord un array en el que cada
  // una de las letras sea un string
  var splittedWord = this.secretWord.split("");
  // Ordenar alfabéticamente las letras y quitar las que
  // se repitan
  var sortedWord = splittedWord.sort();
  var removedDuplicates = sortedWord.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});
  console.log(removedDuplicates);
  // Hacer un array con las letras ya adivinadas en el
  // que cada una de ellas sea un string
  var splittedLetters = this.guessedLetter.split("");
  // Ponerlas en orden alfabético
  var sortedLetters = splittedLetters.sort();
  console.log(sortedLetters)
  if (sortedLetters === removedDuplicates) {
    alert("YOU WIN!!!!!");
    return true;
  }
  else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
