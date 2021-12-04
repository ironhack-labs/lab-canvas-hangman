class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(); 
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    this.orderedGuessedLetters = '_'.repeat(this.secretWord.length);
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random()*this.words.length-1);
    let randomWord = this.words[0];
    this.secretWord = randomWord;
    return randomWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    const verifiedLetter = !this.letters.includes(letter);
    if (verifiedLetter){
      this.letters.push(letter);
    }
    return verifiedLetter;
  }

  addCorrectLetter(letter) {
    //transformar a string guessedLetters em array e guardar em outra variável;
    //supondo que a palavra secretWord seja BOTO;
    //a primeira letter é 'O';
    //verificar index dentro da string de secretWord;
    //percorrer array e anotar as posições dos index para o palpite; no caso, [1] e [3];
    //caso a letra exista na string, splice para substituir _ na posição [i] do array de guessed letters (1 e 3);
    //pegar o array resultante e converter para string;
    let guessedArray = this.orderedGuessedLetters.split();
    for (let i = 0; i < this.secretWord.length; i++){
      if (letter === this.secretWord[i]){
        guessedArray[i] = letter;
      }
    }
    this.orderedGuessedLetters = guessedArray.join('');
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // verificar letter está contida em secretWord;
    //Se for falso, subtrair 1 de errorsLeft;
    //push no letters;
    if (!this.secretWord.includes(letter)){
      this.errorsLeft -= 1;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false;
    } else {
      return true;
    }  
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++){
      if (!this.guessedLetters.includes(this.secretWord[i])){
        return false;
      }
    }
    return true;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
