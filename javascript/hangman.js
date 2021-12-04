class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }
  
  pickWord(){
    return this.words[Math.floor(this.words.length * Math.random())];
    
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    } 
    return false;
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)){
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    //this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true;
    }
    if (this.errorsLeft > 0){
      return false ;
    } 
 }

  checkWinner() {
    const secretWordInArray = this.secretWord.split("");
    //const guessedLettersArray = this.guessedLetters.split();
    for (let i = 0; i < secretWordInArray.length; i += 1){
      if (this.guessedLetters.includes(secretWordInArray[i]) && this.checkGameOver() === false) {
        return true;
      };
    };
    return false;
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
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
