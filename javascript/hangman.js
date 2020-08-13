class Hangman {


    constructor(words) {

        // ... your code goes here

        this.words = words;
        this.secretWord = this.pickWord();
        this.letters = [];
        this.guessedLetters = ``;
        this.errorsLeft = 10;

    }

    pickWord() {
        // ... your code goes here
        let size = this.words.length;
        let randomWord = Math.floor(Math.random() * size);
        return this.words[randomWord];
    }

    checkIfLetter(keyCode) {
        if (keyCode >= 65 && keyCode <= 90) {
            return true
        } else {
            return false
        }

        // ... your code goes here
    }

    checkClickedLetters(letter) {

        /*  let letterCheck = this.letters.include(letter) */


        // ... your code goes here


        if (!this.letters.includes(letter)) {
            this.letters.push(letter)
            return true;
        } else {
            return false;
        }

        /*    if (!letterChecker) {
            return false;
        } else {
            return true;
        }
 */




    }
    addCorrectLetter(letter) {
        // ... your code goes here
        /*  if (this.checkClickedLetters(letter) === true)
             this.guessedLetter += letter
         this.letters.push(letter) */

        // let existe = this.secretWord.indexOf(letter);

        /* for (let i = 0; i <= this.secretWord.length; i++) {
            if (this.secretWord[i] == letter) {
                this.guessedLetters += letter;
                this.hangmanCanvas.writeCorrectLetter(i);
            }
        } */
        this.guessedLetter += this.secretWord[letter]

        this.checkWinner()

        /* 
                this.guessedLetter += letter;
        */
        /* this.checkWinner(); */
        /*         this.letters.push(this.secretWord[letter])
         */
    }

    addWrongLetter(letter) {
        // ... your code goes here
        this.errorsLeft--
            this.checkGameOver()
    }

    checkGameOver() {
        // ... your code goes here
        if (this.errorsLeft === 0) return true;
        return false;

    }

    checkWinner() {
        // ... your code goes here
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.guessedLetters.includes(this.secretWord[i])) {
                return true
            } else {
                return false
            }
        }
    }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

        // HINT (uncomment when start working on the canvas portion of the lab)
        hangman.secretWord = hangman.pickWord();
        canvas = new HangmanCanvas(hangman.secretWord);
        canvas.createBoard();
        canvas.drawLines();

        // ... your code goes here
    });
}

document.addEventListener('keydown', e => {
    // React to user pressing a key
    // ... your code goes here
    if (!hangman.checkGameOver() && !hangman.checkWinner()) {
        if (hangman.checkIfLetter(e.which)) {
            if (hangman.checkClickedLetters(e.key)) {
                if (hangman.secretWord.includes(e.key)) {
                    // correct letter
                    const indexes = [];

                    for (let i = 0; i < hangman.secretWord.length; i++) {
                        if (hangman.secretWord[i] === e.key) indexes.push(i);
                    }

                    indexes.map(index => {
                        hangman.addCorrectLetter(index);
                        canvas.writeCorrectLetter(index);
                    })

                } else {
                    // wrong letter
                    hangman.addWrongLetter();
                    canvas.writeWrongLetter(e.key, hangman.errorsLeft);
                    canvas.drawHangman(canvas.hangmanShape[9 - hangman.errorsLeft])
                }

            } else {
                alert('Mete una letra distinta, esa ya la ingresaste')
            }
        }
    }
});