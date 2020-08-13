class Hangman {
    constructor(words) {
        this.words = words;
        let numeroRandom = Math.floor(Math.random() * words.length)
        this.secretWord = this.words[numeroRandom];
        this.letters = [];
        this.guessedLetters = '';
        this.errorsLeft = 10;
    }

    pickWord() {
        // ... your code goes here
        let randomWord = this.secretWord;
        return randomWord;
    }

    checkIfLetter(keyCode) {
        // ... your code goes here
        if (keyCode >= 65 && keyCode <= 90) {
            return true;
        } else {
            return false;
        }
    }

    checkClickedLetters(letter) {
        // ... your code goes here
        return !this.letters.includes(letter)
    }

    addCorrectLetter(letter) {
        // ... your code goes here
        this.guessedLetters += letter
        this.letters.push(letter);
    }

    addWrongLetter(letter) {
        // ... your code goes here
        if (!this.letters.includes(letter)) {
            this.letters.push(letter)
        }
        this.errorsLeft--;
    }

    checkGameOver() {
        // ... your code goes here
        return this.errorsLeft > 0 ? false : true;
    }

    checkWinner() {
        // ... your code goes here
        let guessedLettersStr = this.guessedLetters.split("").sort().join()
        let secretWordStr = this.secretWord.split("").sort().join()
        return guessedLettersStr === secretWordStr ? true : false;
    }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

        // HINT (uncomment when start working on the canvas portion of the lab)
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);
        // ... your code goes here
        hangmanCanvas.createBoard()
    });
}

document.addEventListener('keydown', event => {
    // React to user pressing a key
    // ... your code goes here
    // checkIfLetter(keydown);
    let secretWordArray = hangman.secretWord.split("");
    let userKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (hangman.checkIfLetter(event.keyCode)) {
        if (secretWordArray.includes(userKey)) {
            if (hangman.checkClickedLetters(userKey)) {
                // hangman.addCorrectLetter(userKey);
                secretWordArray.forEach((elemento, index) => {
                        if (elemento === userKey) {
                            hangmanCanvas.writeCorrectLetter(index);
                            hangman.addCorrectLetter(userKey);
                        }
                    })
                    // const index = (element) => element == userKey;
                    // let indexDelCoso = secretWordArray.findIndex(index);
                    // let indexDelCoso = secretWordArray.findIndex(secretWordArray => secretWordArray === userKey);
                    // hangmanCanvas.writeCorrectLetter(indexDelCoso);
                if (hangman.checkWinner()) {
                    // alert("yoru ausome");
                    hangmanCanvas.winner();
                }
            } else {
                alert("letter already pucheired");
            }
            // ya matenme pofavo ...
        } else {
            if (hangman.checkClickedLetters(userKey)) {
                hangmanCanvas.writeWrongLetter(userKey, hangman.errorsLeft);
            } else {
                alert("letter already puched MAL");
            }
            alert(`tas mal, nomas te quedan ${hangman.errorsLeft-1} intentos`);
            hangmanCanvas.drawHangman(hangman.errorsLeft);
            hangman.addWrongLetter(userKey);
            // hangmanCanvas.writeWrongLetter(userKey, hangman.errorsLeft);
            if (hangman.checkGameOver()) {
                // alert("you suck, kill yourselff");
                hangmanCanvas.gameOver();
            }
        }

    }
});