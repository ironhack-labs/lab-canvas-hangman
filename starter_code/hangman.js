var hangman;

class Hangman {
  constructor() {
    this.words = ["Tijolo", "Familia", "ironhack","xicara","chocolate","relogio","televisao","react","javascript","canvas"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = [];
    this.errorsLeft = 10;
    this.canvas;
  }
  canvasInit = word => {
    this.canvas = new HangmanCanvas(word);
  };
  getWord = () => {
    const word = this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
    this.canvasInit(word);
    return word;
  };
  // char code in Uppercase 41(A) a 5a(Z)
  checkIfLetter = key => key >= 0x41 && key <= 0x5a;

  checkClickedLetters = letter => {
    return this.secretWord.includes(letter) && this.errorsLeft>0;
  };
  addCorrectLetter = key => {
    this.guessedLetter += key;
    this.letters.push(key);
  };
  addWrongLetter = key => {
    this.guessedLetter += key;
    this.errorsLeft -= 1;
    
  };
  checkGameOver = () => !this.errorsLeft;

  checkWinner = () => [...new Set(this.secretWord.split(""))].length === this.letters.length;
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  
  hangman.canvas.createBoard();
};

document.onkeydown = function(e) {
  if (hangman.checkIfLetter(e.keyCode) && !hangman.checkWinner()) {
    const upperCaseLetter = e.key.toUpperCase();
    if (hangman.checkClickedLetters(upperCaseLetter)) {
      if (!hangman.letters.includes(upperCaseLetter)) {
        hangman.addCorrectLetter(upperCaseLetter);
        hangman.canvas.writeCorrectLetter(upperCaseLetter)
        if(hangman.checkWinner()){
          hangman.canvas.winner();
        }
      }
    } else {
      
      if (!hangman.guessedLetter.includes(upperCaseLetter)&& !hangman.checkGameOver()) {
        hangman.addWrongLetter(upperCaseLetter);
        hangman.canvas.drawHangman(hangman.errorsLeft)
        hangman.canvas.writeWrongLetter(upperCaseLetter,hangman.errorsLeft+1);
        
      }
    }
    
  }
};
