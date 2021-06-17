class Hangman {
  constructor(arrWords) {
    // ... your code goes here
    this.words = arrWords;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10 ;
  }
  pickWord() {
    // ... your code goes here
    let randomNumber = Math.floor(Math.random() * this.words.length)
    return this.words[randomNumber];
  }
  checkIfLetter(keyCode) {
    let alfabeto=[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
   
    return alfabeto.includes(keyCode)
  }

  checkClickedLetters(letter) {
    
    if(this.letters.includes(letter)){
      return false
    }
    else{
      
      return true
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here
      this.guessedLetters += letter;
      this.letters.push(letter)
    
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    this.letters.push(letter)
    

  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false
    }else{
  
      return true
    }
  }

  checkWinner() {
    for(let i=0; i<this.secretWord.length; i++){
      if(this.secretWord.includes(this.guessedLetters[i])){
        
    }else{
      return false
    }
    
    }
  return true 
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
    // ... your code goes here
  });
}
document.addEventListener('keydown', event => {
  if(!hangman.checkGameOver() && !hangman.checkWinner()){
    if(hangman.checkIfLetter(event.which)){
      if(hangman.checkClickedLetters(event.key)){
      
        if (hangman.secretWord.includes(event.key)){
          for(let i=0 ; i <hangman.secretWord.length ; i++){
    
          if(hangman.secretWord[i] === event.key){
          hangman.addCorrectLetter(event.key)
          hangmanCanvas.writeCorrectLetter(i)
          }
          if(hangman.checkWinner()){
            hangmanCanvas.winner()
          }
        }
        }else{
          hangmanCanvas.writeWrongLetter(event.key , hangman.errorsLeft)
          hangmanCanvas.drawHangman(hangman.errorsLeft)
          hangman.addWrongLetter(event.key)          
          
      }
    }
  }
  }
  else if(hangman.checkGameOver()){
  hangmanCanvas.gameOver()
  
  }
});