addCorrectLetter(letter) {
  // ... your code goes here

  return this.guessedLetters += letter
}

@@ -80,14 +81,45 @@ if (startGameButton) {
  hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

  // HINT (uncomment when start working on the canvas portion of the lab)
  // hangman.secretWord = hangman.pickWord();
  // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

  hangman.secretWord = hangman.pickWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  
  // ... your code goes here
});
}

document.addEventListener('keydown', event => {
// React to user pressing a key
// ... your code goes here

let letter = event.key

if(hangman.checkIfLetter(letter.toUpperCase().charCodeAt(0))){
  if (hangman.secretWord.includes(letter)){
    if(!hangman.guessedLetters.includes(letter)){

      for (let i = 0; i <hangman.secretWord.length; i++){
        if (letter === hangman.secretWord[i]){
          hangman.addCorrectLetter(letter)
        }
      }
      hangmanCanvas.writeCorrectLetter(letter)
      console.log(hangman.guessedLetters)
    }
    if(hangman.checkWinner()) {
      hangmanCanvas.winner()
    }
  } else{
    if (hangman.checkClickedLetters(letter)){
      hangman.addWrongLetter(letter)
      hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)

    }
    if(hangman.checkGameOver()){
      hangmanCanvas.gameOver()
    }
  }
}

});