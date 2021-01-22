class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    
    /*for(i=0; i < this.secretWord.length; i++) {
      this.letters.push(this.secretWord[i])*/
      console.log( this.secretWord.toString())
      return this.secretWord.toString().toUpperCase()
  }

 

  checkIfLetter(keyCode) {
  
    if(keyCode.keyCode >= 65 && keyCode.keyCode <= 90 ) {
       return true
    } 
    return false
    
  }


  checkClickedLetters(letter) {
    
    this.letters.push(letter)
   console.log(this.letters)
    
    
    for(let i = 0 ; i < this.letters.length; i++) {
      if(this.letters[i].indexOf(letter) === -1) {
       
         return false
      } else {return true}
    }
     
  }


  addCorrectLetter(letter) {
    this.secretWord
    console.log(this.guessedLetters)
    let guesslett = ""
    for(let i=0; i<this.secretWord.length;i++) {
      console.log(this.secretWord[i])
      if(this.secretWord[i] == letter.toString()) {
         guesslett=this.guessedLetters + letter
        
       return guesslett

      }else{return false}
    }
    
    console.log(this.guessedLetters)
  }

  addWrongLetter(letter) {
    this.secretWord
    console.log(this.errorsLeft)

    for(let i=0; i<this.secretWord.length;i++) {
      if(this.secretWord[i]!== letter  ) {
        this.errorsLeft = this.errorsLeft-1

        return this.errorsLeft
      }else {return false}
          
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
    let secretWordArray = secretWord.split("")
    let guessedLettersArray = this.guessedLetters.split("")
    console.log(secretWordArray)
   /*for(i=0; i<this.secretWord.length;i++) {
     guessedLettersArray.push(this.secretWord[i])
   }
   for(i=0; i<this.guessedLetters.length;i++) {
    secretWordArray.push(this.guessedLetters[i])*/

    const totalSecretWord = secretWordArray.map((l) => {
      return this.totalSecretWord.charCodeAt(l)
    })
    const totalGuessedWord = guessedLettersArray.map((l) => {
      return this.totalSecretWord.charCodeAt(l)
    })

    const sumaGuessedL = totalGuessedWord.reduce((a,vA) => {
            return a + vA
    },0)

    const sumaSecretW = totalSecretWord.reduce((a,vA) => {
      return a + vA
    },0)
  
    if(sumaGuessedL === sumaSecretW) {
      return ture
    } else {
      return false
    }

  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

  
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    hangmanCanvas.drawLines()  
   
  });
}

document.addEventListener('keydown', event => {
    hangman.checkIfLetter(event)
    console.log(hangman.checkIfLetter(event))

   hangman.checkClickedLetters(String.fromCharCode(event.keyCode))
    

    hangman.addCorrectLetter(String.fromCharCode(event.keyCode))
    

    hangman.addWrongLetter(String.fromCharCode(event.keyCode))
    
});

