class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    this.secretWord = `${this.pickWord}` 
  }

  pickWord() {
    var randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return String(randomWord)
  }


  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter) || this.guessedLetters.includes(letter)) {
      return false
    } else {
      return true
    }
  } 

  addCorrectLetter(letter) {
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    if (this.checkClickedLetters == true) {
      this.secretWord.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0){ 
     return false
    } else{
      return true
    }
  }


  checkWinner() {
    let orderGuessedLetters = this.guessedLetters.split('').sort().join('')
    let orderSecretWord = this.secretWord.split('').sort().join('')
  

    if (this.guessedLetters === this.secretWord) {
      return true
    } else {
      return false
    }
  }

  getAllIndex(letter){
    let i = -1
    let index = []

    while((i = this.secretWord.indexOf(letter, i+1))!=-1) {
      index.push(i)
    } 
    return index
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
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  /*hangmanCanvas.writeCorrectLetter()
  const key = event.keyCode
  const letter = String.fromCharCode(key).toLowerCase
  if (hangman.checkIfLetter(key))
  console.log(key)
  const letter = String.fromCharCode(key).toLowerCase()*/

  
  const key =event.keyCode
  const letter = String.fromCharCode(key).toLowerCase()
  console.log(key)
  if (hangman.checkIfLetter(key)){
   if (hangman.checkClickedLetters(letter)) {
     if(hangman.secretWord.includes(letter)) {
       let allIndex = hangman.getAllIndex(letter)
       for(let element of allIndex) {
         hangmanCanvas.writeCorrectLetter(element)
       }
       let i = 0;
       while (i < allIndex.length){   
        hangman.addCorrectLetter(letter)
        i++
       }
       console.log(hangman.guessedLetters)
       console.log(allIndex)
     } else {
       console.log('no la incluye')
       hangman.addWrongLetter(letter)
     }
   }
  }

});