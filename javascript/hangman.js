class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    
  }


  pickWord(words) {
    //a method that returns a random word from the array of words
    
    let randomIndex = Math.floor(Math.random()*words.length)

    let wordPicked = words[randomIndex]
    return String(wordPicked);

  }

  checkIfLetter(keyCode) {
//a method that returns true or false depending on the keyCode of the key pressed by the user: if the keyCode corresponds to a character from a-z, it should return true, otherwise, it should return false. You can use keycode.info to find out which codes refer to each key.
   
    let keyCheck = keyCode;
    if (keyCheck >63 && keyCheck <91) {
      return true;
    } else {
      return false; 
    }
  }

  checkClickedLetters(letter) {
    // a method that should check if the letter passed as an argument has already been pressed. It should return true if it was not or false in the opposite case.

    let letterClicked = letter

    for(let i=0;i<this.letters.length;i++) {
       if (this.letters[i] === letterClicked) {
        return false;
      } else {
        return true;
      }
    }


  }


  addCorrectLetter(letter) {
    //a method that should add the passed letter to the guessedLetters property. This could be a good place to check if the user won.
    this.guessedLetters += letter;
    
  }


  addWrongLetter(letter) {
    //a method that should subtract one from the variable errorsLeft. It also should push this letter in the array of letters if the letter is not there already.
    this.errorsLeft -=1
    
    // ... your code goes here
  }
/*
  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });

  */
}
/*
document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
*/
