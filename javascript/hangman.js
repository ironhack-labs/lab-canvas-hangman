class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    //this.secretWord.split('');
    // this.guessedLetters = [];
    //why does this have to be a string?
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  // Expects: Array of possible word options
  // Returns: A random word from that array
  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  // Expects: 'keycode' of Letter that's been guessed [[keyocde.info]]
  // Returns: BOOL of validity [# btwn 65-90]
  checkIfLetter(keyCode) {
    return (keyCode < 91 && keyCode > 64 ? true : false);
  }

  // Expects: guessed letter
  // Returns: BOOL of already guessed status
  // false if not guessed, true if guessed
  checkClickedLetters(letter) {
    // return (this.guessedLetters.includes(letter));
    return (!this.letters.includes(letter));
  }

  // Expects: A guessed letter that is present in secret
  // Returns:  nothing, adds letter to the guessedLetters STRING
  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.letters.push(letter);
    // this.letters.push(letter);
  }

  // Expects: A guessed letter that is NOT present in secret
  // Returns: Nothing
  addWrongLetter(letter) {
    if(!this.checkGameOver()){
    
      this.letters.push(letter);
      this.errorsLeft--;
    }else{    
      return false;
    }
    // console.log(`${this.letters} should be updated?!`);
    // return (checkGameOver() ? 'Game Over' : this.letters.push(letter) )
  }

  // Expects: Nothing
  // Returns: FALSE if errors remain (game continues)
  //          TRUE if no errors remain (game ends)
  checkGameOver() {
    // ... your code goes here
    return (!this.errorsLeft)
  }

  // 
  // 
  checkWinner() {
    // ... your code goes here
    // let secretCompare = [...new Set(this.secretWord.split(''))].sort().join('');
    // let guessCompare = this.guessedLetters.split('').sort().join('');
    if( [...new Set(this.secretWord.split(''))].sort().join('') === this.guessedLetters.split('').sort().join('')){
        return true;
    }else{
      return false;
    }
  }
}

let hangman;
let gameStart = false;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    gameStart = true;
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  // should check if the game has started, tbh.
  // console.log(event);

  if(gameStart){
    if(hangman.checkIfLetter(event.keyCode)){
      // console.log('Valid Letter');
      if(hangman.checkClickedLetters(event.key)){
        // console.log(event.key+' has not been guessed...');
        let letterGuess = hangman.secretWord.indexOf(event.key)        
        if(letterGuess >= 0){
            // console.log(event.key+' is in the word('+hangman.secretWord+') at '+letterGuess);            
            hangman.addCorrectLetter(event.key);
            hangmanCanvas.writeCorrectLetter(letterGuess);
              if(hangman.checkWinner()){
                hangmanCanvas.winner();
              }
              // if(hangman.checkGameOver()){
              //   hangmanCanvas.gameOver();
              // }
        }else{
            // console.log(event.key+' is not in the world :(');
            hangman.addWrongLetter(event.key);
            hangmanCanvas.drawHangman(hangman.errorsLeft);
            hangmanCanvas.writeWrongLetter(event.key,hangman.errorsLeft);
            if(hangman.checkGameOver()){
              hangmanCanvas.gameOver();
            }
        }
      }else{
        // alert('Letter already guessed!');
        console.log('Already Guessed');
      }
    }
  }
  // console.log(event.keyCode);

});

// document.getElementById('cheat').addEventListener('click', event => hangman.errorsLeft = 100);
