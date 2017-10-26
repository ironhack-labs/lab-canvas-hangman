'use strict';

var hangman;

function Hangman() {
    this.words = ['Mesa', 'Armario', 'Telefono', 'Pizarra', 'Lampara'];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
    var self = this;
    self.secretWord = self.words[Math.floor(Math.random() * self.words.length)];
    return self.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
    if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122) {
        return true;
    } else {
        return false;
    }
};

Hangman.prototype._checkClickedLetters = function(key) {
    console.log("Key "  + key);
    if (this.letters.find(function(letter) { return letter === key; })) {
        return false;
    } else {
        return true;
    }

};

Hangman.prototype._addCorrectLetter = function(i){
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
    if (this.secretWord.indexOf(letter) <= -1){
        this.errorsLeft--;
        this._checkGameOver();
    }
};

Hangman.prototype._checkGameOver = function() {
    if (this.errorsLeft === 0) {
        return true;
    } else {
        return false;
    }
};

Hangman.prototype._checkWinner = function() {
    if (this.guessedLetter.length === this.secretWord.length) {
        return true;
    } else {
        return false;
    }
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
