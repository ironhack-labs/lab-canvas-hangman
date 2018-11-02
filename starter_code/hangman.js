let newGame;

class Hangman {
  constructor(secretWord){
    this.ctx = document.getElementById('hangman').getContext('2d');

    this.characters = ["Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo", "Bambi", "The Lion King", "Aladdin", "Cinderella", "Sleeping Beauty", "Mulan", "Beauty and the Beast"];
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
          console.log(this.lettersOfTheSecretWord);      
      }
      
    checkIfThisIsALetter(e){
      if(event.keyCode >= 65  && event.keyCode <= 90){
        console.log("yes, it is a letter");
        this.guessedLetters.push(event.key);
        return true;
      } 
        console.log("not a letter");  
        return false;
    }

    evaluateGuess(theGuess){
      this.lettersOfTheSecretWord = this.secretWord.split('');
        console.log(this.lettersOfTheSecretWord);

      for(let i = 0; i < this.lettersOfTheSecretWord.length; i++)

      if(event.key === this.lettersOfTheSecretWord.value){
        this.correctGuess.push(event.key);
        console.log(this.correctGuess);

      } else {
        this.incorrectGuess.push(event.key);
        console.log(this.incorrectGuess);
      }
    }



  } //end of class



  document.getElementById('start-game-button').onclick = function() {
      newGame = new Hangman();
      newGame.getWord(newGame.secretWord);
  };


  document.onkeydown = function(event) {
        console.log("Should be the letter of the key you are hitting", event.key);
    newGame.checkIfThisIsALetter(event.key)
        console.log("array that holds ALL letters", newGame.guessedLetters);
    newGame.evaluateGuess(event.key)
        console.log("correct guess array", newGame.correctGuess);
        console.log("incorrect guess array", newGame.incorrectGuess);
  }
    