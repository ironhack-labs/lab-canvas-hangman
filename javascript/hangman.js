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

   return this.words[Math.floor(Math.random() * this.words.length)];
   
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.secretWord.includes(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    let index = [];
    this.secretWord.split('').map((a, i) => a == letter ? index.push(i): a);
    index.map(a => this.guessedLetters += a);
    
    if(hangman.checkWinner()){
      hangmanCanvas.winner();
      document.removeEventListener("keydown", keysTracker);
      this.updateBtnText("PLAY AGAIN");
    } else if(!this.letters.includes(letter)){
      this.letters.push(letter);
      hangmanCanvas.writeCorrectLetter(index);
    } else {
      console.log("Letter already typed");
    }
  }
  
  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    if(hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
      document.removeEventListener("keydown", keysTracker);
      this.updateBtnText("TRY AGAIN");
    } else if(!this.letters.includes(letter)){
      this.letters.push(letter);
      hangmanCanvas.writeWrongLetter(letter, this.errorsLeft); 
    } else {
      console.log("letter already typed!")
    }
  }
  

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft == 0;
  }

  checkWinner() {
    // ... your code goes here
    return this.secretWord.length == this.guessedLetters.length;
  }

  updateBtnText(str) {
    document.querySelector("#start-game-button").innerHTML = str;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', () => {

    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();


    hangmanCanvas = new HangmanCanvas(hangman.secretWord);


    // ... your code goes here
    hangmanCanvas.createBoard()
    document.addEventListener('keydown', keysTracker);
  });
}

const keysTracker = ({which, key}) => {
  // React to user pressing a key
  // ... your code goes here
  console.log(hangman.secretWord, " ", which);
  
  if(hangman.checkIfLetter(which)){
    hangman.checkClickedLetters(key) ?
    hangman.addWrongLetter(key):
    hangman.addCorrectLetter(key) 
  }
}

