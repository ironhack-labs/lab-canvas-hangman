let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words=["animo","ironhack","sueno"];
    this.secretWord="";
    this.letters=[];
    this.guessedLetter=[];
    this.errorsLeft=10;
  }
  getWord() {
    return this.words[Math.floor( Math.random() * this.words.length)].toLocaleUpperCase()
    
  }
  
  checkIfLetter(keyCode) {
    if(keyCode>=65 && keyCode<=90){
      return true;
    }
    else{
      return false;
    }
  }

  checkClickedLetters(key) {
    if(!this.letters.includes(key.key))
      this.letters.push(key.key.toLocaleUpperCase());
    if(this.secretWord.includes(key.key.toLocaleUpperCase())){
      this.addCorrectLetter(key.key.toLocaleUpperCase());
    }else{
      this.addWrongLetter(key.key);
      return false
    }
    return this.checkIfLetter(key.keyCode);
  }
  addCorrectLetter(i) {
    if(!this.guessedLetter.includes(i.toLocaleUpperCase())) 
      this.guessedLetter += i.toLocaleUpperCase()
    return this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
  }

  checkGameOver() {
    if(this.errorsLeft==0)
      return true;
    else
      return false;
  }

checkWinner() {
  if(this.guessedLetter.length===this.secretWord.length)
    return true;
  else;
    return false;
}

}


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.secretWord=hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
};

document.onkeydown = (e) => {
  hangman.checkClickedLetters(e);
  hangmanCanvas.createBoard();
  hangmanCanvas.writeCorrectLetter(hangman.guessedLetter);
};
