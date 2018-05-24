var hangman;

function Hangman() {
  this.words = ["hola","adios","mike"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10; 
}

Hangman.prototype.getWord = function () {
  let indexWord = parseInt(Math.random() * this.words.length);
  return this.words[indexWord];
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  let keyCodeLetter = String.fromCharCode(keyCode);
  let keyCodeUpper = keyCodeLetter.toUpperCase();
  let keyAsc = keyCodeUpper.charCodeAt(0);
  
  if (typeof keyAsc == "number" && keyAsc >= 65 && keyAsc <=90){
    return true
  }else {
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  
  if (typeof key == "string"){
    let comparativo = this.letters.filter(function(elemento){
      return key == elemento;
    })    
    if (comparativo.length > 0){
      return false
    }else{
      return true
    }
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
    let palabrasCortadas = this.secretWord.split("");
    this.guessedLetter = this.guessedLetter.concat(palabrasCortadas[i]).toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft = this.errorsLeft - 1;
};

Hangman.prototype.checkGameOver = function () {
  
  if(this.errorsLeft == 0){
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {
  let palabraSecreta = this.secretWord.toUpperCase().split("");
  let letrasPropuestas = this.guessedLetter.split("");

  let revision = palabraSecreta.filter(function(letra){
    return letrasPropuestas.includes(letra);
    }); 

    for (var i = 0; i < palabraSecreta.length; ++i) {
      if (palabraSecreta[i] !== revision[i]) {
        return false
      };
    }
    hangmanCanvas.winner()
    return true;
  
};

let clickStart = 0;

document.getElementById('start-game-button').onclick = function () {

  clickStart++;

  if(clickStart !== 1){
    hangmanCanvas.createBoard();
    hangman = new Hangman();
    hangmanCanvas = new HangmanCanvas("mike");
    hangman.secretWord = hangman.getWord();  
  }
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas("mike");
  hangman.secretWord = hangman.getWord();

};

document.onkeydown = function (e) {
  if(hangman.checkIfLetter(e.keyCode)){
    if(hangman.checkClickedLetters(e.key)){
      hangman.letters.push(e.key);
      console.log(hangman.secretWord.indexOf(e.key));

      if (hangman.secretWord.indexOf(e.key) == -1){
        hangman.addWrongLetter();
        if(hangman.checkGameOver()){
          hangmanCanvas.gameOver();
        }
      } else {
        hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
        hangman.checkWinner();
      }
    } else{
      console.log("Repetido");
    }
  } else{
    console.log("No es una tecla de letra!")
  }
};
