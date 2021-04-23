class Hangman {
  constructor(words) {

    this.words = words; // ["mexico", "javascript", "agua"]
    // ... your code goes here
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    // 1. TENGO UN ARREGLO
    // 2. DE ESE ARREGLO TENGO QUE ELEGIR UNA PALABRA ALEATORIA
    // 0            1           2
    // ["mexico", "javascript", "agua"] - Random

    let randomNumber = Math.floor(Math.random() * this.words.length)
    return this.words[randomNumber]
  }


  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90){
      return true
    } else {
      return false
    }
  }


  

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    // ... your code goes here
      this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft === 0? true : false
  }

  checkWinner() {
    // ... your code goes here
    // todas las letras de secret word === a las de guessedLetters
    // cuando idex of no encuentra nada regresa un -1

    // if(this.guessedLetters.indexOf(letter) === -1){
        //   return false
        // } else {
        //   return true
        // }


    // for(let letter of this.secretWord ){
      
    //   return this.guessedLetters.indexOf(letter) != -1? true : false
        
    // }

    const secretArray = Array.from(this.secretWord)
    const guessedArray = Array.from(this.guessedLetters)

    let matches = 0

    secretArray.forEach((letter) => {
      if(guessedArray.includes(letter)){
        matches++
      }
    })

return matches === secretArray.length

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
    console.log(hangman.secretWord)
    hangmanCanvas.createBoard()
   
    

    hangmanCanvas.drawHangman(hangmanCanvas.errorsLeft)
    

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  hangman
  hangmanCanvas
  hangmanCanvas.drawHangman(hangman.errorsLeft)
  console.log(hangman.secretWord)
  console.log(event.key)
  correctLetter(event.key)
  console.log(hangman.guessedLetters)
  
  addIncorrect(event.key, hangman.errorsLeft)
  hangman.checkWinner()
  console.log(hangman.checkWinner())
  hangmanCanvas.winner()
  // hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key))
  console.log(hangman.secretWord.indexOf(event.key))
  hangmanCanvas.gameOver()
  
});

function correctLetter(key){
  for( let i = 0; i < hangman.secretWord.length; i++){
    if(hangman.secretWord[i] == key){
      hangmanCanvas.writeCorrectLetter(i)
      hangman.addCorrectLetter(key)
    }
  }
}


function addIncorrect(key, errorsLeft){
  if(hangman.secretWord.indexOf(key) === -1){
    hangmanCanvas.writeWrongLetter(key, errorsLeft)
    hangman.addWrongLetter(key)
    console.log(`bien ${key} ${errorsLeft}`)
  }
}




  