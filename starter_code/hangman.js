var hangman;

function Hangman() {

  this.words = [];
  this.secretWord = "jose";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  
  var palabra  =  "";
  
  if(this.words.length > 0){

    this.words[Math.floor(Math.random() * this.words.length)];
  }
  
  return palabra;

};

Hangman.prototype.checkIfLetter = function (keyCode) {
  
  return   (keyCode > 64 && keyCode< 91);

};

Hangman.prototype.checkClickedLetters = function (key) {

      return (this.letters.indexOf(key) == -1 );

};

Hangman.prototype.addCorrectLetter = function (i) {
     
    // if(this.checkIfLetter(i)){

      this.guessedLetter +=  this.secretWord[i].toUpperCase();
      

    // }
    
    // this.checkWinner(); 

};

Hangman.prototype.addWrongLetter = function (letter) {

    this.errorsLeft --;
   
};

Hangman.prototype.checkGameOver = function () {

    if(this.errorsLeft == 0){

        return true;
    }else{

        return false;
    }
    
};

Hangman.prototype.checkWinner = function () {

    if(ordenar(this.secretWord.toUpperCase()) == ordenar(this.guessedLetter.toUpperCase())){

      return true;

    }
    else{
      return false;
    }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};

function ordenar(key){

  var cadena = key.split("");
  cadena = cadena.sort();
  cadena = cadena.join("");

  return cadena;


}