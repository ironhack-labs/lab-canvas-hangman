window.onload = function () {

  var calculatePriceButton = document.getElementById('start-game-button');
  calculatePriceButton.onclick =  console.log("hola");

  var secretWord = new Hangman();
  var canvas = new HangmanCanvas(secretWord.secretWord);

  canvas.drawLines();


};