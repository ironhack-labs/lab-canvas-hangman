let hangman;

 class Hangman {
  constructor() {
    this.words = ["patitos", "gatitos", "monitos"]
    this.secretWord = ""
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10
   }

  getWord() {
    const index = Math.floor(Math.random()* this.words.length)
      this.secretWord = this.words[index]
      return this.secretWord
   }

  checkIfLetter(keyCode) {
    if (typeof keyCode === "number"){
      if(keyCode >= 65 && keyCode <= 90) {
         return true
        } else {
          return false
        }
      } else {
        return false
      }
  }
  

  checkClickedLetters(key) {
   if (this.letters.indexOf(key)>= 0){
     return false
   } else {
     return true
   }
  }
  //why is it backwards?
   

    addCorrectLetter(i) {  
      this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase()
  }

   addWrongLetter(letter) {
     this.errorsLeft--
     this.checkGameOver()
   }

  checkGameOver() {
      if (this.errorsLeft === 0){
        return true
      } else {
        return false
      }
   }

  checkWinner() {
      if (this.guessedLetter.length === this.secretWord.length){
        return true
      } else {
        return false
      }
    }

 }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
