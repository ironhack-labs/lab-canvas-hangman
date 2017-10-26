$('document').ready(function() {
  document.getElementById("start-game-button").onclick = function() {
    var hangman = new Hangman();
    var canvas = new HangmanCanvas(hangman._getWord());

    document.onkeydown = function( e ) {
      // clear and draw all again:
      // _drawLines --> Draw under LINES
      canvas._createBoard(); // Clean
      canvas._drawLines(); // and redraw
      canvas._writeCorrectLetter(2);
      if (hangman._checkIfLetter( e.keyCode )) {

        if (hangman._checkClickedLetters( e.keyCode )) {
          hangman.letters.push((e.key).toUpperCase());
          console.log(e);
          console.log(hangman.letters);
          console.log( "Letra nueva" );

        } else {

          alert( "Key pressed before" );
        };
      } else {
        console.log('not valid');
      };
      if ( hangman._checkGameOver ){
        canvas._gameOver();
      } else if ( hangman._checkWinner ){
        canvas._winner();
      }
    };
  };
});
