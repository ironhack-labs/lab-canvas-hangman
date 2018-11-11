let newGame;

class Hangman {
  constructor(secretWord){
    this.ctx = document.getElementById('hangman').getContext('2d');

    this.characters = ["snow white and the seven dwarfs", "pinocchio", "dumbo", "bambi", "the lion king", "aladdin", "cinderella", "sleeping beauty", "mulan", "beauty and the beast"];
    this.secretWord = "";
    this.lettersOfTheSecretWord = [];
    this.guessedLetters = [];
    this.correctGuess = [];
    this.incorrectGuess = [];
    this.errorsLeft = 10;
    }

    getWord(){
      let randomNumber = Math.floor(Math.random() * this.characters.length);
      let randomCharacter = this.characters[randomNumber];
      this.secretWord = randomCharacter;

          console.log(this.secretWord);
               
      }
      
    checkIfThisIsALetter(e){
      if(event.keyCode >= 65  && event.keyCode <= 90){
        this.guessedLetters.push(event.key);
        return true;
      }  
        return false;
    }

    evaluateGuess(e){
      this.lettersOfTheSecretWord = this.secretWord.split('');

      for(let i = 0; i < this.lettersOfTheSecretWord.length; i++){

      if(event.key === this.lettersOfTheSecretWord[i]){
        this.correctGuess.push(event.key);
        console.log("correct    " + this.correctGuess);
        console.log("right key   " + event.key)
        
      }
      else {
        this.incorrectGuess.push(event.key);
        console.log("incorrect    " + this.incorrectGuess);
        console.log("wrong key   " + event.key)
        
      } 
    }
  }



  } //end of class



    //logic starts here

  document.getElementById('start-game-button').onclick = function() {
      newGame = new Hangman();
      newGame.getWord(newGame.secretWord);
  };


  document.onkeydown = function(e) {
    newGame.checkIfThisIsALetter(event.key)
    newGame.evaluateGuess(event.key)
  }
    

  // logic ends here