var hangman;

function Hangman() {
    this.words = ["hola", "bye", "chau", "alex", "alina"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
    return String(this.words[Math.floor(Math.random() * this.length)]);
};

Hangman.prototype.checkIfLetter = function(keyCode) {
    this.letters.push(keyCode);
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
    if (this.letters.includes(key)) {
        return true;
    }
    return false;
};


Hangman.prototype.addCorrectLetter = function(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
}

Hangman.prototype.addWrongLetter = function(letter) {
    this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
    if (this.errorsLeft === 0) {
        return true;
    }
    return false;
};

Hangman.prototype.checkWinner = function() {
    if (this.guessedLetter.length === this.secretWord.length) {
        return true;
    }
    return false;
};

document.getElementById('start-game-button').onclick = function() {
    hangman = new Hangman();
};


document.onkeydown = function(e) {

};