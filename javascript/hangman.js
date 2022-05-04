class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord=this.pickWord()
    this.letters=[];
    this.guessedLetters="";
    this.errorsLeft=10;
  }

  pickWord() {
    // ... your code goes here
    const randomWords=[Math.floor(Math.random() *this.words.length)];
    const secretWord= this.words[randomWords]
    return secretWord;
  }

  checkIfLetter(keyCode) //cada número es un keystroke del teclado
      // ... your code goes here
  { if (keyCode > 64 && keyCode < 91){
    return true 
  } else {return false}
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)){
      return false
    } else {return true}
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1; //resta y sobrescribe
    if(!this.letters.includes(letter)) {
      this.letters.push(letter)
    }

    return
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
        return false
    } else {
     return true
    }
  }

  checkWinner() {
    // ... your code goes here
    //como uno es string y otro array, tenemos que transoformarlas a un mismo tipo de dato
    const sortedSecretWord = this.secretWord.split("").sort().join("")
    const orderedGuessedLetters = this.guessedLetters.split("").sort().join("");
    //check if winner
    if (sortedSecretWord === orderedGuessedLetters){return true} else {return false}
    
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
    // ... your code goes here
    console.log('click start game')
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here

});
