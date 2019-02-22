const canvas = document.querySelector(".hangman")
canvas.width = (window.innerWidth) / 2
canvas.height = (window.innerHeight)
const c = canvas.getContext('2d')

function Game() {
  this.counter = 0
  this.guessed = []
  this.bodyStorage = [
    [500, 350],
    [550, 450],
    [500, 350],
    [450, 450],
    [500, 350],
    [500, 290],
    [450, 350],
    [500, 290],
    [550, 350],
    [500, 290],
    [500, 260]
  ]
  this.bodyCoords = []
  this.secret;
  this.body = function () {
    c.beginPath();
    c.moveTo(500, 260)

    for (i of this.bodyCoords) {
      c.lineTo(...i)
    }

    c.stroke()
  }

  this.head = function () {
    c.beginPath();
    c.arc(500, 210, 50, 0, 2 * Math.PI)
    c.stroke()
  }

  this.stone = function () {
    c.beginPath();
    c.arc(200, 570, 70, Math.PI,0)
    c.stroke()
  }

  this.rack = function(){
    c.beginPath();
    c.moveTo(200, 500)
    // c.moveTo(500, 160)

    for (i of this.rackCoords) {
      c.lineTo(...i)
    }

    c.stroke()
  }

  this.face = function(f){
    if(f>=1){
      c.beginPath();
    c.arc(470, 220, 3, 0,2*Math.PI)
    c.stroke()
    }

    if(f>=2){
      c.beginPath();
      c.arc(530, 220, 3, 0,2*Math.PI)
      c.stroke()
    }


    if(f>=3){
      c.beginPath()
      c.moveTo(520,225)
      c.lineTo(480, 225)
      c.stroke()
    }

  }

  this.rackCoords = []
  this.rackStorage = [
    [200,100],
    [200,150],
    [250,100],
    [200,150],
    [200,100],
    [500, 100],
    [500,160]
  ]

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  let game = new Game()
  
  function execute(x){
    if(x>=1){
      game.stone()
    }
    if(x>=2){
      game.rackCoords.push(game.rackStorage[0])
      game.rack()
    }
    if(x>=3){
      game.rackCoords.push(game.rackStorage[1])
      game.rackCoords.push(game.rackStorage[2])
      game.rackCoords.push(game.rackStorage[3])
      game.rackCoords.push(game.rackStorage[4])
      game.rack()
    }
    if(x>=4){
      game.rackCoords.push(game.rackStorage[5])
      game.rack()
    }
    if(x>=5){
      game.rackCoords.push(game.rackStorage[6])
      game.rack()
    }
    if(x>=6){
      game.head()
    }
    if(x>=7){
      game.bodyCoords.push(game.bodyStorage[0])
      game.body()
    }
    if(x>=8){
      game.bodyCoords.push(game.bodyStorage[1])
      game.body()
    }
    if(x>=9){
      game.bodyCoords.push(game.bodyStorage[2])
      game.bodyCoords.push(game.bodyStorage[3])
      game.bodyCoords.push(game.bodyStorage[4])
      game.body()
    }
    if(x>=10){
      game.bodyCoords.push(game.bodyStorage[5])
      game.bodyCoords.push(game.bodyStorage[6])
      game.bodyCoords.push(game.bodyStorage[7])
      game.body()
    }
    if(x>=11){
      game.bodyCoords.push(game.bodyStorage[8])
      game.bodyCoords.push(game.bodyStorage[9])
      game.body()
    }
    if(x>=12){
      game.face(x-11)
    }

};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let submit = document.querySelector(".submit")
  submit.addEventListener("click",function(){
    let letterInput = document.querySelector(".letter").value
    hangmanGame(letterInput)
  })

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let newGame = document.querySelector(".newGame")
  newGame.addEventListener("click",function(){
    game.secret = document.querySelector(".secret").value
    console.log("aaaaa")
    hangmanGame()
    game.counter = 0;  
    game.guessed = []
    game.bodyCoords = []
    game.secret;
  })
  function hangmanGame(x){
    let currentLetter = x
    // let guessed = []
    let word = document.querySelector(".word")
    let secret = game.secret
    let secretarr = secret.split("")

HangmanCanvas.prototype.drawHangman = function (shape) {
  if(secretarr.includes(currentLetter)){
    game.guessed.push(currentLetter)
  }else{
    game.counter++
    execute(game.counter)
  }
HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {
  let res = secretarr.map(
    function(word){
      if(game.guessed.includes(word)){
        return word
      }else{
        return "_"
      }
    }
  )
  console.log(res)
  console.log(secretarr)
  if(secretarr.join("") == res.join("")){
    alert("you won")
  }
  word.textContent = res.join(" ")
}

};
