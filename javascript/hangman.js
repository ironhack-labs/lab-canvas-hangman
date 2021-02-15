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
//sem esses dois as palavras certas não completam os espaços. Aparecem todas como erradas

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
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener("keydown", (event) => {
  if (!hangman.checkWinner() && !hangman.checkGameOver()) {
    const isLetter = hangman.checkIfLetter(event.keyCode); //temos que checar se o code que o jogado digitou é uma letra. Sem isso, os números que digitar vai aparecer nas letras que erramos
    //ficou riscado esse negócio mas se ele, não funciona
    //console.log(event.keyCode)
    //console.log(event.key)
    //console.log(isLetter)

    if (isLetter) {
      //se for uma letra, chamar a função checkClickedLetters -- ver se essa letra já foi clicada
      const isNotClicked = hangman.checkClickedLetters(event.key.toLowerCase()); //event.key -- está passando a letra. Estamos colocando lowercase pra sempre guardar minúsculo e verificar minúsculo para garantir que vai fazer a verificação corretamente e não diferenciar maiúsculo de minúsculo

      if (isNotClicked) {
        //se ela  não foi clicada, precisamos ver se ela está certa ou errada
        const correctLetterIndex = hangman.secretWord.indexOf(event.key);

        if (correctLetterIndex > -1) {
          //se a letra estiver correta -- se for menos que -1 quer dizer que essa letra existe dentro de secret word
          hangman.addCorrectLetter(event.key);
          hangmanCanvas.writeCorrectLetter(correctLetterIndex);

          const isWinner = hangman.checkWinner(); //toda vez que escreve uma letra correta tem que dar um checkWinner -- para juntar com a função winner do 'canvas.js' que eu não fiz ainda kkk

          if (isWinner) {
            hangmanCanvas.winner();
          }
        } else {
          hangman.addWrongLetter(event.key); //vai tirar 1 do meu errorsLeft e dar letter.push na letter

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
