var hangman


function Hangman() {
  this.words = ['VICTORIA', 'SAUL', 'SALUDOS','IRONHACK']  // de aqui salen las plabras 
  this.secretWord = ''
  this.letters = []
  this.guessedLetter = ''
  this.errorsLeft = 10   // este es el numero de intentos 
}

Hangman.prototype.getWord = function () {      
  return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase()  //<-- de aqui sale la palabra random
};

Hangman.prototype.checkIfLetter = function (keyCode) {   //<-- detectar que lo que se oprime sean letras
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) return true
  return false  
};

Hangman.prototype.checkClickedLetters = function (key) {  //<-- se detecta la accion del click
  if (this.letters.includes(key)) return false
  return true
};

Hangman.prototype.addCorrectLetter = function (i) {       //si la letra aparece la añade 
  this.guessedLetter += this.secretWord[i].toUpperCase()
  this.checkWinner()
};

Hangman.prototype.addWrongLetter = function (letter) {     //con esto ponemos la letra en la parte superior
  this.errorsLeft--
  this.checkGameOver()
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) return true
  return false
};

Hangman.prototype.checkWinner = function () {
  for (var j = 0; j < this.secretWord.length ; j++) {
    if (this.guessedLetter.indexOf(this.secretWord[j]) === -1) return false
  }
  return true
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman()
  hangman.secretWord = hangman.getWord() // BLISS
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines() // _ _ _ _ _
};


document.onkeydown = function (e) {
  if (hangman !== undefined && hangmanCanvas.start === 0) {
  if (hangman.checkIfLetter(e.keyCode)) {
    let up = e.key.toUpperCase()
    if (hangman.checkClickedLetters(up)) {
      hangman.letters.push(up)
      if (hangman.secretWord.indexOf(up) >= 0) {
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(up))
        hangman.addCorrectLetter(hangman.secretWord.indexOf(up))
        if (hangman.checkWinner()) {
          hangmanCanvas.winner()
        }
      } else {
        hangman.addWrongLetter()
        hangmanCanvas.writeWrongLetter(up, hangman.errorsLeft)
      }
    } 
  } 
  }
}