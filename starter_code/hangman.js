let hangman;

class Hangman {
  constructor() {
    this.words = ['capucha','foca','laboratorio','pluma','ambulancia', 'calidad', 'cultura', 'boca', 'cereales','terremoto', 'contrato', 'libro'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)].toUpperCase();
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) return true;
    return false;
  }

  checkClickedLetters(key) {
    if(this.letters.includes(key)){
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(i) {
    if(this.secretWord.includes(i)){
      this.guessedLetter += i;
      this.checkWinner();
      return this.secretWord.indexOf(i);
    }
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
    this.checkGameOver()
  }

  checkGameOver() {
    if(this.errorsLeft == 0) return true;
    return false;
  }

  checkWinner() {
    let counter = 0;
    for(let i = 0; i < this.secretWord.length; i++){
      if(this.guessedLetter.includes(this.secretWord[i])) counter++;
    }
   
    if(counter === this.secretWord.length) return true;

    return false
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  console.log(hangman.secretWord)
  hangmanCanvas.createBoard();
};

document.onkeydown = (e) => {
  if(hangman.checkIfLetter(e.keyCode) === true ){
    let letter = e.key.toUpperCase()
    console.log('letter', letter)
    if(hangman.checkClickedLetters(letter) == true){
      if(hangman.secretWord.includes(letter)){
        var indexKey = hangman.addCorrectLetter(letter);
        hangmanCanvas.writeCorrectLetter(indexKey);
        if(hangman.checkWinner() == true) hangmanCanvas.winner()
      } else {
       hangman.addWrongLetter(letter);
       hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
      }
    }
  } else{
    console.log('Debes incluir una letra')
  }
};