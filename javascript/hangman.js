class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()* this.words.length)];
  }

  checkIfLetter(keyCode) {
   return keyCode > 64 && keyCode < 91;
  }

  checkClickedLetters(letter) {
   return !this.letters.includes(letter); 
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    //checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    if (!this.letters.includes(letter)){
      this.letters.push(letter);
    }
  }

  checkGameOver() {
   return this.errorsLeft === 0 
  }
  

  checkWinner() {
    if(this.guessedLetters.split("").sort().join("") === this.secretWord.split("").sort().join("")){
      return true;
    }return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.drawLines()
  });
}

document.addEventListener('keydown', event => {
   console.log(hangman.secretWord)
  
  const letter = String.fromCharCode(event.keyCode).toLowerCase();
  const secretArr = hangman.secretWord.split('');
  if(secretArr.includes(letter)){
    console.log(hangman.secretWord);
    for (let i =0 ; i< secretArr.length; i++){
      if (letter === secretArr[i]){
        hangmanCanvas.writeCorrectLetter(i, letter);
      }
    }
  }
});
