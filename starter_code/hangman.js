let secretWordHandover = "";

class Hangman {
  constructor() {
    this.words = ["javascript", "canvas", "document"];
    this.secretWord = "";
    this.letters = []; //constains all entered-in letters
    this.guessedLetter = ""; //contains just the correct letters which are yet guessed
    this.errorsLeft = 10;
  }

  getWord() {
    let randomWordId = Math.floor( Math.random() * this.words.length );
    this.secretWord += this.words[randomWordId];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return (keyCode>=65 && keyCode<=90);
  }
  
  //validates whether the char is entered first (true) or one next time (false)
  //returns wrong boolean state as required by tests
  checkClickedLetters(key) {
    let charAlreadyPresent = !this.letters.includes(key);
    if (this.letters.includes(key) === false) {
      this.letters.push(key);
      //console.log(this.letters)
    }
    //console.log("CharPresent?: ", charAlreadyPresent);
    return charAlreadyPresent;
  }

  //adds letter to guessedLetter
  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    if (this.checkWinner() === true) {
      //do someting - won
      console.log("won");
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft--; //decrease try count for the wrong guess
    if (this.checkGameOver === true) {
      //do someting - gameover
      console.log("gameover");
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let secretWordArray = this.secretWord.split("");
    let guessedLetterArray = this.guessedLetter.split("");
    return secretWordArray.reduce( (tot, val) => {
      //console.log( "tot:", tot, " val: ", val, " comp: ", guessedLetterArray.includes(val));
      return ( tot && guessedLetterArray.includes(val) );
    }, true);
  }
}

document.getElementById('start-game-button').onclick = () => {
  let hangman = new Hangman();
  hangman.getWord();
  let hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  document.onkeydown = (e) => {
    if (hangman.checkIfLetter(e.keyCode) === true) {
      //console.log("checkIfLetter: ", hangman.checkIfLetter(e.keyCode), " keyCode: ", e.keyCode);
      if (hangman.checkClickedLetters(e.key) === true) { //key entered first (true)
        console.log("new char entered in");
        //console.log("corrLet: ", hangman.secretWord.indexOf(e.key));
        if (hangman.secretWord.includes(e.key) === true) { //key exists in secret
          hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
          hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(e.key));
        }
      }
      else if (hangman.checkClickedLetters(e.key) === false) { //key entered 2nd + time (false)
        console.log("existing char entered in");
        console.log("charInSecWord?: ", hangman.secretWord.includes(e.key));
        hangman.addWrongLetter(e.key);
      }
    }
    console.log("words: ", hangman.words);
    console.log("secretWord: ", hangman.secretWord);
    console.log("letters: ", hangman.letters);
    console.log("guessedLetter: ", hangman.guessedLetter);
    console.log("errorsLeft: ", hangman.errorsLeft);
  }
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

/*
function updateCanvas() {
  clearCanvas(hangmanCanvas.ctx);
  if (drawLinesCounter === 0) {
    hangmanCanvas.drawLines();
    drawLinesCounter = 1;
  }
}*/
