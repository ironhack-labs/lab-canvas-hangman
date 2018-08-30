$(document).ready(function(){

function HangmanCanvas(secretWord) {
  this.secretWord=secretWord;
  this.ctx = document.getElementById("hangman").getContext("2d");
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
};

var initX = 250;
var initY = 500;
var long = 50;
var space = 25;
var newSpace;

HangmanCanvas.prototype.drawLines = function() {
  this.ctx.beginPath();
  for (var i=0; i< this.secretWord.length; i++){
    newSpace = i*(long + space);
    this.ctx.moveTo(initX + newSpace, initY);
    this.ctx.lineTo(initX + newSpace + long, initY);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.font="50px Georgia";
  this.ctx.fillText(lastLetter,initX + i *(long + space),255);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function(shape) {
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
};

$("#start-game-button").on("click",function(){
  $("#start-game-button").remove();
  $(".game-logo").remove();
  var newGame= new Hangman();
  newGame.getWord();
  var testWord=newGame.secretWord;
  var board=new HangmanCanvas(testWord);
  board.drawLines();
});

var lastLetter="";
addEventListener("keypress",function(event){
  lastLetter=event.key;
});







});
