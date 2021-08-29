class Hangman {
  constructor(words) {
    // ... your code goes here

    this.words = words;
    this.secretWord;
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    let randomIndex = Math.floor(Math.random()*this.words.length)
    this.secretWord = this.words[randomIndex]
    return this.secretWord
    
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90){
      return true
    }

  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter) || !this.guessedLetters.includes(letters))
    {
      return true
      }
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    if(this.secretWord.includes(letter) && this.checkClickedLetters(letter)){
      this.guessedLetters += letter
    }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if(!this.guessedLetters.includes(letter) && this.checkClickedLetters(letter)){
      this.letters.push(letter)
      this.errorsLeft -= 1
    }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft === 0){
      console.log("It's Over Baby")
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    if(this.secretWord.includes(this.guessedLetters)){
      return true
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

  
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.words)
    console.log(hangman.secretWord)
    hangmanCanvas.createBoard()

    // ... your code goes here
  });
}

document.addEventListener('keyup', (e) => {
  if(hangman.checkIfLetter(e.keyCode)){
    let letter = String.fromCharCode(e.keyCode).toLowerCase()

    hangman.checkClickedLetters(letter)
    hangman.addCorrectLetter(letter)
    
    
    hangman.addWrongLetter(letter)
    hangman.checkGameOver()
    hangmanCanvas.createBoard()
    
    for(elem of hangman.guessedLetters){
    hangmanCanvas.getAndWriteIndex(elem)}
    hangmanCanvas.drawHangman(hangman.errorsLeft)

    hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
    hangmanCanvas.gameOver(hangman.errorsLeft)

  
  }

  console.log(hangman.letters)
  console.log(hangman.guessedLetters)
  console.log(hangman.errorsLeft)
  // React to user pressing a key
  // ... your code goes here
});
