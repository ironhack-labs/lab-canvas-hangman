class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    const random = Math.floor(Math.random()*this.words.length);
    return this.words[random]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >=65 && keyCode <=90){
      return true
    } return false
    
    
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letters.includes(letter) || this.guessedLetters.includes(letter)){
      return false
    }else{
      return true
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft --
    if(!this.letters.includes(letter)){
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft> 0){
      return false
    }else{
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    /*const validation =[]
    for (let i=0; i<=this.guessedLetters.length;i++){
      if(this.secretWord.includes(this.guessedLetters[i])){
        validation.push(true)
      }else{
        validation.push(false)
      }
      const vali = (currentvalue) => currentvalue === true
      const vali2 = (currentvalue2) => currentvalue2 === false  
      if(validation.every(vali)){
        return true
      }else if (validation.every(vali2)) {
        return false
      }
    }
    
  }*/ let orderGuessedLetters = this.guessedLetters.split('').sort().join('')
      let orderSecretWord = this.secretWord.split('').sort().join('')

    if( orderGuessedLetters === orderSecretWord){
      return true
    }else{
      return false
    }
  }

  getAllIndex(letter){
    let i = -1
    let index = []

    while((i = this.secretWord.indexOf(letter,i+1))!=-1){
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

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  /*hangmanCanvas.writeCorrectLetter()
  const key = event.keyCode
  const letter = String.fromCharCode(key).toLowerCase
  if(hangman.checkIfLetter(key)){
    if(checkClickedLetters(letter)){
      if(hangman.secretWord.includes){
        hangman.addCorrectLetter()
      }

    }
  }*/
    const key = event.keyCode
    const letter = String.fromCharCode(key).toLowerCase()
    console.log(key)
    if(hangman.checkIfLetter(key)){
      if(hangman.checkClickedLetters(letter)){
        //console.log(letter)
        if(hangman.secretWord.includes(letter)){
          let AllIndex = hangman.getAllIndex(letter)
          for( let element of AllIndex){
            hangmanCanvas.writeCorrectLetter(element)
          }
          let i = 0;
          while (i < AllIndex.length) {
            hangman.addCorrectLetter(letter);
            i++;
          }
          console.log(hangman.guessedLetters);

          console.log(hangman.guessedLetters)
          console.log(AllIndex)
        }else{
          console.log('no la incluye')
          hangman.addWrongLetter(letter)
        }

      }

    }

  //console.log(event.keyCode)




});
