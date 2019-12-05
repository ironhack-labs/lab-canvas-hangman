let hangman;

class Hangman {
  constructor() {
    this.words = ['abobora', 'elefante', 'javascript',];
    this.secretWord = ''; // this getWord();
    this.letters = ['a','b','c','d','e','f','g','h','i','j']; // deixar vazio
    this.guessedLetter = ''; // a, b
    this.errorsLeft = 10;
  }

  getWord() {
     const randomWord = this.words[Math.floor(Math.random() * this.words.length)]
     this.secretWord = randomWord;
     return randomWord;
  }
// check se o input e uma letra
checkIfLetter(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true
  } else {
    return false
  }
}

checkClickedLetters(key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
}

  addCorrectLetter(i) {
    // checa se input
    // adicionar letter no array letters?
     this.guessedLetter += this.secretWord[i].toUpperCase();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    // this.checkGameOver()
    // subtrair 1 de this.errorsLeft
    // chamar check game over
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    const secretWordArr = this.secretWord.split('')
    let distinctWordsOfSecretWordArr = [];
    secretWordArr.forEach( e => {
      if (!distinctWordsOfSecretWordArr.includes(e)) {
        distinctWordsOfSecretWordArr.push(e) 
      }
    })
    return distinctWordsOfSecretWordArr.every( e => this.guessedLetter.includes(e))
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  // instanciar o hangman canvas.
};

document.onkeydown = (e) => {
};

// consologar o que esta recebendo no keydown.
// usar as funcoes para tratar o input
// 