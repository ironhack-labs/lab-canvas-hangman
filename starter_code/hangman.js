let hangman;
let canvas;

 class Hangman {
   constructor(words) {
   this.words = ["sunshine", "moon", "tree"];
   this.letters = [];
   this.guessedLetter = "";
   this.errorsLeft = 10;
   this.secretWord = "";
 }

getWord() {
  let randomIndex = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[randomIndex]
  return this.words[randomIndex];

};

checkIfLetter(keyCode) {
  if(keyCode >= 65 && keyCode <= 90){
    this.letters.push(keyCode)
    return true;
  }
  else {
    return false
  }
};

checkClickedLetters(key) {
  if(this.letters.includes(key)){
    return false;
  
  }
  else {
    return true;
  }
};


addCorrectLetter(positionInWord) {
  this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
}

addWrongLetter(letter) {
  this.errorsLeft -= 1;
};

checkGameOver() {
  if(this.errorsLeft === 0){
    return true;
  }
  else{
    return false
  }
};

checkWinner() {
  if(this.secretWord.length === this.guessedLetter.length){
    return true
  }
  else{
    return false
  }
};
}
 

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  secretWord = hangman.getWord()
  canvas = new HangmanCanvas(secretWord);
  canvas.drawLines();
};


document.onkeydown = function (e) {
  
};


