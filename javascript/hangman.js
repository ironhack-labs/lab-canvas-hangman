class Hangman {
  constructor(words) {
    this.words = words; // ["mexico", "javascript", "agua"]
    // ... your code goes here
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 9
  }

  pickWord() {
    // ... your code goes here


    console.log(Math.random() * this.words.length);
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    
    return 65<= keyCode && keyCode<=90
  }

  checkClickedLetters(letter) {
    // ... your code goes here

    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft = this.errorsLeft-1
    this.letters.push(letter)
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft <= 0
  }

  checkWinner() {
    // ... your code goes here
    // for(let letter of this.secretWord){
    //   console.log(letter);
    //   return this.guessedLetters.indexOf(letter) != -1 ? true : false
    // }


    const solution = Array.from(this.secretWord)
    const guessedSolution = Array.from(this.guessedLetters)

    let matches = 0;

    solution.forEach((letter) => {
      if (guessedSolution.includes(letter)){
        matches ++
      }
    })

    return matches === solution.length


// solución 2
    // for(let letter of this.secretWord){
    //   console.log(letter);
    //   return this.guessedLetters.indexOf(letter) != -1 ? true : false
    // }

  }
}

let hangman;
let hangmanCanvas

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    hangmanCanvas.createBoard()
    console.log(hangmanCanvas);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  console.log(event.keyCode)
  console.log(event.key);  
  // React to user pressing a key
  // ... your code goes here
  const keyCode = event.keyCode
  const key = event.key
  if(
    hangman.checkIfLetter(keyCode)    && 
    hangman.checkClickedLetters(key)  &&
    !hangman.guessedLetters.includes(key)){
      if (hangman.secretWord.includes(key)){
        hangman.addCorrectLetter(key);
        for (let i=0; i < hangman.secretWord.length; i++){
          if(hangman.secretWord[i] === key){
            hangmanCanvas.writeCorrectLetter(i)
          }
        }
        if(hangman.checkWinner()) {
          hangmanCanvas.winner();
        }
           
      }else{
        hangman.addWrongLetter(key);
        hangmanCanvas.writeWrongLetter(hangman.letters.join(' '), hangman.errorsleft);
        if (hangman.checkGameOver()){
          hangmanCanvas.gameOver();
        }
      }
      }
  
  });
