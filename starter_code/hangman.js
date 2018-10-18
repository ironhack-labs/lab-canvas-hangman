class Hangman {
  constructor() {
    this.words = ['HELLO', 'AWESOME', 'WHATEVER', 'CHARTREUSE'];
    this.secretWord = this.getWord().toUpperCase();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }
  checkIfLetter(letter) {
    if(letter.length==1 && ((letter>='A' && letter<='Z') || (letter>='a' && letter<='z'))) {
      return true
    } else {
      return false
    } 
  }
  checkClickedLetters(letter) {
    console.log('checkClickedLetters')
    if(this.checkIfLetter(letter)==true) {
      if(this.letters.includes(letter)) {
        console.log('this key was pressed already')
        return false
      } else {
        console.log('this key had not yet been pressed')
        this.letters.push(letter)
        return true
      }
    }
  }
  checkGameOver(){
    if(this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }
  checkWinner(){
    let secretWordArr = this.secretWord.split('')
    let counter = 0
    let test = this.guessedLetter
    secretWordArr.forEach(function(el) {
      if(test.includes(el)) {
        counter++
      }
    })
    if(this.secretWord.length==counter){
      return true
    } else {
      return false
    }  
  }
  addCorrectLetter(letter) {
    this.guessedLetter += letter.toUpperCase()
    this.checkWinner()
  }
  addWrongLetter(letter) {
    this.errorsLeft--
    this.checkGameOver()
  }
  getIndex(letter) {
    var wordCheck = this.secretWord.split('')
    var arr = []
    var i = 0
    console.log(wordCheck)
    wordCheck.forEach(function(letra) {
      if(letra==letter.toUpperCase()) {
        arr.push(i)
      }
      i++
    })
    return arr;
  }

}


var hangman = new Hangman();

