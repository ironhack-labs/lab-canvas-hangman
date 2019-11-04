const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let hangman
let hangmanCanvas
const images = {
  awe: './images/awesome.png',
  over: './images/gameover.png'
};
let words = [
  'chicken',
  'biscuit',
  'oranges',
  'carrots',
  'lettuce',
  'sausage',
  'bananas',
  'cookies',
  'apricot',
  'spinach',
  'pancake',
  'coconut',
  'peaches',
  'yoghurt',
  'raisins',
  'anchovy',
  'sardine',
  'noodles',
  'ketchup',
  'mustard'
]
//constructor
function Hangman() {
  this.words = words
  this.secretWord = ''
  this.letters = []
  this.guessedLetter = ''
  this.errorsLeft = 10
}
// propiedades del prototipo Hangman
//selecciona la palabra en la posicion random del array y la pone en mayusculas
Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase()
}
// recibe el codigo de la tecla que presiono el usuario y la compara contra la lista del codigo ascii para ver si es una letra
Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) return true
  return false
}
//Se verifica si la letra elegida esta presente en la cadena elegida
Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) return false
  return true
}
//Cuando se adivina una letra
Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase()
  this.checkWinner()
}

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
  this.checkGameOver()
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

// Listener para el boton start
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