
class Hangman {
  constructor() {
    this.words = ['mochon','lolaxo','fridonguis','bonguis'],
    this.secretWord = '',
    this.letters = [],
    this.guessedLetter = '',
    this.errorsLeft = 10
}
getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length-1)]
    return this.secretWord
}

  checkIfLetter(keyCode) { //si lo que pique es letra
    if (keyCode >= 65 || keyCode <= 91){ //de a a Z, sin ñ
      this.letters.push(keyCode)
      return true
    } else return false
  }

  checkClickedLetters(key) { //si ya pico esa letra
    return !this.letters.includes(key) //puse ! porque me marcaba jasmine
  }

  addCorrectLetter(i) { //i da letra
    //let guess = i[3].toLowerCase() ya la pone en minuscula, aqui scas el indice 3 y lo pone en minusculas
    if(this.secretWord.includes(i)){ //checa si el indice3 de i en minusculas esta dentro el secretWord
      this.guessedLetter+=i
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft--
  }

  checkGameOver() {
    return this.errorsLeft <= 0 ? true : false
  }

  checkWinner() {
    return this.guessedLetter === this.secretWord ? true : false
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman()
  canvas = new HangmanCanvas(hangman.getWord())
  canvas.createBoard()
};

document.onkeydown = (e) => {
  if (hangman.checkIfLetter(e.keyCode)){             //para que chce si lo que puse es letra, despues si esta bien y que mande llamar a dibujar la letra
    if (hangman.checkClickedLetters(e.keyCode)) return //si es true es porque ya esta, CREO
    else {
      hangman.addCorrectLetter(e.key)
      canvas.writeCorrectLetter(e.key)

    }
  }
};
