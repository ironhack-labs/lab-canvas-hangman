class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  //indexOf retorna o primeiro indice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente
  checkClickedLetters(letter) {
    //como eu consigo ver que peguei o negócio certo?
    if (this.letters.indexOf(letter) === -1) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters += letter;
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  //split é usado para dividir um objeto string em uma matriz de strings
  //sort é usado pra classificar os elementos de uma matriz no local e returna a matriz -- tipo em alfabética
  //join é usado para juntar todos os elementos de uma matriz em uma string
  //então ele soltou em strings, ordenou e juntou?
  checkWinner() {
    let guess = this.guessedLetters.split("").sort().join("");
    let secret = this.secretWord.split("").sort().join("");
    if (guess === secret) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", () => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord); //faz a palavra nova aparecer
    hangmanCanvas.createBoard(); //faz a imagem nova aparecer
  });
}

document.addEventListener("keydown", (event) => {
  if (!hangman.checkWinner() && !hangman.checkGameOver()) {
    const isLetter = hangman.checkIfLetter(event.keyCode);

    if (isLetter) {
      const isNotClicked = hangman.checkClickedLetters(event.key.toLowerCase());

      if (isNotClicked) {
        const correctLetterIndex = hangman.secretWord.indexOf(event.key);

        if (correctLetterIndex > -1) {
          hangman.addCorrectLetter(event.key);
          hangmanCanvas.writeCorrectLetter(correctLetterIndex);

          const isWinner = hangman.checkWinner();

          if (isWinner) {
            hangmanCanvas.winner();
          }
        } else {
          hangman.addWrongLetter(event.key);

          hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
          hangmanCanvas.drawHangman(hangman.errorsLeft);

          const isGameOver = hangman.checkGameOver();

          if (isGameOver) {
            hangmanCanvas.gameOver();
          }
        }
      }
    } else {
      hangmanCanvas.writeInvalidKeyMessage();
    }
  }
});
