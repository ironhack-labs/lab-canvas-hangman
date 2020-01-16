let hangman;

class Hangman {
    constructor() {
        this.words = ['cat', 'dog', 'spiderman'];
        this.secretWord = '';
        this.letters = [];
        this.guessedLetter = '';
        this.errorsLeft = 10;
    }

    getWord() {
        let randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
    }

    checkIfLetter(keyCode) {
        return (keyCode >= 65 && keyCode <= 90);
    }

    checkClickedLetters(key) {
        return !this.letters.includes(key);
    }

    addCorrectLetter(i) {
        let word = this.secretWord.split('');
        this.guessedLetter += word[i].toUpperCase();
    }

    addWrongLetter(letter) {
        return this.errorsLeft--;
    }

    checkGameOver() {
        if (this.errorsLeft <= 0) return true;
        return false;
    }

    checkWinner() {
        if (this.guessedLetter.length === this.secretWord.length) {
            return true;
        } else {
            return false;
        }
    }

}

document.getElementById('start-game-button').onclick = () => {
    hangman = new Hangman();
};

document.onkeydown = (e) => {

};