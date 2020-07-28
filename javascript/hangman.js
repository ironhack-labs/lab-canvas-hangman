class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    const secretWordChoose = this.words[Math.floor(Math.random() * this.words.length)];
    return secretWordChoose
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if (letter.includes(this.letters) !== true) {
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    function sortAll(item) {
      return item.split('').sort().join('');
    }
    let sortedSecretWord = sortAll(this.secretWord);
    let sortedGuessedLetters = sortAll(this.guessedLetters);
    if (sortedSecretWord === sortedGuessedLetters) {
      return true
    } else {
      return false
    }
  }
}
/* 
this.context = document.getElementById('hangman').getContext('2d');
//draw guy
function drawTheGuy(){
  //draw the stand
//step 1 - triangle
this.context.beginPath();
this.context.moveTo(200, 650);
this.context.lineTo(300, 650);
this.context.lineTo(250, 590);
this.context.lineTo(200, 650);
this.context.stroke()
//step 2 - pole
this.context.beginPath();
this.context.moveTo(250, 590);
this.context.lineTo(250, 150);
this.context.stroke()
//step 3 ___
this.context.beginPath();
this.context.moveTo(250, 150);
this.context.lineTo(350, 150);
this.context.stroke()
//step 4 - |
this.context.beginPath();
this.context.moveTo(350, 150);
this.context.lineTo(350, 200);
this.context.stroke()
//step 5 - head
this.context.beginPath();
this.context.arc(350, 220, 20, (Math.PI / 180), (Math.PI / 180) * 360)
this.context.stroke()
//step 6 - body
this.context.beginPath();
this.context.moveTo(350, 240);
this.context.lineTo(350, 400);
this.context.stroke()
//step 7 - left leg
this.context.beginPath();
this.context.moveTo(350, 400);
this.context.lineTo(330, 450);
this.context.stroke()
//step 8 - last - right leg
this.context.beginPath();
this.context.moveTo(350, 400);
this.context.lineTo(370, 450);
this.context.stroke() 

}
console.log(drawTheGuy()) */

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);
     hangmanCanvas.drawLines();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
