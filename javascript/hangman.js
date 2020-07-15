class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if(this.checkClickedLetters(letter)){
      this.errorsLeft --;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
   for (let i=0; i < this.secretWord.length; i++){
     if(!this.guessedLetters.includes(this.secretWord[i])){
        return false;
     }
   }
   return true;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord().toUpperCase();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord);

    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // Checking if the pressed key is a letter
  if (hangman.checkIfLetter(event.keyCode)){
    // extracting the corresponding character
    let letter = event.key.toUpperCase();
    //checking if the character is in the secret word
    if(hangman.secretWord.includes(letter)){
      //if yes, we add the letter to the good canvas part and to the list of guessed letters 
      hangman.addCorrectLetter(letter);
      // looping in the secret word in case the letter appears several times
      for (let i = 0 ; i < hangman.secretWord.length ; i++) {
        if(hangman.secretWord[i] === letter){
          hangmanCanvas.writeCorrectLetter(i);
        }    
      }
      // checking if the player wins the game
      if (hangman.checkWinner()){
        hangmanCanvas.winner();
      }
    } else {
      //if not, we add the letter to the good canvas part and to the list of letters and we draw the hangman
      if (hangman.checkClickedLetters(letter)){
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
      // checking if game over
      if(hangman.checkGameOver()){
        hangmanCanvas.gameOver();
      }
    }
  }
});
