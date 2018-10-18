var hangman;

function Hangman() {
  this.words = ['anelka','lizarazu','barthez'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
    return this.words[Math.floor((Math.random()*this.words.length))];
};


//chiffres de 65 et 122;
Hangman.prototype.checkIfLetter = function (keyCode) {
if (keyCode > 64 && keyCode < 92){
  return true;
}
else return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
//Si key est déjà présent dans l'array, return false;
//Si key n'est pas présent, return true;
for(var i=0;i<this.letters.length;i++)
{
    if(this.letters[i]===key){return false;}
}
return true;
};

Hangman.prototype.addCorrectLetter = function (i) {
this.guessedLetter += this.secretWord.charAt(i).toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
if (this.errorsLeft==0){
  return true;
}
else if (this.errorsLeft>0){return false};
};

Hangman.prototype.checkWinner = function () {
  for(var i=0;i<this.guessedLetter.length;i++)
  {
    if(this.guessedLetter.indexOf(this.secretWord[i])==-1) {return false;}
 ;}
 return true;

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
