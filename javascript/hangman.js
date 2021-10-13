class Hangman {
    constructor(words) {
        this.words = words;
        // ... your code goes here
        this.secretWord = words[0];
        this.letters = [];
        this.guessedLetters = "";
        this.errorsLeft = 10;
    }

    randomRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    pickWord() {
        // ... your code goes here
        // this.words
        const randomNumber = this.randomRange(0, this.words.length);
        let pickedWord = this.words[randomNumber];
        this.secretWord = pickedWord;
        return pickedWord;
    }
    checkIfLetter(keyCode) {
        return keyCode >= 65 && keyCode <= 90;
    }

    checkClickedLetters(letter) {
        // a method that should check if the letter passed as an 
        // argument has already been pressed. It should return 
        // true if it was not or false in the opposite case.
        // ... your code goes here
        
        console.log(`${letter} has already been pressed?`, this.guessedLetters.includes(letter))
        return !this.guessedLetters.includes(letter);
    }

    addLetterToLetters (letter) {
        this.isCorrectLetter(letter) ? this.letters.push(letter) : console.log(`${letter} alreade guessed`);
    }

    isCorrectLetter(letter) {
        // checks if the letter is in the secret word, returns true or false
        console.log(`${letter} is a correct letter?`, this.secretWord.includes(letter))
        return this.secretWord.includes(letter)
    }

    addCorrectLetter(letter) {
        /*method that should add the passed letter to the guessedLetters
         property. This could be a good place to check if the user won.*/
        // ... your code goes here
        this.guessedLetters += letter;
    }

    addWrongLetter(letter) {
        /*a method that should subtract one from the variable errorsLeft.
        It also should push this letter in the array of letters if 
        the letter is not there already.*/
        // ... your code goes here
        this.errorsLeft--;
        if (this.checkClickedLetters(letter)) {
            this.addCorrectLetter(letter);
        }
    }

    checkGameOver() {
        return this.errorsLeft <= 0;
    }

    checkWinner() {
        // ... your code goes here
        // return this.secretWord === this.guessedLetters
        // this.secretWord;
        // this.guessedLetters;

        let isComplete = [];
        for (let char of this.secretWord) {
            if (this.guessedLetters.includes(char)) isComplete.push(true);
            else isComplete.push(false);
        }
        return !isComplete.includes(false);
    }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
    startGameButton.addEventListener("click", (event) => {
        hangman = new Hangman([
            "node",
            "javascript",
            "react",
            "miami",
            "paris",
            "amsterdam",
            "lisboa",
        ]);

        // HINT (uncomment when start working on the canvas portion of the lab)
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);

        // // // ... your code goes here
        hangmanCanvas.createBoard();
    });
}

document.addEventListener("keydown", (event) => {
    // React to user pressing a key
    // ... your code goes here
    hangman.checkIfLetter(event.keyCode);
    // console.log(event);
    // console.log(event.key);

    if (hangman.checkIfLetter(event.keyCode)) {
        if (hangman.checkClickedLetters(event.key)) {
            hangman.addLetterToLetters(event.key)
            if (hangman.isCorrectLetter(event.key)) {
                hangman.addCorrectLetter(event.key)
                //das Wort "letter"
                // array mit _ _ t t _ _ - mit gleicher länge (index werte)
                // for letter in  array
                for (let letterIndex in hangman.secretWord) {
                    if (hangman.secretWord[letterIndex] === event.key)
                        this.hangmanCanvas.writeCorrectLetter(letterIndex)
                }
                //this.hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key)) //send index of correct letter to canvas
                if (hangman.checkWinner()){
                    console.log("You WON!!!!");
                }
            }
            else {
                hangman.addWrongLetter(event.key)
                this.hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
                if (hangman.checkGameOver()) {
                    console.log("You LOST Bigtime!!!!");
                }
            }
        }
    }

});
