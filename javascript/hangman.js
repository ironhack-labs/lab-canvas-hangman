class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }
  pickWord() {
    // ... your code goes here
    const randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return randomWord;
  }
  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <=90 ){
      return true
    } else{
      return false
    }
  }
  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)){
      return false
    } else{
      return true
    }
  }
  addCorrectLetter(letter) {
    // ... your code goes here
    return this.guessedLetters += letter
  }
  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    if (!this.letters.includes(letter)){
      this.letters.push(letter)
    }
    return
  }
  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
      return false
    } else {
      return true
    }
  }
  checkWinner() {
    // ... your code goes here
    if(this.guessedLetters.length === this.secretWord.length){
      for (let i=0; i < this.guessedLetters.length; i++){
        if (!this.secretWord.includes(this.guessedLetters[i])){
          return false
        }
      }
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
    // HINT (uncomment when start working on the canvas portion of the lab)
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












