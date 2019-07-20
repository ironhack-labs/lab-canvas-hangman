let hangman;
let canvas;

class Hangman {
  constructor(words) {
    this.words = ['test', 'test22342', 'test3234234234234']
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord () {
    let randomIndex = Math.floor(Math.random() * this.words.length)
    this.secretWord = this.words[randomIndex];
    return this.words[randomIndex];
  }


  checkIfLetter (keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      this.letters.push(keyCode);
      return true;
    } else{
      return false;
    }
  }

  checkClickedLetters (key)  {
    if (this.letters.includes(key)) {
      return false;
    } else {
      return true;
    }
  }

  checkGameOver ()  {
    if (this.errorsLeft === 0)  {
      return true;
    } else {
      return false;
    }
  }

  addLetter (character)  {
    if (this.secretWord.includes(character))  {
      this.addCorrectLetter(character);
    } else {
      this.addWrongLetter(character);
    }
  }

  checkWinner () {
    if (this.secretWord === this.guessedLetter)  {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter (positionInWord) {
    this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
  }


  addWrongLetter (char) {
     this.errorsLeft -= 1;
     this.letters.push(char);
  }
  

}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  canvas = new HangmanCanvas(hangman);
  canvas.drawLines();
 
};


document.onkeydown = function (event) {

   let char = String.fromCharCode(event.keyCode);
   // alert(char)
   if (hangman.secretWord.toUpperCase().includes(char)) {
     hangman.addCorrectLetter(hangman.secretWord.toUpperCase().indexOf(char))
   } else {
     hangman.addWrongLetter(char)
   }
  canvas.writeCorrectLetter();
  // hangman.addWrongLetter();
  // hangman.addCorrectLetter();
  // hangman.checkIfLetter();

  
};
