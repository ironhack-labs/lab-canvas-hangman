class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = "";
  }

  pickWord = () => {
    let random = Math.floor(Math.random()*this.words.length)
    return this.words[random]
  }

  checkIfLetter = (keyCode) => {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters = (letter) => {
    return !this.letters.includes(letter) 
  }

  addCorrectLetter = (letter) => {
    return this.guessedLetters += letter
  }

  addWrongLetter = (letter) => {
    if (letter) {
      this.errorsLeft --
    }
  }

  checkGameOver = () => {

    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner = () => {
    // ... your code goes here
    for (let i=0; i < this.secretWord.length; i++) {
      return this.guessedLetters.includes(this.secretWord[i]);
    }
  }  
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

     //HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);
     hangmanCanvas.createBoard();
     //hangmanCanvas.drawLines();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  if(hangman.checkIfLetter(event.keyCode)){
    if(hangman.checkClickedLetters(event.key)){
      if(hangman.secretWord.includes(event.key)){
        hangman.addCorrectLetter(event.key);

        hangman.secretWord.split('').forEach((letter, idx) => {
          if(letter === event.key){
            hangmanCanvas.writeCorrectLetter(idx);
          }
        });

        if(hangman.checkWinner()){
          hangmanCanvas.winner();
        }

      } else {
        hangman.addWrongLetter(event.key);
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);

        if(hangman.checkGameOver()){
          hangmanCanvas.gameOver();
        }
      }
    }
  }
});
