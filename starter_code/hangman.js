///////////////CANVAS////////////////////////
var canvas = document.getElementById('hangman')
var ctx = canvas.getContext('2d')

function HangmanCanvas (secretWord) {

    this.width = canvas.width
    this.height = canvas.height
    this.secretWord = secretWord

  this.createBoard = () => {
    ctx.clearRect(0, 0, this.width, this.height)
    ctx.beginPath()
    ctx.moveTo(300,450)
    ctx.lineTo(350,550)
    ctx.lineTo(250,550)
    ctx.lineTo(300,450)
    ctx.lineTo(300,50)
    ctx.lineTo(600,50)
    ctx.moveTo(450,550)
    ctx.lineTo(520,550)
    ctx.moveTo(550,550)
    ctx.lineTo(620,550)
    ctx.moveTo(650,550)
    ctx.lineTo(720,550)
    ctx.moveTo(750,550)
    ctx.lineTo(820,550)
    ctx.stroke()
    ctx.closePath()
  }
  
  this.drawLines = () => {
    var x = 450
    var y = 550
    for (var i = 0; i < this.secretWord.length; i++) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+40,y);
      ctx.closePath();
      ctx.stroke();
      x += 50;
    }
  }

  this.writeCorrectLetter = (index) => {
    ctx.font = "50px"
    ctx.fillText(this.secretWord[index], 455 + index*50, 550)
  }

  this.writeWrongLetter = (letter, errorsLeft) => {
    ctx.font = "50px sans-serif"
    var x = 500 - errorsLeft * 60
    var y = 50
    ctx.fillText(letter, x, y)
  }

  this.degreeToRadius = (degrees) => {
    return degrees*2*Math.PI/360
  }

  this.drawHangman = (strikes) => {
    if(strikes == 9) {
    ctx.beginPath()
    ctx.moveTo(100, 600)
    ctx.lineTo(300, 600)
    ctx.lineTo(200, 540)
    ctx.closePath()
    ctx.stroke()}
    else if (strikes == 8) {
    ctx.beginPath()
    ctx.moveTo(200, 540)
    ctx.lineTo(200, 100)
    ctx.stroke()}
    else if (strikes == 7) {
    ctx.beginPath()
    ctx.moveTo(200, 100)
    ctx.lineTo(400, 100)
    ctx.stroke()}
    else if(strikes == 6) {
    ctx.beginPath()
    ctx.moveTo(400, 100)
    ctx.lineTo(400, 150)
    ctx.stroke()}
    else if(strikes == 5) {
    ctx.beginPath()
    ctx.arc(400, 190, 40, this.degreeToRadius(0), this.degreeToRadius(360), true)
    ctx.stroke()}
    else if(strikes == 4) {
    ctx.beginPath()
    ctx.moveTo(400, 230)
    ctx.lineTo(400, 400)
    ctx.stroke()}
    else if(strikes == 3) {
    ctx.beginPath()
    ctx.moveTo(400, 400)
    ctx.lineTo(330, 470)
    ctx.stroke()}
    else if (strikes == 2) {
    ctx.beginPath()
    ctx.moveTo(400, 400)
    ctx.lineTo(470, 470)
    ctx.stroke()}
    else if(strikes == 1) {
    ctx.beginPath()
    ctx.moveTo(400, 300)
    ctx.lineTo(330, 250)
    ctx.stroke()}
    else if(strikes == 0) {
    ctx.beginPath()
    ctx.moveTo(400, 300)
    ctx.lineTo(470, 250)
    ctx.stroke()}
  }
}
////HANGMAN///////////////////////////////////

function Hangman () {
    this.words = ["ironhack"]
    this.secretWord = ""
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10
  
  this.getWord = () => {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  this.checkIfLetter = (num) => {
    return num >64 && num < 91
  }

  this.checkClickedLetters = (letter) => {
    return (this.letters.includes(letter))
  }
  
  this.checkGameOver = () => {
    return this.errorsLeft == 0
  }

  this.checkWinner = () => {
    var guessed = this.guessedLetter.split("").sort().join("")
    var original = this.secretWord.split("").sort().join("")
    return guessed === original
  }

  this.addCorrectLetter = (num) => {
    if(this.checkClickedLetters()){
      var letter = this.secretWord.split("")[num]
      this.guessedLetter += letter
      this.checkWinner()
    }
  }

  this.addWrongLetter = () => {
    this.errorsLeft -= 1
    this.checkGameOver()
  }
}

var hangman
var canvas

var botonStart = document.getElementById("start-game-button")
var parentBoton = document.getElementById("parent-boton")
var logo = document.getElementById("logo")

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman()
  var word = hangman.getWord()
  hangman.secretWord = word
  canvas = new HangmanCanvas(word)
  canvas.drawLines()
  parentBoton.removeChild(botonStart)
  logo.style.width = "130px"  
};


document.onkeydown = function (e) {
  console.log("event", e.keyCode, e.key)
  if(hangman.checkIfLetter(e.keyCode)) {
    if(hangman.secretWord.includes(e.key)) {
      var index = hangman.secretWord.indexOf(e.key)
      hangman.addCorrectLetter(index)
      canvas.writeCorrectLetter(index)
      if(hangman.checkWinner()){alert ("Ganastes! :D")}
    }
    else{
      hangman.addWrongLetter()
      canvas.writeWrongLetter(e.key, hangman.errorsLeft)
      canvas.drawHangman(hangman.errorsLeft)
      if(hangman.checkGameOver()) {alert("Perdistes :(")}
    }
  }
}