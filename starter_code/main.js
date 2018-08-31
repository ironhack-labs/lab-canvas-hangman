$(document).ready(function(){

    $('#start-game-button').click(function () {
      hangman = new Hangman();
      hangman.getWord()
      console.log(hangman.secretWord)
      hangmanCtx = new HangmanCanvas(hangman.secretWord);
      hangmanCtx.createBoard();
      hangmanCtx.drawLines();
    });
  

    addEventListener("keypress",function(e){
        console.log(e.key);
        if (hangman.checkIfLetter(e.key)) {
            console.log(hangman.addCorrectLetter(hangman.checkClickedLetters(e)))
        }
    });
  
  });
  