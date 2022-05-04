class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord=this.pickWord()
    this.letters=[]
    this.guessedLetters=""
    this.errorsLeft=10

    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
     let rand=this.words[Math.floor(Math.random()* this.words.length)]
     return rand
    
    

  }
 
  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >=65 && keyCode <=90){
      
      return true
    }
    else{
      return false
    }
  }
  

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letters.includes(letter)){
      return false

    }
    else {
      return true
    }
   
  }

  addCorrectLetter(letter) {
    // ... your code goes here
   
       this.guessedLetters += letter
    
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -=1
    
    if(!this.letters.includes(letter)){
    this.letters.push(letter)
     
    }

  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
      return false

    }
    else{
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    let gueLe=this.guessedLetters.split('').sort().join('')
    let secretW=this.secretWord.split('').sort().join('')
    if (secretW == gueLe){
      return true 
    }
    else{
      return false 
    }
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

     hangmanCanvas.createBoard()
     hangmanCanvas.drawLines()
     
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
