let game;

class Hangman {
  constructor(){
    this.words = ["jurist", "daredevil", "scrupulous", "erudite", "contrarian", "university"];
    this.secretWord = '';
    this.errorsLeft = 10;
    this.lettersUsed = new Array();
    this.lettersGuessed = new Array();
    this.letterHeld = new Array();
  }


  // Pick random word from array - store in secretWord variable
  getWord() {
  let randomNumber = Math.floor(Math.random()*this.words.length);
  this.secretWord = this.words[randomNumber];
}

// check if pressed key is a letter
checkClickedLetters(event){
  let pressedKey = String.fromCharCode(event.which);
    if (pressedKey.match(/[a-zA-Z\.]/)){
      let newLetter = pressedKey;
//check if correct letter, and if letter has been used before
      if(game.lettersUsed.indexOf(newLetter) !== -1 && game.secretWord.indexOf(newLetter) == -1){
        alert('wrong, try again');
        this.errorsLeft += 1;
      } else if(game.lettersUsed.indexOf(newLetter) !== -1){ 
          alert('this letter has already been used');
        } else if(game.secretWord.indexOf(newLetter) !== -1){
          game.lettersUsed.push(newLetter);
          game.lettersGuessed.push(newLetter);
          } else {
            game.lettersUsed.push(newLetter);
            };
    } else {
        alert('Only Letters Please');
        this.errorsLeft += 1;
        return false;
      };
};

//deduct point from counter if wrong letter and if won/lost
addWrongLetter(event) {
  if(this.secretWord.indexOf(event.key) == -1){
    this.errorsLeft -= 1;
  };
  if(this.errorsLeft == 0) {
    alert('You lost your head, click button to try again');
    game = new Hangman();
    game.getWord();
    console.log(game.secretWord);
  }
};
checkWinner() {
  for(let i = 0; i < this.secretWord.length; i++){
    if(this.letterHeld.indexOf(this.secretWord[i]) == -1){
      this.letterHeld.push(this.secretWord[i]);
    };
  };
  if(game.lettersGuessed.length === this.letterHeld.length){
    alert('WINNER');
  };
};
};


//Start game on click
document.getElementById('start-game-button').onclick = function () {
game = new Hangman();
game.getWord();
console.log(game.secretWord);
};

$(document).keypress(function(e){
game.checkClickedLetters(e);
game.checkWinner();
game.addWrongLetter(e);
console.log(game.errorsLeft);
});
