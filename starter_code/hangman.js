var hangman;

function Hangman() {
    this.words = []
    this.secretWord = "";
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
    console.log(typeof this.words[Math.floor(Math.random() * this.words.length)].toString()) //returns random index from array
};

Hangman.prototype.checkIfLetter = function(keyCode) {

    if (keyCode >= 65 && keyCode <= 90) {
        return true
    } else { return false }
};

Hangman.prototype.checkClickedLetters = function(key) {
    if (!this.letters.includes(key)) {
        return true
    } else return false
};

Hangman.prototype.checkGameOver = function() {

    if (this.errorsLeft === 0) {
        return true
    } else { return false }
};

Hangman.prototype.addCorrectLetter = function(num) {

    return this.guessedLetter += this.secretWord[num].toUpperCase()

};

Hangman.prototype.addWrongLetter = function(letter) {

};

Hangman.prototype.checkWinner = function() {
    for (var i = 0; i < this.secretWord.length; i++) {
        var currentLetter = this.secretWord[i]
        if (!this.guessedLetter.includes(currentLetter)) {
            return false
        }
    } return true
};

// document.getElementById('start-game-button').onclick = function() {
//     hangman = new Hangman();
// };


// document.onkeydown = function(e) {

// };
