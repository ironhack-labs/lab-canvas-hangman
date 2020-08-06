class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord  = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft  = 10;
    this.userWon = false;
  }

  pickWord() {
    // ... your code goes here
    let randomElement = this.words[Math.floor(Math.random() * this.words.length)];
    return randomElement.toUpperCase();
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90){
      return true ;
    }else {
      return false;
    }

  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.indexOf(letter) === -1){
      return true;
    }else {
      return false;
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters +=letter;

    return this.checkWinner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;

    if (this.letters.indexOf(letter) === -1){
      this.letters.push(letter)
    }    

  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft>0){
      return false;
    }else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    let tamWord = this.secretWord.length;

    this.userWon = true;
    let letterAtual = '';

    for(let i=0;i<tamWord;i++){

        letterAtual = this.secretWord[i];

        if (this.guessedLetters.indexOf(letterAtual)=== - 1){
          this.userWon = false;
        }
    }

    return this.userWon;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    hangmanCanvas.drawLines();

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  //faz um for 

  if (hangman.checkIfLetter(event.keyCode)){

    let letterTyped = event.key.toUpperCase();
    
    console.log(hangman.secretWord);

    if (hangman.secretWord.indexOf(letterTyped) === -1) {
      //console.log('não achou');
      //insere nas letras já digitadas
      if (hangman.letters.indexOf(letterTyped) === - 1){
        hangman.addWrongLetter(letterTyped);
        console.log(hangman.letters);
      }
      
    }else{
      //console.log('achou');
      if (hangman.guessedLetters.indexOf(letterTyped) === - 1){

        hangman.addCorrectLetter(letterTyped);
        for(let i=0;i<hangman.secretWord.length;i++){
          //console.log('pos-'+hangman.secretWord[i]);
          if (hangman.secretWord[i]===letterTyped){
            //console.log('indice:'+i);
            hangmanCanvas.writeCorrectLetter(index);
          }
        }
        //console.log(hangman.guessedLetters);
      //procurar todos os indices
      }
    }
  }
  //hangmanCanvas.writeCorrectLetter(index)
});
