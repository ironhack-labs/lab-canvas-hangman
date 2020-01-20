let hangman;

 class Hangman {
   constructor() {
    this.words = ['hola','caracol','burbuja'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
   }
  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() *
      this.words.length)];
      return this.secretWord;
  }
 
  checkIfLetter(keyCode) { 
    console.log(keyCode)
    if (keyCode >= 65 && keyCode <= 90 ){
      return true
    } else {
      return false
  }
} 

  checkClickedLetters(key) {
    if(this.letters.includes(key)){
    return false;
  } else {
    return true;
  }
} 

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord.charAt(i).toUpperCase();
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    return this.checkGameOver();
  }

   checkGameOver() {
    if(this.errorsLeft <= 0){
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if(this.guessedLetter.length === this.secretWord.length){
      return true;
    } else {
      return false;
    }
  }

} 
document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
};


document.onkeydown = (e) => {
  if(hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)){
      hangman.letters.push(e.key)
      let index = 0
      let correct = false
      hangman.secretWord.split('').forEach(letra => {  
      if(letra == e.key) {
          correct = true
          hangman.addCorrectLetter(index)
          hangmanCanvas.writeCorrectLetter(index)
      }
      index++
    });
    if(correct == false){
      hangman.addWrongLetter(e.key)
      hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft)
    }
  } 
};
