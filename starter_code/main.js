var canvas;
var secretWord;
function init(){
  document.getElementById("start-game-button").onclick = function(){
    hangman = new Hangman();
    //console.log(hangman);
    secretWord = "palabra";
    canvas = new HangmanCanvas(secretWord);
  };

  document.onkeydown = function(e) {

  };
};
window.onload = function() {
  init();
};
