class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord =this.pickWord();
    this.letters =[];
    this.guessedLetters ="";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let numRandom = Math.floor(Math.random()*this.words.length);
    return this.words[numRandom];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode>=65 && keyCode<=90;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter)&& this.guessedLetters.indexOf(letter)===-1;

  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters+=letter;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.checkClickedLetters(letter) && this.letters.push(letter); 
  }

  checkGameOver() {
    // ... your code goes here
    return !this.errorsLeft? true : false;
  }

  checkWinner() {
    // ... your code goes here
    for(let value of this.secretWord){
      if(!this.guessedLetters.includes(value))return false;
    }
    return true;
  }
} 

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    console.log(hangman.secretWord);

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  //console.log(event.keyCode);
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)){
    if(hangman.secretWord.includes(event.key)){
      hangman.addCorrectLetter(event.key);
      hangmanCanvas.writeCorrectLetter(event.key);
    
    } 
  }
});
