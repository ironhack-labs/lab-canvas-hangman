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
  //this word a user needs to guess
  pickWord() {
    const secretWordChoose = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
    return secretWordChoose;
  }
  //checking that the user press a letter button
  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true;
    } else {
      return false;
    }
  }
  //checkin that  a user doesn't use the already used button
  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }
  //add the correct used letter to the string
  addCorrectLetter(letter) {
    return (this.guessedLetters += letter);
  }
  //add the incorrect used letter to the string and dexcrease the error lefts
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
      hangmanCanvas.winner()
      return true;
    } else {
      return false;
    }
  }
}
//global object for using outside of this file
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
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
  
}

document.addEventListener("keydown", (event) => {
  let character = event.key;
  if (hangman.checkClickedLetters(event.key) && hangman.checkIfLetter(event.keyCode)) {
    if (hangman.secretWord.includes(character)) {
      hangman.addCorrectLetter(character);
      let indexes = [];
      for (let i = 0; i < hangman.secretWord.length; i++) {
        if(hangman.secretWord[i] === character) {
          indexes.push(i)
        }
      }
      hangmanCanvas.writeCorrectLetter(indexes, character)
    } else {
      hangman.addWrongLetter(character);
      hangmanCanvas.writeWrongLetter(character, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }
  return character;
});
