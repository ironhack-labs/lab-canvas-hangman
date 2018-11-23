var hangman;

function Hangman() {
    this.words = ["hola","adios","Juan"];
    this.secretWord = toString(this.getWord); //Arreglarlo más adelante
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    this.allLetters= '';

 }

Hangman.prototype.getWord = function () {

    var word = this.words[Math.floor(this.words.length*Math.random())];
    return word;
    console.log(word);
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    console.log(keyCode);
    if((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        return true;
    } else {
        return false;
    }
 };


Hangman.prototype.checkClickedLetters = function (key) {
    if ((this.letters).includes(key)) {
        return false
    } else{
    return true
    }
};


 Hangman.prototype.addCorrectLetter = function (i) {
     this.guessedLetter+=this.secretWord[i].toUpperCase();
};

 Hangman.prototype.addWrongLetter = function (letter) {

     if (this.letter != true ){
         return false
     } else{
         return true
     }

 };

 Hangman.prototype.checkGameOver = function () {
if(this.errorsLeft === 0){
    return true
} else{
    return false
}
 };

 Hangman.prototype.checkWinner = function () {
     if(this.allLetters === true){
         return false
     } else{
         return true
     }
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
