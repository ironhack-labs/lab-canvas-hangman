let hangman;



class Hangman {
constructor() {
  this.words = ["Maus",  "Katze", "Vogel", "Schlange", "Leguan"];
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

  getWord() {
  return this.secretWord;
 }

 checkIfLetter(keyCode) {
    let reg = new RegExp("[a-zA-Z]");
    return (reg.test(String.fromCharCode(keyCode)));
  }

 checkClickedLetters(key) {
   if (this.letters.includes(key)){
     return false;
   }else{
    return true;
   }
 }

  addCorrectLetter(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  
  }

  addWrongLetter(letter) {
    if(this.secretWord.indexOf(letter)=== -1){
    this.errorsLeft-- ;
    }
   }

  checkGameOver() {
   return this.errorsLeft === 0;
  }

  checkWinner() {
      return this.secretWord.split('').every(letter => this.guessedLetter.includes(letter));
}
}



document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  let hangmanGame = new HangmanCanvas(hangman.secretWord);
  hangmanGame.createBoard();
  hangmanGame.drawLines();
  console.log(hangmanGame.secretWord);
  hangmanGame.writeCorrectLetter(4);
  
  document.onkeydown = (e) => {

  };
  
};



