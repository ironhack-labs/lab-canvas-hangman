class Hangman{
  constructor(words) {
    this.words = words;
    this.secretWord = (this.words[Math.floor(Math.random() * this.words.length)]);
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
}

pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)]
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
    return !this.letters.includes(letter);
}

addCorrectLetter(keyCode) {
    this.guessedLetters = keyCode;
}

addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter)
}

checkGameOver() {
    if (this.errorsLeft > 0) {
        return false
    } else {
        return true
    }
}

checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
        if (this.guessedLetters.includes(this.secretWord[i])) {
            return true
        } else {
            return false;
        }
    }
}
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
    startGameButton.addEventListener('click', event => {
        hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
        hangmanCanvas = new HangmanCanvas(hangman.secretWord);
        hangman.secretWord = hangman.pickWord();
        hangmanCanvas.drawLines()
  });
}



document.addEventListener('keydown', event => {
    const index = hangmanCanvas.secretWord.split('').indexOf(event.key);
    console.log(hangmanCanvas.secretWord)

    if (index === -1) {
        hangman.errorsLeft = hangman.errorsLeft - 1;
        console.log('errors left', hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft - 1)
        if(hangman.errorsLeft===0){
          hangmanCanvas.gameOver()
        }
        } else {
        hangmanCanvas.writeCorrectLetter(index)
        hangman.addCorrectLetter(index)
        if(hangman.guessedLetters===hangmanCanvas.secretWord){
            hangmanCanvas.winner();
        }
      }
});
