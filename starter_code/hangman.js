let hangman;

class Hangman {
    constructor() {
this.words = ['ecosystem', 'airplane', 'comfortable'],
this.secretWord = '',
this.letters = [],
this.guessedLetter='',
this.errorsLeft = 10


   }

   getWord() {

       //this.secretWord =this.words[ Math.floor(Math.random() * this.words.length)]
        //return this.secretWord

        const randomIndex = Math.floor(Math.random() * this.words.length)
       return this.secretWord = this.words[randomIndex]
        
   }

  checkIfLetter(keyCode) {
     if(keyCode >= 60 && keyCode <= 120){
       return true
     } else {
       return false
     }
   }

   checkClickedLetters(key) {
     
     if (!this.letters.includes(key)) {
       return true
     } else {
       return false
     }
  }

 addCorrectLetter(i) {

  this.letters = this.secretWord[i].toUpperCase();
  this.guessedLetter += this.letters;
   
  }

   addWrongLetter(letter) {
    this.errorsLeft -= 1
  }

   checkGameOver() {

    if(this.errorsLeft === 0){
      return true
    } else {
      return false
    }

  }

   checkWinner() {
    if(this.guessedLetter.length === this.secretWord.length) {
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

