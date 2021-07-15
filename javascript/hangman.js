class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[Math.floor(Math.random()*words.length)]
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    if (keyCode>=65 && keyCode<=90){
      return true
    }
    else{
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)){
      return false
    }
    else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    if (this.letters.includes(letter)==false){
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft>0){
      return false
    }
    else {
      return true
    }
  }

  checkWinner() {
    //let secretWordInChunks = this.secretWord.match(/.{1,1}/g)
    //this.letters.indexOf(this.secretWord)==0
    //let guessedLettersCombi = this.letters.join('')
    for (let i=0;i<this.secretWord.length;i++){
      if (this.guessedLetters.indexOf(this.secretWord[i])===-1){
      return false
    }
    else{
      return true
    }
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
});
