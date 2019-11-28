class Hangman {
    constructor() {
        this.words = ["dance", "apple", "catch", "admin"];
        this.secretWord = "";
        this.letters = [];
        this.guessedLetter = "";
        this.errorsLeft = 10;
    }

    getWord() {

        return this.words[Math.floor(Math.random() * this.words.length)];

    }

    checkIfLetter(keyCode) {

        if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122) {
            return true;
        } else return false;
    }

    /*Checks if the pressed letter has already been pressed and 
    returns true if it was not or false in the opposite case. */
    checkClickedLetters(key) {
        if (typeof(key) === "string") {
            return !(this.letters.includes(key))
        } else
            return false;
    }

    findPositionLetter(key) {
        return this.secretWord.indexOf(key);
    }

    /*Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.*/
    addCorrectLetter(i) {

        this.guessedLetter = this.guessedLetter + (this.secretWord[i].toUpperCase());
        //this.checkWinner();
    }

    /* Should subtract one from the variable errorsLeft and check if the game is over. */
    addWrongLetter(letter) {
        if (typeof(letter) === "string") {
            this.errorsLeft--;
            this.checkGameOver();
        }

    }

    checkGameOver() {
        if (this.errorsLeft === 0) {
            return true;
        } else return false;
    }

    checkWinner() {
        return this.secretWord.split('').every(letter => this.guessedLetter.includes(letter))
    }
}

document.getElementById('start-game-button').onclick = () => {
    hangman = new Hangman();
    let hangmanCanvas = new HangmanCanvas();
    hangmanCanvas.drawLines();
    hangman.secretWord = hangman.getWord();
};


document.onkeydown = function(event) {
    let posLetter = 0;
    if (!(hangman.checkIfLetter(event.keyCode))) {
        posLetter = hangman.findPositionLetter(event.key);
        hangman.addCorrectLetter(posLetter);
        hangmanCanvas.writeCorrectLetter(posLetter);

    }

};