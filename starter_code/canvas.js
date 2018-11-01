
class HangmanCanvas {
  constructor(secretWord){
    //hangmand image
    this.ctx = document.getElementById('hangman').getContext('2d');
    //array of Disney Characters (the variable "characters" from JS Hangman) (or any array)
    this.word = [];
    //the random character chosen
    this.secretWord = "";
    //this.letters = [];
    // array pickedLetters gets pushed to 
    this.guessedLetters = [];

    this.errorsLeft = 10;

    this.pickedLetter = document.getElementsByTagName("input").innerHTML;
    
    }

    getWord(){
      this.word = characters;

      let randomNumber = Math.floor(Math.random() * this.word.length);
      let randomCharacter = this.word[randomNumber];

      console.log(randomCharacter);
      
      this.word = this.secretWord.split(randomCharacter);
      return this.word;
    

      }

      

    checkIfLetter(){ 
      let anActualLetter= (() => {
        const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
        return caps.concat(caps.map(letter => letter.toLowerCase()));
      })();
      
      if(this.pickedLetter === anActualLetter){
        return true
      }
      if(true){
        this.guessedLetters.push(pickedLetter);
      }
     } 

    checkClickedLetters(){
      for(let i = 0; i < this.word.length; i++)

      if(pickedLetter === this.word[i]){
        
      }

    }

    

    addWrongLetterToWrongList(){

    }

    checkIfGameOver(){

    }

    checkIfWinner(){

    }

    }
  





  

































