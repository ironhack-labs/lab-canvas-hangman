function HangmanCanvas(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = canvas.getContext('2d');
    this.secretWord = secretWord;
}


HangmanCanvas.prototype.createBoard = function() {


};

HangmanCanvas.prototype.drawLines = function() {

};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {

};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function(shape) {

};

HangmanCanvas.prototype.gameOver = function() {

};

HangmanCanvas.prototype.winner = function() {

};