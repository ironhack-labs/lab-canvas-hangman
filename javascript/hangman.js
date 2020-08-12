class Hangman {

  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    this.buildWord = []
    this.hangmanCanvas = null;
    this.winner = false;
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    let min = 0;
    let max = this.words.length;

    let randomNumber = (Math.random() * (max - min + 0)) << 0;
    return this.words[randomNumber];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    //la ñ es 192
    if(keyCode >= 65 && keyCode <= 90)
      return true
    else
      return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(!this.letters.includes(letter)){
      this.letters.push(letter) 
      return true;
    }
    else
      return false;
  }

  addCorrectLetter(letter) {   
    
    for(let i = 0; i <= this.secretWord.length; i++)
    {
      if(this.secretWord[i] == letter){
        this.guessedLetters += letter;
        this.hangmanCanvas.writeCorrectLetter(i);
      }
    }
    this.checkWinner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;

    if(this.letters.indexOf(letter) == -1)
    {
      this.letters.push(letter)
    }
    else{
      console.log("ya existo")
    }
    this.hangmanCanvas.writeWrongLetter(letter, this.errorsLeft)
    if(this.errorsLeft == 0)
    {
      this.hangmanCanvas.gameOver();
    }
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    debugger;
    // ... your code goes here
    for(let i = 0; i < this.secretWord.length; i++)
    {
      if(!this.guessedLetters.includes(this.secretWord[i]))
        return false
    }
    this.hangmanCanvas.winner();
    this.winner = true;
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
    hangman.hangmanCanvas = hangmanCanvas;
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', e => {
  // React to user pressing a key
  // ... your code goes here
    if(!hangman)  return
    if(hangman.winner) return

    let letterPressed = e.key;
    //tecla valida
    if(hangman.errorsLeft > 0 && hangman.checkIfLetter(e.keyCode))
    {
      //existe en el array
      if(hangman.checkClickedLetters(letterPressed))
      {
        //console.log("tecla nueva agregada")
        if(hangman.secretWord.includes(letterPressed))
        {
          //console.log("existe en el secret word")
          hangman.addCorrectLetter(letterPressed)
        }
        else{
          //console.log("no existe en el secret word y es error menos menos")
          hangman.addWrongLetter(letterPressed)
        }
      }
      else{
        //console.log("tecla presionada antes")
      }
    }
    else
    {
      //console.log("tecla invalida")
    }

});
