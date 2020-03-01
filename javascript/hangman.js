class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord
  } 
  

  checkIfLetter(keyCode) {
    if(keyCode <= 90 && keyCode >= 65) {
    return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)){
      return true
    } else {
      return false
    }
  }
  

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }
 
  addWrongLetter(letter) {
    this.letters.push(letter)
    this.errorsLeft--
    }  


  checkGameOver() {
    if (this.errorsLeft > 0){
    return false
    } else{
      return true
    }
  }

  checkWinner() {
    let guessedLettersArr = this.guessedLetters.split("").sort().join()
    let secretWordArr = this.secretWord.split("").sort().join()
    if(guessedLettersArr === secretWordArr){
      return true
    } else {
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
  });
}


document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.secretWord.includes(event.key)) {
    // add it to correct letters
    let idx = hangman.secretWord.indexOf(event.key)
    console.log(idx)
    hangman.addCorrectLetter(event.key)
    console.log(hangman)
    hangmanCanvas.writeCorrectLetter(idx)
  } else {
    // add it wrong letters
    hangman.addWrongLetter(event.key)
    console.log(hangman)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }
});