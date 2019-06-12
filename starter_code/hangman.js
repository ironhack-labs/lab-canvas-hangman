var hangman;

function Hangman() {

  this.words = ['gatopulpo','rosita','ironhack','generacion',]
  this.secretWord = ''
  this.letters = []
  this.guessedLetter = ''
  this.errorsLeft = 10

}

 Hangman.prototype.getWord = function () {

   this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
   return this.secretWord
 };

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode >= 65 && keyCode <= 90) {
   
    return true
  }

  else {

    return false 
  }

 
 };

 Hangman.prototype.checkClickedLetters = function (key) {

       
    if (this.letters.includes(key) === true) {
      return false
    } else {
      this.letters.push(key)
      return true
    }   

    
 };

 Hangman.prototype.addCorrectLetter = function (i) {
 
   this.guessedLetter += this.secretWord[i].toUpperCase()
   
};

Hangman.prototype.addWrongLetter = function (letter) {

  if(this.errorsLeft === 0) {
   
    
    this.checkGameOver ()
  } else {

    this.errorsLeft --
  }
  
 };

Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft === 0) {
    return true
  } else {
    return false 
  }

 };

Hangman.prototype.checkWinner = function () {


 let correctlength = this.secretWord
  let user = this.guessedLetter
  let final= 0
  for (let i = 0; i< user.length ; i++ ){
    for ( let j = 0 ; j < correctlength.length ; j++){
      if ( user[i] == this.secretWord[j]){
          final++
          correctlength = correctlength.replace(/`${checar}`/g, "")
          console.log(correctlength)
      }
    }
  }
  if ( final == correctlength.length){
    return true
  }
  else{
    return false
  }
  
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();

  
};


document.onkeydown = function (e) {

};
