var hangman;

function Hangman() {
this.words = ['hola' , 'jello', 'ornitorrinco']
this.secretWord = this.words[2]
this.letters=[]
this.guessedLetter = ""
this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
return this.secretWord
};

Hangman.prototype.checkIfLetter = function (keyCode) {
if(keyCode >= 61 && keyCode <= 172){
return true
}else{
return false
}
};

Hangman.prototype.checkClickedLetters = function (key) {
return this.letters.indexOf(key) < 0;
};

Hangman.prototype.addCorrectLetter = function (i) {
this.guessedLetter += this.secretWord[i].toUpperCase()
};

Hangman.prototype.addWrongLetter = function (letter) {
if(this.guessedLetter != letter) {
this.errorsLeft--
}

};

Hangman.prototype.checkGameOver = function (errorsLeft) {
if(this.errorsLeft == 0) {
return true
}else{
return false
}

};

Hangman.prototype.checkWinner = function () {
let guess = this.guessedLetter;
let secret = this.secretWord;
let Str = "";
for (i = 0; i < guess.length; i++) {
Str = this.secretWord.replace(this.guessedLetter[i], "");
if (Str === secret) {
return false;
}
guess = secret;
}
// If all the characters have been found in the second string, then return true.
return true;
};

document.getElementById('start-game-button').onclick = function () {
hangman = new Hangman();
};


document.onkeydown = function (e) {


};