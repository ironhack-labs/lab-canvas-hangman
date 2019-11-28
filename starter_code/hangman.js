class Hangman {
  constructor() {
    this.words = ["word", "test", "other"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = [];
    this.errorsLeft = 10;
}


   getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]; 
   }


   checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      this.letters.push(String.fromCharCode(keyCode));
      return true;
    } 
    else return false;
   }

   checkClickedLetters(key) {
     return !(this.letters.includes(key));
   }

   addCorrectLetter(i) {
 this.guessedLetter.push(this.secretWord[i].toUpperCase());
   } 

   addWrongLetter(letter) {
   }
   checkGameOver() {
   }
   checkWinner() {
   }
 }

/* document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
let hangman; */