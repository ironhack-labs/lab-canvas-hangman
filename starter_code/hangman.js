var hangman;

function Hangman() {
   this.words=["hola","Debora","Davinia"];
   this.secretWord=""; // palabra a adiviniar
   this.letters=[]; //letras intentadas
   this.guessedLetter=""; // letras adivinadas
   this.errorsLeft=10;
}

Hangman.prototype.getWord = function () {
    if (this.words.length>=2){
      var ind = Math.floor(Math.random()*this.words.length);
      return this.words[ind];
    }
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return ((64<keyCode)&&(keyCode<91));
};

Hangman.prototype.checkClickedLetters = function (key) {
    var isnot= true;
    this.letters.forEach(function(l){
       if (l===key){
         return false;
       }
    });
    return isnot;
};

Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter+=this.secretWord[i].toUpperCase();
    this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
    this.errorsLeft-=1;
};

Hangman.prototype.checkGameOver = function () {
    return (!this.errorsLeft===0)
};

Hangman.prototype.checkWinner = function () {
    return this.guessedLetter.length===this.secretWord.length;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
