class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10
  }

  pickWord() {

    return this.words[Math.floor(Math.random() * this.words.length)];
    
  }
    
  checkIfLetter(keyCode) {
    
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {

    if (this.letters.includes(letter)) {
      console.log("ya has pulsado esa tecla")
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
 
    if (!this.letters.includes(letter)) {
      var splitSecretWord = this.secretWord.split("")
   
      if (splitSecretWord.includes(letter)) {
        console.log("has acertado la letra: ", letter)

        let numLetter = this.secretWord.split(letter).length-1;
        let x=0
        while (x < numLetter) {
          this.guessedLetters += letter;
          x++
        }
        this.letters.push(letter);
        this.checkWinner();
        return true;
      }
    }
    return false;
 }

  addWrongLetter(letter) {
    
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft -= 1;
      console.log("has fallado, te quedan", this.errorsLeft)
      this.letters.push(letter)
    }

   this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
       return false
    } else {
      console.log("LOSE!")
      return true
    }
  }

  checkWinner() {

    var splitSecretWord = this.secretWord.split(""); 
    let aux = splitSecretWord.map(x => {
      if(this.guessedLetters.includes(x)) {
        return x;
      } else {
        return '_';
      }
    });
    console.log(aux.join(' '));
    
    if (aux.join('') == splitSecretWord.join('')) {
      console.log("WIN")
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    
   
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

  // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  if(hangman.checkIfLetter(event.keyCode)) {

    if(hangman.checkClickedLetters(event.key)) {

      if (hangman.addCorrectLetter(event.key)) {

      } else {
        hangman.addWrongLetter(event.key)
      }
    } 
  } else {
    console.log("No es una letra")
  }


});

