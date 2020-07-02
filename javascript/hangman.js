class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord().toLowerCase();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10
  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]    // return random word from words array
   }

  checkIfLetter(keyCode) {                                      
    if (keyCode >= 65 && keyCode <= 90) {         // if keyCode between 65(=a) and 90(=z), return true
      return true
    } else {
      return false
    }
  }
  checkClickedLetters(letter) {               // if letter present in letters array,
    if (this.letters.includes(letter)) {
      return false                            // return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;           // add letter to guessedLetters string and letters array
    this.letters.push(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;                     // subtract 1 from errorsLeft
    if(!this.letters.includes(letter)){       // check if letter present in letters and if not, push it in
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {               // if errorsLeft is smaller than 0, you lose the game
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++){           
      if(this.guessedLetters.includes(this.secretWord[i])){       // if all letters in secretWord are present in guessedLetters, you've won!
        continue                                                  // use for loop to check each letter in secretWord, if its in guessedLetters, continue
      } else {
        return false                                              // if any letter is not in guessedLetters, return false and exit loop
      }
    }
    return true                                                   // if no false is returned, move to end of function block and return true
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
     hangmanCanvas.createBoard()                            // createBoard() on each 'start game'-press
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode)){                   // check if key is letter
    let alpha = 'abcdefghijklmnopqrstuvwxyz';        
    let letter = alpha[event.keyCode - 65];                   // a=65, z=90. alphabet[keycode-65] = letter: (alphabet[66 - 65 = 1] = 'b')

  
    if(hangman.checkClickedLetters(letter)){                  // check if letter already clicked
      if(hangman.secretWord.includes(letter)){                // check if letter in secretWord
        for(let i = 0; i < hangman.secretWord.length; i++){   // if so, find all instances of letter in secretWord and for every letter, pass index to writeCorrectLetter()
          if(hangman.secretWord[i] === letter){
            hangmanCanvas.writeCorrectLetter(i);
          }
        }
        hangman.addCorrectLetter(letter);                     // then, call addCorrectLetter to add it to letters and guessedLetters

        if(hangman.checkWinner()){                            // check if the game is won and if so, call winner()
          hangmanCanvas.winner();
        }
      } else {
        hangmanCanvas.drawHangman(hangman.errorsLeft);              // if not clicked but not correct, 
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft); // writeWrongLetter()
        hangman.addWrongLetter(letter);                             // add wrongLetter()

        if(hangman.checkGameOver()){            // check if all errors used and if so,
          hangmanCanvas.gameOver();             // you lose :(
        }
      }
    }
  }
});