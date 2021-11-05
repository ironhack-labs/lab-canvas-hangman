// const $canvas= getElementById("hangman")
// const contxt= $canvas.getContext("2d");

class Hangman {
  constructor(words) {
     this.words = words;
     this.secretWord = this.pickWord();
     this.letters=[];
     this.guessedLetters='';
     this.errorLeft= 10;

    // ... your code goes here
  }

  pickWord() {
    // if(typeof(this.words)!== "string"){
    //   return
    // }else{
      
  return this.words[Math.floor(Math.random()* this.words.length)];
// }
  
  // ... your code goes here
  }
  

  checkIfLetter(keyCode) {
    // document.onekeydown = (event)=>{
      if(keyCode>=65 && keyCode<=90){
        return true;
      }return false;
    
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

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
}

document.addEventListener('keydown', event => {
  pickWord();
  // checkIfLetter(keyCode);

  // if (hangman.checkIfLetter(event.keyCode)) {
  //   console.log("entra en el rango");
  //   }
  // React to user pressing a key
  // ... your code goes here
});
