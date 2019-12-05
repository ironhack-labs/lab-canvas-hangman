let hangman;
let canvas;

function initGame() {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord().toUpperCase();
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines(hangman.secretWord.length);
}

document.getElementById("start-game-button").onclick = () => {
  initGame();
};

document.onkeydown = e => {
  if (hangman.gameStatus) {
    //If the game is finished -> restart the game.
    initGame();
  } else {
    let letterPressed = e.key.toUpperCase();
    if (
      hangman.checkIfLetter(e.keyCode) &&
      hangman.checkClickedLetters(letterPressed)
    ) {
      let gameStatus;

      if (hangman.secretWord.includes(letterPressed)) {
        let letterPosition = hangman.secretWord.indexOf(letterPressed);
        gameStatus = hangman.addCorrectLetter(letterPosition);
        canvas.writeCorrectLetter(letterPosition);

        if (gameStatus) {
          canvas.winner();
          hangman.gameStatus = gameStatus;
        }
      } else {
        canvas.writeWrongLetter(
          letterPressed.toUpperCase(),
          hangman.errorsLeft
        );

        gameStatus = hangman.addWrongLetter(letterPressed);

        if (gameStatus) {
          canvas.gameOver();
          hangman.gameStatus = gameStatus;
        }
      }
    }
  }
};
