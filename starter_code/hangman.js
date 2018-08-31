var hangman;

 function Hangman() {
   this.palabras = ["Dinning", "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard",
    "Lounge",
    "Ballroom",  
    ];

 }

Hangman.prototype.getWord = function () {
 var palabraRandom = hangman[Math.floor(Math.random()* hangman.length)];
 };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
