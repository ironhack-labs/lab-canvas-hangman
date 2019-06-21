let words = ['love', 'concrete', 'passion', 'fruit', 'mango', 'movie', 'tropical', 
              'beach', 'summer', 'alphabet', 'farmer', 'train', 'driver', 'diver'];

document.getElementById('start-game-button').onclick = function(){

    let hangman = new Hangman();
    let randomWord = hangman.getWord(words);

    let hangmanCanvas = new HangmanCanvas(randomWord);
    hangmanCanvas.createBoard();

    document.onkeydown = function(e){
        gameLoop(e, hangman, hangmanCanvas);
    };

};

function gameLoop(e, hangman, hangmanCanvas){
    //CHECKS AND UPDATES LETTER
    let letterEntered = hangman.getLetter(e.key, e.keyCode);
  
    if(letterEntered == true){
      hangmanCanvas.writeCorrectLetter(hangman.correctLetters[hangman.correctLetters.length - 1]);
    }else{
      hangmanCanvas.writeWrongLetter(hangman.guessedLetters[hangman.guessedLetters.length - 1], hangman.errors);
      hangmanCanvas.drawHangman(hangman.errors);
    }
  
    //CHECKS AND UPDATES GAME WON OR LOST
    let gameOver = hangman.checkGameOver();
    let gameWon = hangman.checkWinner();
  
    if(gameOver === true){
      hangmanCanvas.gameOver();
      return;
    }
    
    if(gameWon === true){
      hangmanCanvas.winner();
      return;
    }
  }