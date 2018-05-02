var hangman;

function Hangman() {
  this.words = ['reach','caring','cart','bear','hover','join','babies','repeat','bridge','elite','ear','four','eminent','leg','shivering','fireman','sidewalk','trip','cheerful','glistening','discussion','irritating','laugh','injure','examine','enchanted','anxious','wool','huge','knock','lewd','wrap','callous','notice','crooked','bashful','clover','ill-fated','weigh','toad','government','replace','pizzas','soap','rampant','tangy','reproduce','harsh','field','form'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 7; 
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
 
  let keys = {65 : "a",  66 : "b",  67 : "c",  68 : "d",  69 : "e",  70 : "f",  71 : "g",  72 : "h",  73 : "i",  74 : "j",  75 : "k",  76 : "l",  77 : "m",  78 : "n",  79 : "o",  80 : "p",  81 : "q",  82 : "r",  83 : "s", 84 : "t",  85 : "u",  86 : "v",  87 : "w",  88 : "x",  89 : "y",  90 : "z",}

  return (keys[keyCode]== undefined) ? false : true;

};

Hangman.prototype.checkClickedLetters = function (key) {

  if(this.letters.indexOf(key.toUpperCase()) == -1){
    return true;
  }else{
    return false;
  }

};

//the variable "i" is a index. :/ wish jasmine would have hinted it. 

Hangman.prototype.addCorrectLetter = function (i) {

  //check if letter has already been guess, if it has not proceed
  if(this.guessedLetter.indexOf(i) == -1){
    //iterate through all letters of secret word and add as many iterations  
    //of letter using passed letter variable to guessed letters.
    this.secretWord.split("").forEach(letter => {
      if(i == letter){
         this.guessedLetter += i;
      }
    });

  }

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft = this.errorsLeft - 1;
  this.letters += letter.toUpperCase();
};

Hangman.prototype.checkGameOver = function () {
    return (this.errorsLeft === 0 ) ? true: false;
};

Hangman.prototype.checkWinner = function () {
    return (this.guessedLetter.length == this.secretWord.length) ? true: false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard();
  console.log(hangman.secretWord)

  this.remove();
};

document.onkeydown = function (e) {

    if(hangman.checkIfLetter(e.keyCode)){
        let letter = e.key;
    
        if(hangman.checkClickedLetters(letter)){

          var letterIndex = hangman.secretWord.indexOf(letter);
          console.log(letter)
          console.log(letterIndex)
          if(letterIndex == -1){
            hangman.addWrongLetter(letter);
            hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)
          }else{
            hangman.addCorrectLetter(letter);
            hangmanCanvas.writeCorrectLetter(letterIndex);
          }
          setTimeout(function(){

            if(hangman.errorsLeft <= 1){
              hangmanCanvas.gameOver()
            }
    
            // console.log(hangman.guessedLetter.length)
            // console.log(hangman.secretWord.length);
    
            if(hangman.secretWord.length == hangman.guessedLetter.length ){
              hangmanCanvas.winner();
            }
          },300)
    
  
        }
        
    }

  };
