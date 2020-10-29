class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[0]
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }
  pickWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[randomIndex];
    return randomWord;
  }
  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    }
    return false;
  } 
  checkClickedLetters(letter) {
    const arrOfGuessedLetters = this.guessedLetters.split("")
      if (arrOfGuessedLetters.includes(letter)) {
        return false
      } 
        return true
  }
  addCorrectLetter(letter) {
    this.letters.push(letter)
  }
  addWrongLetter(letter) {
    this.guessedLetters += letter;
    this.errorsLeft--;
  }

  checkGameOver() {
  if(this.errorsLeft > 0){
    return false
  }else{
    return true
  }
  }

  checkWinner() {
    if (this.secretWord.length===this.letters.length){
      return true
    } else{
      return false
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
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode)){
    hangmanCanvas.writeCorrectLetter(event.key)
    hangmanCanvas.writeWrongLetter(event.key)
  }
  hangmanCanvas.drawHangman(hangman.errorsLeft)
  
    hangmanCanvas.winner()
    hangmanCanvas.gameOver()
  
  
});
