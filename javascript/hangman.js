class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  //picks random word and stores it in this.words.
  pickWord() {
    // ... your code goes
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  //checks that the keydown event is a letter
  checkIfLetter(keyCode) {
    if (keyCode < 91 && keyCode > 64) {
      return true
    } else {
      return false;
    }
  }

  //returns true if letter has been pressed false if new letter
  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false
    } else {
        //push pressed letters to letters array
      this.letters.push(letter)
      return true
    }
  }


  //add passed letter to guessedLetters string.
  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    if (!this.letters.includes(letter)){
      this.letters.push(letter);
    } 
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }


  checkWinner() {
    // ... your code goes here
if(this.secretWord.length === this.guessedLetters.length){
  return true;
  }
  return false;
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
    hangmanCanvas.createBoard() 
  });
}



document.addEventListener('keydown', event => {
  // React to user pressing a key

  //check if letter
  if (hangman.checkIfLetter(event.keyCode)){
  
  //check if letter has already been clicked
  if(hangman.checkClickedLetters(event.key)) {

    //adds guessed letters to guessedLetters string
    if(hangman.secretWord.includes(event.key)){
      hangman.addCorrectLetter(event.key)
    
      //write correct letter on canvas
      hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key));

    } else {
        hangman.addWrongLetter()
        //draw hangman for incorrect letters
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        

        }
      }
    }
    //check winner
    if (hangman.checkWinner()) {
      console.log("winner");
      hangmanCanvas.winner();
      //check gameOver
    } else if (hangman.checkGameOver()) {
      console.log('loser')
      hangmanCanvas.gameOver();
    }
  console.log(`Letters array ${hangman.letters}`)
  console.log(`Guessed Letters ${hangman.guessedLetters}`)
  console.log(typeof hangman.secretWord)
});