var hangman;

function Hangman() {
  this.words = ["HOLA","DOM","MON","CARLOS","IRON","HACK"]
  this.secretWord = ""
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 5
}

Hangman.prototype.getWord = function () {
  var word = this.words[Math.floor(Math.random() * this.words.length)]
  return word
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(64 < keyCode && keyCode < 90)
    return true
  else 
    return false
};

Hangman.prototype.checkClickedLetters = function (key) {
  var clicked = this.letters.indexOf(key)
    if(clicked === -1)
      return true
    else 
      return false
};

Hangman.prototype.addLetter = function (key) {
  if(this.checkClickedLetters(key)) {
    this.letters.push(key)
  }
}

Hangman.prototype.addCorrectLetter = function (i) {
  var letter = this.secretWord.substr(i,1).toUpperCase()
  console.log(letter)
  this.guessedLetter += letter
  console.log("guessed: " + this.guessedLetter)
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
  console.log("Errores: " + this.errorsLeft)
};

Hangman.prototype.checkLetterIndex = function (letter) {
  var i = this.secretWord.indexOf(letter)
  if(i === -1){
    this.addWrongLetter(letter)
    return i
  } else {
    this.addCorrectLetter(i)
    return i
  }
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0)
    return true
  else 
    return false
};

Hangman.prototype.checkWinner = function () {
  if(this.secretWord.length === this.guessedLetter.length)
    return true
  else
    return false
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
  hangmanCanvas.drawHanger()
  hangmanCanvas.drawContainer()
};


document.onkeydown = function (e) {
  var keyCode = e.keyCode
  var key = String.fromCharCode(keyCode)
  var indexLetter = -1
  if(hangman.checkIfLetter(keyCode)){
    // console.log("letra")
    if(!hangman.checkClickedLetters(key)){
      console.log("escribe otra, esa ya fue")
    } else {
      hangman.addLetter(key)
      indexLetter = hangman.checkLetterIndex(key)
      if(indexLetter > -1)
      {
        //Escribir letra -> Implementar
        hangmanCanvas.writeCorrectLetter(indexLetter)
        //Checar si ya ganó
        if(hangman.checkWinner())
        {
          alert("Ganaste!")
        }
      }
      else {
        hangmanCanvas.drawHangman(hangman.errorsLeft)
        hangmanCanvas.writeWrongLetter(key)
        if(hangman.checkGameOver())
        {
          alert("Perdiste")
        }
      }
      console.log("Ahí la llevas ,escribe otra letra")
    }
  } 
  else {
    console.log("escribe una letra")
  }
};
