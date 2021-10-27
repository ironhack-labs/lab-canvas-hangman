class Hangman {
    constructor(words) {
        this.words = words;
        this.secretWord = '';
        this.letters = [];
        this.guessedLetters = '';
        this.errorsLeft = 10;
        this.wrongLetters = [];
    }

    pickWord() {
        return this.words[Math.floor(Math.random() * (this.words.length))];
    }

    checkIfLetter(keyCode) {
        return keyCode > 64 && keyCode < 91;
    }

    checkClickedLetters(letter) {
        const check = this.letters.includes(letter);
        if (!check) {
            this.letters.push(letter);
        }
        console.log('check', check, letter);
        return !check;
    }

    checkCorrectLetter(letter) {
        return this.secretWord.includes(letter);
    }

    addCorrectLetter(letter) {
        for (let i = 0; i < this.secretWord.length; i++) {

            if (letter == this.secretWord[i]) {
                this.guessedLetters += letter;
                hangmanCanvas.writeCorrectLetter(i, letter);
            }
        }

        if (this.checkWinner()) hangmanCanvas.winner();

    }

    addWrongLetter(letter) {
        this.errorsLeft -= 1;
        this.wrongLetters.push(letter);
        hangmanCanvas.writeWrongLetter(this.wrongLetters, this.errorsLeft);
        if (this.checkGameOver()) hangmanCanvas.gameOver();
    }

    checkGameOver() {
        return !(this.errorsLeft > 0);
    }

    checkWinner() {
        let secretWord2 = this.secretWord.split('').sort().join('');
        let guessedlett = this.guessedLetters.split('').sort().join('');
        console.log(guessedlett, secretWord2)

        return secretWord2 == guessedlett;

    }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
        hangman.secretWord = hangman.pickWord();
        console.log(hangman.secretWord);
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);
        hangmanCanvas.createBoard(hangman.secretWord);

    });
}

document.addEventListener('keydown', event => {
    // React to user pressing a key
    const keyName = event.keyCode;
    //console.log(keyName)
    if (hangman) {
        if (hangman.checkIfLetter(keyName)) {
            if (hangman.checkClickedLetters(event.key)) {

                if (hangman.checkCorrectLetter(event.key)) {
                    console.log('correcto')
                    hangman.addCorrectLetter(event.key);
                } else {
                    console.log('incorrecto')
                    hangman.addWrongLetter(event.key);
                }
            }
        } else { alert('Wrong letter') }
    } else { alert('start the game') }


});