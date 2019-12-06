let rules;

class HmRules {
  constructor() {
    this.words = ['abacate', 'biscoito', 'oculos', 'sacola'];
    this.secretWord = this.getWord().toUpperCase();
    this.triedLetters = []; // array de numeros
    this.guessedLetter = this.createGuessedLettersArr();
    this.errorsLeft = 5;
  }

  createGuessedLettersArr() {
    return this.secretWord.split('').map( e => " ");
  }

  updateGuessedLettersArr(letter) {
    this.secretWord.split('').forEach( (e, i) => {
      if ( e === letter) {
      this.guessedLetter[i] = letter;
    };
  })
  console.log(this.guessedLetter);
  }

  getWord() {
    const randomWord = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
    this.secretWord = randomWord;
    return randomWord;
  }
  isValidKeyInputs(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  isKeyCodeInputDuplicated(key) {
    if (this.triedLetters.includes(key)) {
      return true;
    } else {
      return false;
    }
  }

  isLetterIncludedInSecretWord(letter) {
    const secretWordArr = this.secretWord.split('');
    return secretWordArr.includes(letter) ? true 
    : false;
  }

  decreaseErrorsLeft() {
    this.errorsLeft -= 1;
  }

  isGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  isWinner() {
    const secretWordArr = this.secretWord.split('');
    let distinctWordsOfSecretWordArr = [];
    secretWordArr.forEach(e => {
      if (!distinctWordsOfSecretWordArr.includes(e)) {
        distinctWordsOfSecretWordArr.push(e);
      }
    });
    return distinctWordsOfSecretWordArr.every(e =>
      this.guessedLetter.includes(e)
    );
  }
}

document.getElementById('start-game-button').onclick = () => {
  rules = new HmRules();
  const render = new HmRender(rules.secretWord);
  console.log(`render`, render.secretWord)
  // criar tabuleiro.
};

document.onkeydown = e => {
  if ( rules.isGameOver() ) {
    console.log(`game over`)
    return `game over`
  }
  if (rules.isValidKeyInputs(e.keyCode)) {
    if (rules.isKeyCodeInputDuplicated(e.keyCode)) {
      console.log(`You already tried ${e.code[3]}!`)
      return `You already tried ${e.code[3]}!`
    } else {
      rules.triedLetters.push(e.keyCode);
      const letter = e.code[3];
      if (rules.isLetterIncludedInSecretWord(letter)) {
        rules.updateGuessedLettersArr(letter);
        if (rules.isWinner()) {
          console.log(`You won!`);
          return `You won!`}
      } else {
        rules.decreaseErrorsLeft();
        console.log(`wrong. You have ${rules.errorsLeft} more tries`)
        if(rules.isGameOver()) {
          console.log(`You lose. Game over =(`)  
          return `You lose =()`
        }
      } 
    }
  } else {
    console.log(`${e.code} is an invalid input`)
    return `${e.code} is an invalid input`
  }
}
