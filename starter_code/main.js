window.onload = function() {
  document.getElementById("start-game-button").onclick = function(){
    var hangman = new Hangman();
  };
  document.onkeydown = function(e) {
    hangman._checkIfLetter(e.keyCode);
  };
};
