let hangman;

class Hangman {
  constructor() {
    this.words = ["javascript", "canvas", "document"];
    this.secretWord = "";
    this.letters = [];
    this.lettersCode = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    let randomWordId = Math.floor( Math.random() * this.words.length ); 
    let word = this.words[randomWordId];

    return word;
  }

  checkIfLetter(keyCode) {
    return (keyCode>=65 && keyCode<=90);
  }

  checkClickedLetters(key) {
    if( typeof key === "number" ) { return this.lettersCode.includes(key); }
    if( typeof key === "string" ) { return this.letters.includes(key); }
  }

  addCorrectLetter(letter) {
    if( typeof letter === "number" ) {
      this.lettersCode.push( letter );
      this.guessedLetter += String.fromCharCode(letter);
    }
    if( typeof letter === "string" ) {
      this.letters.push( letter );
      this.guessedLetter += letter;
    }
    console.log("winner:", this.checkWinner() );
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    console.log("Game Over:", this.checkGameOver() );
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let isWinner = false;

    let secretWordArray = this.secretWord.split("");
    let guessedLetterArray = this.guessedLetter.split("");
    if( this.secretWord.length > 0 ) {
      isWinner = secretWordArray.reduce( (tot, val) => {
        return ( Boolean(tot && guessedLetterArray.includes(val)) );
      }, true);
    }
    return isWinner;
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {
  if( hangman !== undefined ) {
    let validLetter = hangman.checkIfLetter( e.keyCode );
    if( validLetter === true ) {
      let newLetter = hangman.checkClickedLetters( e.keyCode );
      hangman.addCorrectLetter(e.keyCode);
    } else {
      hangman.addWrongLetter(e.keyCode);
    }
  }
};
