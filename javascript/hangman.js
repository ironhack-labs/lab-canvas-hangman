class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.unique = ''
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;


  }
  uniquify() {
    let splittedWord = this.secretWord.split('');
    let uniqueLetters = [];
    splittedWord.filter(element => {
      if (uniqueLetters.includes(element)) { return }
      else {
        uniqueLetters.push(element)
        this.unique += element
      }
    }
    )

  }

  pickWord() {
    let random = this.words[Math.floor(Math.random() * this.words.length)]
    this.secretWord = random;
    return random;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    }
    this.unique.includes(letter) ? this.addCorrectLetter(letter) : this.addWrongLetter(letter);
    this.letters.push(letter);
    return true
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    hangmanCanvas.writeCorrectLetter(letter)
    
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    hangmanCanvas.drawLines(hangmanCanvas.draws);
    hangmanCanvas.writeWrongLetter(letter)
  }

  checkGameOver() {
    if(this.errorsLeft<1){
      setTimeout(()=>location.reload(),3000); 
      hangmanCanvas.gameOver();
    }
  }

  checkWinner() {
  if (this.guessedLetters.length===this.unique.length) {
    setTimeout(()=>location.reload(),3000);
    hangmanCanvas.winner() }
    
  }
}


let hangman;
let hangmanCanvas;
const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.pickWord();
    hangman.uniquify();
    console.log(hangman.secretWord);
    
   hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    hangman.checkClickedLetters(event.key)
    

  }
  setTimeout(()=>hangman.checkWinner(),500);
  setTimeout(()=>hangman.checkGameOver(),500);
  
}
)


