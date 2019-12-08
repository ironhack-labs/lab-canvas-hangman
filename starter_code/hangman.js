let hangman;

class Hangman {
    constructor() {
        this.words = ['hola'];
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

    validateLetter(key) {
        let index = this.secretWord.indexOf(key);

        if (index > -1) {
            this.addCorrectLetter(index);
            return index;
        }
    }

    addCorrectLetter(i) {
        this.guessedLetter += this.secretWord[i];
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
    hangman.secretWord = hangman.getWord();

    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.drawLines();
};

document.onkeydown = (e) => {

    if (hangman.checkGameOver() || hangman.checkWinner()) {
        return;
    }

    if (!hangman.checkIfLetter(e.keyCode)) {
        return;
    }

    if (hangman.checkClickedLetters(e.key)) {

        hangman.letters.push(e.key);

        let keyIndex = hangman.validateLetter(e.key);

        if (keyIndex > -1) {
            hangmanCanvas.writeCorrectLetter(keyIndex);
        } else {
            hangman.addWrongLetter(e.key);
            hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
            hangmanCanvas.drawHangman(hangman.errorsLeft);
        }
    }
};
