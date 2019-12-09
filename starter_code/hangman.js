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

    validateLetter(letter) {
        let indexes = this.secretWord
                        .split('')
                        .map((l, i) => { if (l === letter) return i })
                        .filter(pos => pos > -1);

        this.addCorrectLetter(indexes);
        return indexes;
    }

    addCorrectLetter(indexes) {
        indexes.forEach(i => this.guessedLetter += this.secretWord[i]);
        this.checkWinner();
    }

    addWrongLetter(letter) {
        this.letters.push(letter);
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
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
};

document.onkeydown = (e) => {

    if (!hangman.checkIfLetter(e.keyCode) || hangman.checkWinner() || hangman.checkGameOver()) {
        return;
    }

    if (hangman.checkClickedLetters(e.key)) {

        let indexes = hangman.validateLetter(e.key);

        if (indexes.length) {
            hangmanCanvas.writeCorrectLetter(indexes);
            if (hangman.checkWinner()) hangmanCanvas.winner();
        } else {
            hangman.addWrongLetter(e.key);
            hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
            hangmanCanvas.drawHangman(hangman.errorsLeft);

            if (hangman.checkGameOver()) hangmanCanvas.gameOver();
        }
    }
};
