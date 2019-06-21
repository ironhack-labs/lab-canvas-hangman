var hangman;

class Hangman {
  constructor() {
    this.words = ['hello']; 
    this.secretWord = this.getWord(); 
    this.letters = [];
    this.guessedLetters = [];
    this.errorsLeft = 10;
  }
  getWord () {
    let randomIndex = Math.floor(Math.random() * this.words.length);

    return this.words[randomIndex].split('');
  };

  checkClickedLetter(letter) {
    if(this.secretWord.includes(letter)) { // if the letter includes in my word
      if(this.letters.includes(letter)) { // if the letter includes in the letters already clicked
        console.log("letter already clicked");

        this.errorsLeft--
        drawHangman(this.errorsLeft);
        this.checkIfLoose();
      } else { 
        console.log("new letter and correct letter") 
        this.pushLetters(letter);        
        this.letters.push(letter); 
        drawCorrectLetters(letter);
        this.checkIfWin()
      }
    } else {
      this.errorsLeft--
      this.letters.push(letter);
      drawHangman(this.errorsLeft);
      this.checkIfLoose();
    }
    console.log(this.errorsLeft)
    drawAllLetters(this.letters);
  }

  initializeGame() {
    initializeCanvas();
    drawCharacters(this.secretWord, this.secretWord.length);
  }

  returnIndexPositions(letter) {
    const indexes = [];

    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.secretWord[i] === letter) {
        indexes.push(i);
      }
    }

    return indexes;
  }

  pushLetters(letter) {
    const indexes = this.returnIndexPositions(letter);
    for(let i = 0; i < indexes.length; i++) {
      this.guessedLetters[indexes[i]] = letter
      // this.guessedLetters.splice(indexes[i], 0, letter)
    }
  }

  checkIfWin() {
    if(this.secretWord.join('') === this.guessedLetters.join('')) {
      drawWinImg()
    }
  }

  checkIfLoose() {
    if(this.errorsLeft === 0) {
      drawLooseImg();
      return;
    }
  }
}


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.initializeGame();
  console.log("New hangman")
};

document.onkeydown = function (e) {
  const letter = e.key;

  if(e.keyCode > 64 && e.keyCode < 91) {
    hangman.checkClickedLetter(letter);
  }
};
