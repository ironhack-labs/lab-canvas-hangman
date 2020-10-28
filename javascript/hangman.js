class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord =this.pickWord();
    this.letters =[];
    this.guessedLetters ="";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let numRandom = Math.floor(Math.random()*this.words.length);
    return this.words[numRandom];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode>=65 && keyCode<=90;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter);//&& this.guessedLetters.indexOf(letter)===-1;

  }

  calculateIndex(letter, numTimes){//recibe la letra y el número de veces ya adivinada y calcula el índice para pintarla
    let times =0;
    for(let i=0;i<this.secretWord.length;i++){

      if(this.secretWord[i]===letter&&numTimes===times)return i;
      else if(this.secretWord[i]===letter&&numTimes!=times)times++;  
    }
  }


  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters+=letter;
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.checkClickedLetters(letter) && this.letters.push(letter); 
  }

  checkGameOver() {
    // ... your code goes here
    return !this.errorsLeft? true : false;
  }

  checkWinner() {
    // ... your code goes here
    for(let value of this.secretWord){
      if(!this.guessedLetters.includes(value))return false;  
    }
    if(this.secretWord.length!=this.guessedLetters.length)return false; //en caso de letras repetidas
    return true;
  }
} 

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    console.log(hangman.secretWord);

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  
  const clickLetter = event.key;
  const letterNumber = event.keyCode;
  
  if(hangman.checkIfLetter(letterNumber) && hangman.checkClickedLetters(clickLetter)){//si no hemos pulsado ya esa letra
    
    if(hangman.secretWord.includes(clickLetter)){ // Si la letra está en la palabra secreta
      
      let multipleLetter = hangman.secretWord.split(clickLetter).length-1; //número de veces que la letra se encuentra en la palabra secreta
      let numGuessedMult = hangman.guessedLetters.split(clickLetter).length-1; //número de veces ya adivinada la letra

      if(multipleLetter>1 && multipleLetter>numGuessedMult ){ //si la letra se repite en la palabra en la palabra y no la hemos adivinado ya
       
        while(multipleLetter>numGuessedMult ){
          let index = hangman.calculateIndex(clickLetter,numGuessedMult);
          hangmanCanvas.writeCorrectLetter(index);
          if(hangman.addCorrectLetter(clickLetter)) hangmanCanvas.winner(); //Comprobamos victoria
          numGuessedMult++;
        }


      }else if(multipleLetter===1 && multipleLetter>numGuessedMult ){//si la letra solo aparece una vez en la palabra y no la hemos adivinado ya
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(clickLetter));//pasamos el índice de la letra
      
        if(hangman.addCorrectLetter(clickLetter)) hangmanCanvas.winner(); //Comprobamos victoria
      }
      
    
    } else {
      hangman.addWrongLetter(clickLetter); 
      hangmanCanvas.writeWrongLetter(clickLetter);
      if(hangman.checkGameOver())hangmanCanvas.gameOver();
    }
  }
});
