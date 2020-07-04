class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord().toLowerCase();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10
  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]    
   }

  checkIfLetter(keyCode) {                                      
    if (keyCode >= 65 && keyCode <= 90) {         
      return true
    } else {
      return false
    }
  }
  checkClickedLetters(letter) {               
    if (this.letters.includes(letter)) {
      return false                            
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;           
    this.letters.push(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;                     
    if(!this.letters.includes(letter)){       
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {               
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++){           
      if(this.guessedLetters.includes(this.secretWord[i])){       
        continue                                                  
      } else {
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
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode)){                   
    let alpha = 'abcdefghijklmnopqrstuvwxyz';        
    let letter = alpha[event.keyCode - 65];                   

  
    if(hangman.checkClickedLetters(letter)){                  
      if(hangman.secretWord.includes(letter)){                
        for(let i = 0; i < hangman.secretWord.length; i++){   
          if(hangman.secretWord[i] === letter){
            hangmanCanvas.writeCorrectLetter(i);
          }
        }
        hangman.addCorrectLetter(letter);                     

        if(hangman.checkWinner()){                            
          hangmanCanvas.winner();
        }
      } else {
        hangmanCanvas.drawHangman(hangman.errorsLeft);              
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft); 
        hangman.addWrongLetter(letter);                             

        if(hangman.checkGameOver()){            
          hangmanCanvas.gameOver();             
        }
      }
    }
  }
});