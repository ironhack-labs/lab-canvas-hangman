var hangman
var words = [
  'response',
  'excavate',
  'minority',
  'describe',
  'buttocks',
  'campaign',
  'proclaim',
  'question',
  'displace',
  'slippery',
  'necklace',
  'complete',
  'sandwich',
  'generate',
  'economic',
  'detector',
  'feminist',
  'particle',
  'baseball',
  'property'
]

function Hangman() {
  this.words = words
  this.secretWord = ''
  this.letters = []
  this.guessedLetter = ''
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase()
}

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) return true
  return false
}

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) return false
  return true
}

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase()
  this.checkWinner()
}

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
  if (this.checkGameOver()) {
    hangmanCanvas.start = 1
    // BUG: Se trataba de llamar a una propiedad gameOver, pero es un MÉTODO
    hangmanCanvas.gameOver()
  }
}

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) return true
  return false
}

Hangman.prototype.checkWinner = function () {
  for (var j = 0; j < this.secretWord.length; j++) {
    if (this.guessedLetter.indexOf(this.secretWord[j]) === -1) return false
  }
  return true
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman()
  hangman.secretWord = hangman.getWord()
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
}

document.onkeydown = function (e) {
  if (hangman !== undefined && hangmanCanvas.start === 0) {
    if (hangman.checkIfLetter(e.keyCode)) {
      let up = e.key.toUpperCase()
      if (hangman.checkClickedLetters(up)) {
        hangman.letters.push(up)
        if (hangman.secretWord.indexOf(up) >= 0) {
          for (i = 0; i < hangman.secretWord.length; i++) {
            if (hangman.secretWord[i] === up) {
              hangmanCanvas.writeCorrectLetter(i)
              hangman.addCorrectLetter(i)
            }
          }
          // BUG: No agrega letras repetidas
          //hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(up))
          //hangman.addCorrectLetter(hangman.secretWord.indexOf(up))
          if (hangman.checkWinner()) {
            hangmanCanvas.start = 1
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