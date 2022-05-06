class Hangman {
  constructor(words) {
    this.words = words; //array of words
    this.secretWord = this.pickWord() //string
    this.letters = [];
    this.guessedLetters=""; // es un string
    this.errorsLeft = 10;
  }

  pickWord() {
    //this method selects a random position of words and put it on secretWord
  
  let randomPosition = Math.floor(Math.random() * this.words.length)
 
  this.secretWord = this.words[randomPosition]

  return this.secretWord

  }

  checkIfLetter(keyCode) {


    if((keyCode >= 65 && keyCode <=90)){
      return true;
    } else { return false}
  }

  checkClickedLetters(letter) {
  
    let checkContainer = true

//this.letters.push(letter); y quién o pushea?

if(this.letters.includes(letter)){
  checkContainer = false
  }

  return checkContainer

}

  addCorrectLetter(letter) {
    
    this.guessedLetters += letter

  }

  addWrongLetter(letter) {
    
    this.errorsLeft -= 1

    if(this.letters.length >1 && !this.letters.includes(letter)){
      letters.push(letter)
      }

  }

  checkGameOver() {
   
    if(this.errorsLeft === 0){
      return true;
    } else { return false; }
  }

  checkWinner() {

//secretWord es un string con sentido, osea se puede leer.
//guessed letters tmb es un string pero no tiene sentido, sin embargo las letras son las mismas 
//podria ser un con un filter + indexOf como en la Kata de sorting

let orderedSecretWords = this.secretWord.split('').sort().join('');

let orderedGuessedLetters = this.guessedLetters.split('').sort().join('');

if(orderedSecretWords === orderedGuessedLetters ){
  return true
} else {return false}

  
}}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
console.log(hangman.guessedLetters)
//HINT (uncomment when start working on the canvas portion of the lab)

hangman.secretWord = hangman.pickWord();
hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});


