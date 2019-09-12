var hangman;


class Hangman {
  constructor(){
    this.words = ["PADARIA","PIPOCA","ARROZ"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 0;
  }
  getWord(){
    let random = Math.floor(Math.random() * this.words.length);
    return this.words[random];
  }
  checkIfLetter(keyCode){
    if((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)){
      return true;
    }else {
      return false;
    }
  }
  checkClickedLetters(key){
    if(this.letters.indexOf(key) != -1){
      return false;
    }else{
      return true;
    }
  }
  checkGameOver(){
    if(this.errorsLeft === 0){
      return true;
    }else{
      return false;
    }
  }
  checkWinner(){
    let winner = true;
    this.secretWord.split("").forEach( (letra) => {
      if(this.guessedLetter.indexOf(letra) === -1){
        winner = false;
      }
    });
    return winner;
  }
  addCorrectLetter(i){  
    this.guessedLetter += this.secretWord[i].toUpperCase();
    return this.checkWinner();

  }
  addWrongLetter(letter){
    this.errorsLeft -= 1;
    this.letters.push(letter);
    return this.checkGameOver();
  }
}
hangman = new Hangman();
hangmanCanvas = new HangmanCanvas(hangman.getWord());
hangman.secretWord = hangmanCanvas.secretWord.join("");
console.log("secret word",hangman.secretWord);
document.getElementById('start-game-button').onclick = function () {
  hangmanCanvas.createBoard();
};


document.onkeydown = function (e) {
  //verifica se o caractere e valido
  let keyCode = hangman.checkIfLetter(e.keyCode);
  if(keyCode){
    let stringKeyCode = String.fromCharCode(e.keyCode);
    let checkClicked = hangman.checkClickedLetters(stringKeyCode);
    if(checkClicked){
      if(hangman.secretWord.indexOf(stringKeyCode) != - 1){
        if(hangman.addCorrectLetter(hangman.secretWord.indexOf(stringKeyCode))){
          hangmanCanvas.writeCorrectLetter(hangman.guessedLetter);
          hangmanCanvas.winner();
        }else{
          hangmanCanvas.writeCorrectLetter(hangman.guessedLetter);
        }
      }else {
        if(hangman.addWrongLetter(stringKeyCode)){
          hangmanCanvas.writeWrongLetter(hangman.letters);
          hangmanCanvas.gameOver();
        }else{
          hangmanCanvas.writeWrongLetter(hangman.letters);
        }
      }
    }
  
  }

};
