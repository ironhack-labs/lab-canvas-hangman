

wordArray = ['croqueta', 'bananas', 'foliage', 'hamburgler', 'bologna']


class Hangman {
  constructor(word){
    this.words = wordArray //the array of words that is being used for the game
    this.secretWord = [] //the word being using for the current game
    this.secretWordToDraw //a seperate word that will be used later in Canvas
    this.letters = [] //these letters cant be repeated that have already been guessed *the ones that are wrong*
    this.guessedLetter = '' //these are the *correct* guessed letters in the form of a string (not using this variable)
    this.errorsLeft = 10 //a counter of turns the player has left

  }

  getWord() {

  this.secretWord = (wordArray[Math.floor(Math.random() * wordArray.length)]).split('')

  this.secretWordToDraw = this.secretWord.join('')
  
  console.log(this.secretWord)
  // console.log('=-=-=-=-=-', this.secretWordToDraw)

  };

  checkIfLetter(keyCode) {

    if(keyCode >= 65 && keyCode <= 90){
      // console.log("returning true")
      return true
    } else {
      // console.log("returning false")
      return false
    }

  };

  checkClickedLetters (key) {

  if(this.letters.includes(key)){
    return true
  } else {
    return false
  }

  };

  addCorrectLetter (i) {

  };

  addWrongLetter (letter) {

  };

  checkGameOver () {

    if(this.errorsLeft === 0){
      return true
    } else{
      return false
    }

  };

  checkWinner () {

    if(this.secretWord.length === 0){
      return true
    } else {
      return false
    }

  };

  
  
  
}





$(document).keydown(function(e){ //checks what key was pressed

  let pressedKey = e.key; //assigns the key to a variable
  let eValue = e.keyCode
  // console.log(eValue);

  if(thegame.checkIfLetter(eValue)){ // if the key is part of the alphabet, run the code below


    if(!thegame.checkClickedLetters(pressedKey) || thegame.secretWord.includes(pressedKey)){ // if letter hasnt been guessed *or* isnt a duplicate in game word


      if(thegame.secretWord.includes(pressedKey)){ // if the word includes the pressed key then do something
        console.log(pressedKey)
        console.log('GOOD GUESS!')
        for(i = 0; i< thegame.secretWord.length; i++){
          if(thegame.secretWord.includes(pressedKey))
          thegame.secretWord.splice(thegame.secretWord.indexOf(pressedKey), 1 )
        }
        console.log(thegame.secretWord)
        // console.log(thegame.secretWord);
        // console.log(thegame.secretWordToDraw)
        if(thegame.checkWinner()){
          console.log('YOU WIN!!!')
        }
      } else{  //if the letter guessed is not in the game word....
        // thegame.guessedLetter += pressedKey .............since you got it wrong, the letter from here gets pushed to the game
        thegame.errorsLeft -= 1 // since you got it wrong, subtracts one from the counter
        thegame.letters.push(pressedKey) // push the letter guessed to an array of guessed letters
        console.log('WRONG')
        if(thegame.checkGameOver()){
          console.log('YOU LOSE!!!')
        }
      }
      
      
      console.log(thegame.letters)

    }else{
      console.log('you already guessed that')
    } 
    
  }else{
    console.log('Thats not a letter!!')
  }
   

})




document.getElementById('start-game-button').onclick = function () {
  thegame = new Hangman();
  thecanvas = new HangmanCanvas();
  //document.getElementByID('#intro')...remove...
};