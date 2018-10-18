// YOU CAN USE THE ES6 SINTAX FOR THE CLASS CONSTRUCTION
class HangmanCanvas {
  constructor(secretWord) {
    var canvas = document.querySelector('canvas')
    var ctx = canvas.getContext('2d');
    var secretWord = secretWord
    var startA = 500
    var startB = startA + 30
    ctx.fillStyle = "rgb(45,45,45)"
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(0,0,canvas.width,canvas.height)

    for(var i = 0; i < secretWord.length; i++){
      ctx.strokeStyle = "white"
      ctx.beginPath()
      ctx.moveTo(startA,600)
      startA += 50
      ctx.lineTo(startB, 600)
      startB += 50
      ctx.stroke()
      ctx.closePath()
    }

    startA = 500
    startB = startA + 30

    document.onkeypress = function(letter) {
      letter.preventDefault
      console.log(letter.key)
      if(hangman.checkIfLetter(letter.key)) {
        if(hangman.checkClickedLetters(letter.key)) {
          var arr = hangman.getIndex(letter.key)
          for(var j = 0; j < arr.length; j++) {
            startA = 500
            startB = startA + 30
            ctx.fillStyle = "rgb(255,255,255)"
            ctx.font = '35px monospace'
            ctx.textAlign = 'center'
            ctx.fillText(letter.key.toUpperCase(), startA + 15 + 50*arr[j],595, 50)
          }
        }
      }
    }
  }
}

var hangmanCanvas = new HangmanCanvas(hangman.secretWord)


// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
