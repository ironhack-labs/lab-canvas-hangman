let hangman

class Hangman {
   constructor() {
     this.words = ['ironhack', 'work', 'harder', 'better', 'wearedeveloper'],
     this.secretWord = '',
     this.letters = [],
     this.guessedLetter = '',
     this.errorLeft = 10
   }

getWord () {
  return this.words[Math.floor(Math.random() * this.words.length)];
}

checkIfLetter(keyCode) {
  if (keyCode >= 65 && keyCode <= 90 ){
    return true;
  } else {
    return false
  }
}

checkClickedLetters(key) {
  if (!this.letters.includes(key)){
    return true
  } else {
    return false 
  }
}

addCorrectLetter(i) {
  this.letters = this.secretWord[i]
  this.guessedLetter += this.letters.toUpperCase()
}

 addWrongLetter(letter) {
   this.wrongLetter += letter;
   this.errorsLeft -= 1;    
   this.checkGameOver();
   
}

 checkGameOver() {
   if (this.errorLeft === 0 ){
     return false
   } else {
     return true
   }
}

 checkWinner() {
   return this.guessedLetter.length === this.secretWord.length 
}
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  let canvas = new HangmanCanvas();
  canvas.createBoard();
};

document.onkeydown = (e) => {
}