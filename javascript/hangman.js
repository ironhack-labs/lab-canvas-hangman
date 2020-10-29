class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
   
  }

  pickWord() {
    // ... your code goes here
    var aleWord = words.length
    for ( i=0;i<aleWord;i++){
     randomword =  Math.floor(Math.random()*(words.length));
     seleccionAleatoria =  this.words[randomword];
    }
  
    return seleccionAleatoria.toUpperCase()
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
   //let letrasMa = ['KeyA','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','X','Y','Z'];
   //let letrasMi = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','x','y','z'];
   // keyCode.fromCharCode((65 <= key && key <= 90)? return);
    if (65 <= keyCode.fromCharCode && keyCode.fromCharCode <= 90){
      return true
    }
    return false
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (letter != this.letters.length){
      return true
    }
    return false
 

  }

  addCorrectLetter(letter) {
    // ... your code goes here
   this.guessedLetters.push(checkClickedLetters(letter))
   
  }

  addWrongLetter(letter) {
    // ... your code goes here
   this.errorsLeft--;
   if (letter != this.secretWord.length){
     letter.push(this.letters)
   }
   
  }

  checkGameOver() {
    // ... your code goes here
  if (this.errorsLeft > 0){
    return false
  }
  return true
  }

  checkWinner() {
    // ... your code goes here
   if (this.guessedLetters = this.secretWord.length){
      return true
    }
    return false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
   //hangman.secretWord = hangman.pickWord();
   //hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
