class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let word = Math.floor(Math.random() * this.words.length);
    this.guessedLetters.padStart(word.length, "_"); 
    this.secretWord = this.words[word];
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {return true} else {return false}
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {return false} else {return true}
  }

  addCorrectLetter(letter) {
      this.letters.push(letter);
      let searchI = 0;
      let currentLetter = "";
      do {
        searchI = this.secretWord.indexOf(letter, searchI);
        currentLetter = this.secretWord[searchI];
        hangmanCanvas.writeCorrectLetter(searchI);
        this.guessedLetters = guessedLetters.substring(0, searchI) + currentLetter + guessedLetters.substring(searchI+1);
      } while (this.secretWord.indexOf(letter, searchI) > -1)
     
    this.checkWinner();
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {this.errorsLeft--}
    if (!this.letters.includes(letter)) {this.letters.push(letter)}
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
    hangmanCanvas.drawHangman(this.errorsLeft);
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {return false} else {return true}
  }

  checkWinner() {
    if (this.secretWord === this.guessedLetters) {
      return true
    } else {return false}
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    // hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman = new Hangman (['abdca']);
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    
    

   
    });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key);
      } else {
        hangman.addWrongLetter(event.key);
      }
    } else {alert("Já escolheu essa letra!")}
  }
});


/* testing drawing stuff 
let hman = document.getElementById("hangman")
    hman.style = "border: 1px solid black";
    hangmanCanvas.context.beginPath();
    hangmanCanvas.context.lineWidth = 5;
    let posX = hman.width / 3;
    let posY = hman.height - 100;
    for (let i = 0; i < 5; i++) {
      hangmanCanvas.context.lineTo(posX, posY);
      posX += 50;
      hangmanCanvas.context.lineTo(posX, posY);
      posX += 30;
      hangmanCanvas.context.moveTo(posX, posY)
      }
    
     hangmanCanvas.context.font = '60px serif';
     hangmanCanvas.context.fillText("A", posX-10, posY-10);
    
    hangmanCanvas.context.stroke();
    hangmanCanvas.context.closePath();

    posX = hman.width / 6;
    hangmanCanvas.context.beginPath();
    hangmanCanvas.context.lineTo(posX, posY);
    hangmanCanvas.context.lineTo(posX + 120, posY);

    hangmanCanvas.context.lineTo(posX + 60, posY - 45);

    hangmanCanvas.context.lineTo(posX, posY);

    posX += 60; posY -=45;
    hangmanCanvas.context.lineTo(posX, posY);

    posY -=600;
    hangmanCanvas.context.lineTo(posX, posY);

    posX +=400;
    hangmanCanvas.context.lineTo(posX, posY);

    posY +=100;
    hangmanCanvas.context.lineTo(posX, posY);
   
    posY += 40;
    hangmanCanvas.context.moveTo(posX, posY);
    hangmanCanvas.context.arc(posX, posY, 40, 0, 360);

    posY += 40;
    hangmanCanvas.context.moveTo(posX, posY);
    hangmanCanvas.context.lineTo(posX, posY);
    posY += 150;
    hangmanCanvas.context.lineTo(posX, posY);

    posX -= 50; posY += 75;
    hangmanCanvas.context.lineTo(posX, posY);

    posX += 50; posY -= 75;
    hangmanCanvas.context.lineTo(posX, posY);
    posX += 50; posY += 75;
    hangmanCanvas.context.lineTo(posX, posY);
    
    hangmanCanvas.context.stroke();
    hangmanCanvas.context.closePath();*/