class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = ''; 
    this.errorsLeft = 10;
  }

  pickWord() {
    
    let random = Math.floor(Math.random()*this.words.length);

    return this.secretWord = this.words[random];
  }

  checkIfLetter(keyCode) {
    // 65 a 90
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } 
    return false
  }


  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    }
    return true
    
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    for (let i = 0; i < this.letters.length; i++) {
      if (letter !== this.letters[i]) {
        this.letters.push(letter);
      }
    }
  }  

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    }
    return true
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1){
        return false
      }
    }
    return true
  }
 }

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
   
    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
   
    hangmanCanvas.createBoard()
    hangmanCanvas.drawLines()
    hangmanCanvas.writeCorrectLetter(1)
    hangmanCanvas.writeWrongLetter('z',10)
    hangmanCanvas.writeWrongLetter('f',9)
    hangmanCanvas.writeWrongLetter('f',8)
    hangmanCanvas.writeWrongLetter('f',7)
    hangmanCanvas.writeWrongLetter('f',6)
    hangmanCanvas.writeWrongLetter('f',5)
    hangmanCanvas.writeWrongLetter('f',4)
    hangmanCanvas.writeWrongLetter('f',3)
    hangmanCanvas.writeWrongLetter('f',2)
    hangmanCanvas.writeWrongLetter('f',1)
    hangmanCanvas.drawHangman(9)

    
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
