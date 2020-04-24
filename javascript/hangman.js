class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }
  pickWord(words) {
    //choose one random element from array words
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    //keyCode must be a letter and have a value from 65 to 90
    return event.keyCode >= 65 && event.keyCode <= 90 ? true : false;
    console.log(event.keyCode);
  }

  checkClickedLetters(letter) {
    //check if clicked letter is in the array of letters or guessedLetters
    return !this.letters.includes(letter) ? true : false;
  }

  addCorrectLetter(letter) {
    //add letter to guessedLetters
    this.guessedLetters += letter;
    //add winner check
  }

  addWrongLetter(letter) {
    //Subtract 1 from errors left. The letter will be added to letters automatically
    this.errorsLeft = this.errorsLeft - 1;
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    //check if guessedLetters is iqual to secretWord
    return this.secretWord.length === this.guessedLetters.length ? true : false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

function onAction(event) {
     //Add pressed letter to array
    hangman.letters.push(event.key);
    // If the letter is in the secret word, write it on canvas
    if (hangman.secretWord.includes(event.key)) {
      [...hangman.secretWord].forEach((letter, index) => {
        if (letter === event.key) {
          hangmanCanvas.writeCorrectLetter(index);
        }
      });
      //Add correct letter to array and check a winner
      hangman.addCorrectLetter(event.key);
      hangman.checkWinner() ? hangmanCanvas.winner() : false; 
      
    } else { // If the letter is wrong call addWrongLetter to subtract points
      hangman.addWrongLetter();
      // Write wrong letter on canvas
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      // Draw a hangman part
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      // Check game over
      hangman.checkGameOver() ? hangmanCanvas.gameOver() : false;
    }
}

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
    if(hangman.checkIfLetter(event.keyCode)){
      if(hangman.checkClickedLetters(event.key)){
        onAction(event);
      } else {
        return;
      }
    } else {
      return;
    }
  //check words and letters on console
    console.log("Secret word  -  " + hangman.secretWord + " , guessed letters : " + hangman.guessedLetters + "  all letters:  " + hangman.letters);
});