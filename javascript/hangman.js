class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.errorsLeft = 10
    this.letters = []
    this.guessedLetters = ''
    this.secretWord = this.pickWord()
  }

  pickWord() {
    // ... your code goes here
     let randomWord = Math.floor(Math.random() * this.words.length)
     return this.words[randomWord]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if( keyCode >= 65 && keyCode <= 90) return true;
    return false
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
    this.errorsLeft--;
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0) return false
    return true
  }

  checkWinner() {
    // ... your code goes here
   // if(this.errorsLeft > 0)return true
   // return false
    //if(this.secretWord.split )
   const guessedCheck = this.guessedLetters.split("").sort().join('')
   const secretCheck = this.secretWord.split("").sort().join('')
   return guessedCheck === secretCheck ? true:false
  
  
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

    // ... your code goes here
    hangmanCanvas.createBoard()
    hangmanCanvas.drawLines()
    console.log("haciendo click")
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event)
//Todo checar primero si es una letra
if(hangman.checkIfLetter(event.keyCode)){
 //* Revisar que en la palabra secreta esta la letra elegida
   if(hangman.secretWord.includes(event.key)){
     //* siempre que se aun metodo va a llevar ()
      let index = hangman.secretWord.indexOf(event.key)
      //* sabiendo que si esta, ahoraVamos a ocupar hangmanCanvas, y su metodo writeCorrectLetter
      hangmanCanvas.writeCorrectLetter(index)
      //todo aqui va if, el winner ,hangmancanvas winner 
     //if (hangman.checkWinner()) {hangmanCanvas.winner()
      }
 }else{ //todo utilizar hangman wrong letter, utilizando el event.key
  hangman.addWrongLetter(event.key) 

  //todo aqui utilizaremos hangman canvas. writtewrongletter con el parametro hangmanlettters y hangmang error left
  hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)

  //todo, tnemos que hacer un if hangaman.checkgameover,hangmancanvas.gameover
  // if (hangman.checkGameOver()) hangmanCanvas.gameOver();
  if (hangman.checkGameOver()) hangmanCanvas.gameOver();
  if (hangman.checkWinner()) hangmanCanvas.winner();

}//*finish
});
