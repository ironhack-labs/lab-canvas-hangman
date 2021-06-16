class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = [] //alle geratenen Buchstaben
    this.guessedLetters = "" //richtige BUchstaben
    this.errorsLeft = 10
  }


  pickWord() {
    let gameWord =
      this.words[Math.floor.(Math.random() * this.words.length)]
    return gameWord
  }

  checkIfLetter(keyCode) {
    //refering to the JS keyboard codes 
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    }
    return false
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) !== -1) {
      //already chosen letter
      return false
    }
    //new letter:
    else {
      return true
    }
  }

  addCorrectLetter(letter) {
    //if letter = Part of secret word:
    if (this.secretWord.indexOf(letter) == 1) {
      //store the letter in letters list && guessedLetters strg
      this.guessedLetters.concat(letter);
      return true
    }
    else {
      this.addWrongLetter(letter);
      return false;
    }
  }

    addWrongLetter(letter) {
      this.errorsLeft--;
      this.letters.push(letter)
    }

    checkGameOver() {
      if (this.errorsLeft > 0) {
        return false;
      }
      return true
    }


    //helloMess:
    //_______________________________
    checkWinner() {
      //Check if the elements of string guessedLetters resemble all Elements in the String secretWord
      //checks if all guessed Letters are part of secret Word,   
      if (this.secretWord.match(this.guessedLetters) == this.guessedLetters.length
        &&
        //check the other way around: check if each secretWord-Element is matched in guessed letters
        for (let i = 0; i < this.secretWord.length; i++) {
          if (this.guessedLetters.includes(this.secretWord.charAt[i]) === true) {
            return true
          }
        })
      {
        return true;
      }
      return false
    }

    ///Simons Version: 
    //doesnt work if there are double cases of same later in secret word
    // checkWinner() {
    //   // ... your code goes here
    //   let newSecretWord = this.secretWord.split("").sort().join(",");
    //   let newGuessedLetters = this.guessedLetters.split("").sort().join(",");
  
    //   if (newSecretWord === newGuessedLetters) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

  }

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.drawLines()
    // ... your code goes here
  });
}



document.addEventListener('keydown', event => {
  //React to user pressing a key
  let letterKey = event.keyCode;
  let letter = event.key;
  console.log(hangman.secretWord);
  if (hangman.checkIfLetter(letterKey)) {
    if (!
      hangman.checkClickedLetters(letterKey)) {
      if (hangman.addCorrectLetter(letterKey)) {
        hangmanCanvas.writeCorrectLetter(letter)
      }
      hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
    } else {
      console.log("Letter was already clicked. Please choose another letter."
      )
    }
  } else {
    console.log("Please choose a letter.")
  }
});
