var img = new Image();
img.src = "images/awesome.png";
var img2 = new Image();
img2.src = "images/gameover.png";
var errorsDraw = [
  {
    type: "triangle",
    x1: 50,
    y1: 500,
    x2: 125,
    y2: 475,
    x3: 200,
    y3: 500
  },
  {
    type: "line",
    x1: 125,
    y1: 475,
    x2: 125,
    y2: 50
  },
  {
    type: "line",
    x1: 125,
    y1: 50,
    x2: 300,
    y2: 50
  },
  {
    type: "line",
    x1: 300,
    y1: 50,
    x2: 300,
    y2: 100
  },
  {
    type: "circle",
    x1: 335,
    y1: 135,
    x2: 300,
    y2: 135,
    r: 35
  },
  {
    type: "line",
    x1: 300,
    y1: 170,
    x2: 300,
    y2: 320
  },
  {
    type: "line",
    x1: 300,
    y1: 320,
    x2: 250,
    y2: 380
  },
  {
    type: "line",
    x1: 300,
    y1: 320,
    x2: 350,
    y2: 380
  },
  {
    type: "line",
    x1: 300,
    y1: 200,
    x2: 265,
    y2: 250
  },
  {
    type: "line",
    x1: 300,
    y1: 200,
    x2: 335,
    y2: 250
  }
];

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function() {
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.moveTo(300 + 50 * i, 575);
    this.ctx.lineTo(340 + 50 * i, 575);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.font = "48px serif";
  this.ctx.fillText(this.secretWord[index], 305 + 50 * index, 555);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.font = "48px serif";
  this.ctx.fillText(letter, 800 + (11 - errorsLeft) * 30, 100);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  var dibujo = errorsDraw[shape];
  switch (dibujo.type) {
    case "triangle":
      this.ctx.beginPath();
      this.ctx.moveTo(dibujo.x1, dibujo.y1);
      this.ctx.lineTo(dibujo.x2, dibujo.y2);
      this.ctx.lineTo(dibujo.x3, dibujo.y3);
      this.ctx.lineTo(dibujo.x1, dibujo.y1);
      this.ctx.stroke();
      break;
    case "line":
      this.ctx.beginPath();
      this.ctx.moveTo(dibujo.x1, dibujo.y1);
      this.ctx.lineTo(dibujo.x2, dibujo.y2);
      this.ctx.stroke();
      break;
    case "circle":
      this.ctx.beginPath();
      var x = dibujo.x1-35; // x coordinate
      var y = dibujo.y1; // y coordinate
      var radius = dibujo.r; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI * 2; // End point on circle
      this.ctx.arc(x, y, radius, startAngle, endAngle, true);
      this.ctx.stroke()
  }
};

HangmanCanvas.prototype.gameOver = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
  //imgScale = 640 / 480;
  this.ctx.drawImage(img2, 250, 0);
};

HangmanCanvas.prototype.winner = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
  //imgScale = 640 / 480;
  this.ctx.drawImage(img, 170, 0);
};
