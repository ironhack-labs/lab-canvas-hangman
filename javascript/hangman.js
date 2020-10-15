class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = ""
    this.errorsLeft = 10;
    this.wrongLetters = ""
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    let letter = String.fromCharCode(keyCode)
    return (/[A-Z]/).test(letter);
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) === -1
  }

  addCorrectLetter(letter) {
     this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.wrongLetters += letter;
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.secretWord.length===this.guessedLetters.length && this.errorsLeft > 0;
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
    hangmanCanvas.createBoard();
    console.log('hola')
  });
}

document.addEventListener('keydown', event => {
  let selectedLetter = event.key.toUpperCase()
  //console.log(hangman.checkGameOver());
  console.log(hangman.checkWinner());
  console.log(hangman.secretWord)
  console.log(hangman.guessedLetters)


  if(hangman.checkGameOver()){
    hangmanCanvas.gameOver();
    return;
  } 
  
  if (hangman.checkWinner()){
    hangmanCanvas.winner();
    return;
  }

  
  if (hangman.checkIfLetter(event.keyCode)){

    if(hangman.checkClickedLetters(selectedLetter)){
      hangman.letters.push(selectedLetter);
      
      // evaluate
      if(hangman.secretWord.toUpperCase().indexOf(selectedLetter) !== -1){
        hangman.addCorrectLetter(selectedLetter);
        hangmanCanvas.writeCorrectLetter(selectedLetter);

        
      } else {
        hangman.addWrongLetter(selectedLetter);
        hangmanCanvas.writeWrongLetter(hangman.wrongLetters);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
      
    } // else  alert(`letter already selected`);
  
  } // else alert('you need to input a letter from a-z')  
});
