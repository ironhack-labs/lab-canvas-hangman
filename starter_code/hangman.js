let hangman;


class Hangman {
  constructor() {
    this.words = ['HELLO', 'WORD', 'PANCHITA', 'LOVE', 'CAR', 'ELSE', 'ALAN']
    this.secretWord = this.getWord()
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10


   }

    getWord() {
      const i = Math.floor(Math.random() * this.words.length)
      return this.words[i]

    }

    checkIfLetter(keyCode) {
      if(keyCode>=65 && keyCode<= 90){
        return true
      }else{
        return false
      }

   }

    checkClickedLetters(key) {
      if(this.letters.includes(key)){
        return false
      }else{
        return true
      }
   }

    addCorrectLetter(i) {
      this.guessedLetter += this.secretWord[i].toUpperCase()
      this.checkWinner() ? hangmanCanvas.winner():null
   }

     addWrongLetter(letter) {
       if(this.errorsLeft > 0){
         this.letters.push(letter)
         this.errorsLeft-- 
         this.checkGameOver() ? hangmanCanvas.gameOver():null
       }
    }

    checkGameOver() {
      if(this.errorsLeft === 0){
        return true
      }else{
        return false
      }
      
  }

     checkWinner() {
       if(this.secretWord.length === this.guessedLetter.length){
         return true
       }else{
         return false
       }

   }

 }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard()
};

document.onkeydown = (e) => {
  if(hangman.checkIfLetter(e.keyCode)){ ///si el boton que presionan esta dentro de la letra 65 > 90
    let letter = e.key.toUpperCase() // variable para hacer la letra presionada Mayúscula
    //console.log('letter', letter)
    if(hangman.checkClickedLetters(letter)){ //
      if(hangman.secretWord.includes(letter)){
        hangman.addCorrectLetter(hangman.secretWord.indexOf(letter));
        hangmanCanvas.writeCorrectLetter(letter);
      }else {
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
       }
    }
  }
  console.log(hangman)
};

