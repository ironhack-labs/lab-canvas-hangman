
class HangmanCanvas {
  constructor(words) {
    this.words= words
    this.secretWord=this.pickWord()
    this.letter= [];
    this.guessedLetters=''
    this.errorsLeft=10;

  }

  pickWord(){

    return this.words[Math.floor(Math.random()*this.world.length)]
  }

  checkIfLetter(keyCode){

    if (keyCode < 65 || keyCode>90) {
      return false
    }
    else {
      return true
    }
  }

  checkClickedLetter(Letter){

    if (this.guessedLetters.includes(letter)){
      return false
    }
    else {
      return true
    }
  }
  
  addCorrectLetter(Letter){
    return this.guessedLetters += letter
  }

  addWrongLetter(){

    return this.errorsLeft -= 1
  }

  checkGameOver(){

    if (this.errorsLeft >0) {
      return false
    }
    else {
      return true
    }
  }

  checkWinner(){

for (let i=0; i<this.secretWord.length; i++){
  if (this.guessedLetters.indexOf(this.secretWord[1]===-1)){
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