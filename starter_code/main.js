let hangmanCanvas = new HangmanCanvas();
let hangman = new Hangman();
$(document).ready(function(){

  document.getElementById('start-game-button').onclick = function() {

    let img = document.getElementsByClassName('game-logo');
    img[0].style.display = "none";
   
    let startButton = document.getElementById('start-game-button');
    startButton.style.display = "none";
    

    hangmanCanvas.drawHangman();
  };

  $(document).keydown(function(e){
    if(hangman.checkIfLetter(e)){
      hangman.letters.push(e.key);
      hangmanCanvas.writeLetters(e.key);
    }

  });
});