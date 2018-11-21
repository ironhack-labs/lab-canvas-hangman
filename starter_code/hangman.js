var hangman;
var canvas;

function Hangman() {

  this.words = ["hola", "Iphone"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  var randomNumber = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[randomNumber];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
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
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
  return this.guessedLetter;
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};


Hangman.prototype.verify = function (letter) {
  return this.secretWord.includes(letter);
};



Hangman.prototype.checkWinner = function () {
  for (var i = 0; i < this.secretWord.length; i++) {
    if (this.guessedLetter.includes(this.secretWord[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord());
  canvas.drawLines();

};

document.onkeydown = function (e) {



  //Si la tecla que se presionó no es una letra, da una alerta
  if (!hangman.checkIfLetter(e.keyCode)) {
    alert("Escribe una letra");
    return 0;
  }

  //Si es una letra verifica que no haya sido presionada con anterioridad
  if (!hangman.checkClickedLetters(e.keyCode)) {
    alert("ya presionaste esa tecla!!!");
  } else {
    //Ingresamos la letra presionada al array letters
    hangman.letters.push(e.keyCode);

    //Si la tecla que presionamos corresponde a Secret Word la pintamos en el Lugar que le corresponde
    if (hangman.verify(e.key)) {
      for (var i = 0; i < hangman.secretWord.length; i++) {
        if (hangman.secretWord[i] === e.key) {
         
          canvas.writeCorrectLetter(i);
          hangman.addCorrectLetter(i);
          if (hangman.checkWinner()) {
            alert("Winner!");
          }
        }
      }
    }
  }
};