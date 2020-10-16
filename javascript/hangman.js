class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    for(let i = 65; i <= 90; i++){
      if(keyCode === i){
        return true;
      }
    }
    return false;
  }

  checkClickedLetters(letter) {
    for(let lett of this.letters){
      if(letter === lett){
        return false;
      }
    }
    return true;
  }

  addCorrectLetter(letter) {
    if(!this.guessedLetters.includes(letter)){
      this.guessedLetters += letter.toUpperCase();
    }
  }

  addWrongLetter(letter) {
    if(this.checkClickedLetters(letter)){
      this.letters.push(letter.toUpperCase());
    }
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if(this.errorsLeft > 0){
      return false;
    }
    return true;
  }

  checkWinner() {
    let word = this.secretWord.toUpperCase();
    let wordLength = 0;
    for(let i = 0; i < word.length; i++){
      for(let j = i+1; j < word.length; j++){
        if(word.charAt(i) === word.charAt(j)){
          word = word.slice(0, j) + word.slice(j+1, word.length);
        }
      }
    }
    for(let i = 0; i < word.length; i++){
      if(this.guessedLetters.includes(word.charAt(i))){
        wordLength +=1;
      }
    }
    if(wordLength === word.length){
      return true;
    }else{
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}
let gameOver = false;

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key) && !gameOver){
    if(hangman.secretWord.includes(event.key)){
      hangman.addCorrectLetter(event.key);
      let indexArr = [];
      let index = -1;
      do{
        index = hangman.secretWord.indexOf(event.key, index+1);
        indexArr.push(index);
      }while(index !== -1);
      indexArr.pop();
      hangmanCanvas.writeCorrectLetter(indexArr);
      if(hangman.checkWinner()){
        gameOver = true;
        let img = new Image();
        img.src="../images/awesome.png";
        img.onload = function() {
          hangmanCanvas.context.drawImage(img, 100, 100);
        };
      }
    }else{
      hangman.letters.push(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      hangman.addWrongLetter(event.key);
      if(hangman.checkGameOver()){
        console.log("gameover");
        gameOver = true;
        let img = new Image();
        img.src="../images/gameover.png";
        img.onload = function() {
          hangmanCanvas.context.drawImage(img, 100, 100);
        };
      }
    }

  }
});
