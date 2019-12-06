let hangman;

class Hangman {
    constructor() {
        this.words = ['w', 'o', 'r', 'd'];
        this.letters = [];
        this.secretWord = '';
        this.guessedLetter = '';
        this.errorsLeft = 10;
    }

    getWord() {
        if (!this.words.length) {
            return;
        }

        let randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
    }

    checkIfLetter(keyCode) {
        return keyCode >= 65 && keyCode <= 90;
    }

    checkClickedLetters(key) {
        return !this.letters.includes(key);
    }

    addCorrectLetter(i) {
        this.guessedLetter += this.secretWord[i].toUpperCase();
        this.checkWinner();
    }

    addWrongLetter(letter) {
        this.errorsLeft--;
        this.checkGameOver();
    }

    checkGameOver() {
        return this.errorsLeft === 0;
    }

    checkWinner() {
        return this.guessedLetter.toLowerCase().split('').sort().join('') === this.secretWord.toLowerCase().split('').sort().join('');
    }
}

document.getElementById('start-game-button').onclick = () => {
    hangman = new Hangman();
};

document.onkeydown = (e) => {

};
