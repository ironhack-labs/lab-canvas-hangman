var hangman;
let running = false;

function Hangman() {
  //Pendiente: corregir lógica para que permita palabras con letras repetidas
  this.words = ["Tacos", "Nuevo", "Cebra", "Vuelta", "Tango", "Chanfle", "Goles"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  this.finished = false;
}

Hangman.prototype.getWord = function () {
  let i = Math.floor(Math.random()*this.words.length);
  let word = this.words[i].toUpperCase();
  return word;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
    return true; 
  }
  else return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
  }
  else return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
  if (this.checkWinner()) {
    alert("Congratulations! You won!");
    this.finished = true;
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  if (this.checkGameOver()) {
    alert("Game over! You lost!");
    this.finished = true;
  }
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft <= 0) ? true : false;
};

//Letras repetidas??????
Hangman.prototype.checkWinner = function () {
  return (this.guessedLetter.length === this.secretWord.length) ? true : false;
};

document.getElementById('start-game-button').onclick = function () {
  running = true;
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
};

//¿Cómo le hago para que ya no siga corriendo cuando ya terminó?
document.onkeydown = function (e) {
  if (running && !(hangman.finished)) {
    // e = e.key.toUpperCase();
    keycode = e.keyCode;
    key = e.key.toUpperCase();
    if (hangman.checkIfLetter(keycode) && hangman.checkClickedLetters(key)) {
      hangman.letters.push(key); //Agregar la letra al arreglo que contiene las que ya se hicieron
      if (hangman.secretWord.indexOf(key) === -1) {
        hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft); //Primero pinta
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        hangman.addWrongLetter(key); //Luego ejecuta la lógica
      } 
      else {
        //Aguas con los duplicados
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(key));
        hangman.addCorrectLetter(hangman.secretWord.indexOf(key));
      }
    }
    else if (!(hangman.checkIfLetter(keycode))){
      alert("Please press an actual letter this time!");
    }
  }
};
