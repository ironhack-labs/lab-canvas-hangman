class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    //store the letters that the user has already picked
    this.letters = [];
    // the letters user chose and guessed
    this.guessedLetters = "";
    // decrease every time a user picks a letter that doesn't appear in the word they need to guess.
    this.errorsLeft = 10;
  }

  pickWord() {
    const secretWordChoose = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
    return secretWordChoose;
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    return (this.guessedLetters += letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (this.letters.includes(letter) !== true) {
      return this.letters.push(letter);
    }
    
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    function sortAll(item) {
      return item.split("").sort().join("");
    }
    let sortedSecretWord = sortAll(this.secretWord);
    let sortedGuessedLetters = sortAll(this.guessedLetters);
    if (sortedSecretWord === sortedGuessedLetters) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);
    //my debug
    hangman.checkIfLetter();

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    console.log(hangman);
    console.log(hangmanCanvas);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
  let character = event.key;
  
  //logic
/*    if (
    hangman.checkClickedLetters(character) === false &&
    checkIfLetter(keyCode)
  ) {  */
    if (hangman.secretWord.includes(character)) {
      hangman.addCorrectLetter(character);
      let index = hangman.secretWord.indexOf(character);

 
      hangmanCanvas.writeCorrectLetter(character, hangman.errorsLeft);
      
    } else {
      hangman.addWrongLetter(character);
      hangmanCanvas.writeWrongLetter(character, hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
 //}

  console.log(character);
  console.log(hangman.letters);
  console.log(hangman.guessedLetters);
  /*   console.log(hangman.addCorrectLetter(letter))
   */
  console.log(hangman.errorsLeft);

  console.log(hangman.secretWord);

  return character;
});
