class Hangman{
  constructor(){
    this.secretWord = [];
    this.letters = [];
    this.guessedLetters = [];
    this.correctLetters = [];
    this.errors = 0;
  }
  getWord(secretWord){
    let formatedSecretWord = secretWord.toLowerCase();
    this.letters = [...formatedSecretWord];
    this.secretWord = [...formatedSecretWord];
  }

  getLetter(letter, letterKeyCode){

    let formatedLetter = letter.toLowerCase();

    if(letterKeyCode <= 64 || letterKeyCode >= 90){
      return;
    }

    if(this.letters.includes(formatedLetter)){
      this.letters.forEach((l, i)=>{
        if(l == letter){
          this.correctLetters.push(letter);
        }
        if(l == this.correctLetters[i]){
          this.letters.splice(i, 1);
        }
      });
      console.log(this.secretWord, this.correctLetters);
      return true;
    }else{
      this.guessedLetters.push(formatedLetter);
      this.errors = this.guessedLetters.length;
      console.log(this.secretWord);
      return false;
    }

  }

  checkGameOver(){
    if(this.errors === 6){
      return true;
    }else{
      return false;
    }
  }

  checkWinner(){
    if(this.secretWord.length === this.correctLetters.length){
      return true;
    }else{
      return false;
    }
  }

}