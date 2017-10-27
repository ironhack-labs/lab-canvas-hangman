var hangman;
var WORDS = ['javascript', 'jasmine', 'framework', 'childnode', 'siblings', 'angular', 'keepitstupidsimple', 'cssisawesome', 'dontrepeatyourself', 'youaintgonnaneedit'];



function Hangman() {
  this.words = WORDS;
  this.secretWord = "";
  this.letters = this.letters;
  this.guessedLetter = this.guessedLetter;
  this.errorsLeft = 10;

}

Hangman.prototype._getWord = function() {
  var randomWord = Math.floor(Math.random() * words.length);
  this.secretWord = this.words[randomWord];
  return this.secretWord;

};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return /[a-zA-Z]/.test(keyCode);
};
Hangman.prototype._checkClickedLetters = function(key) {
  var keyPressed = key;

};

Hangman.prototype._addCorrectLetter = function(i) {

};

Hangman.prototype._addWrongLetter = function(letter) {

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};


document.onkeydown = function(e) {
  console.log(hangman._checkIfLetter(e.key));
  console.log(e);

  hangman._checkIfLetter(e.key);
};

var storedLetters = [];

/*
var key = {
  q: 81,
  w: 87,
  e: 69,
  r: 82,
  t: 84,
  y: 89,
  u: 85,
  i: 73,
  o: 70,
  p: 80,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  j: 74,
  k: 75,
  l: 75,
  z: 90,
  x: 88,
  c: 67,
  v: 86,
  b: 66,
  n: 78,
  m: 77*/
