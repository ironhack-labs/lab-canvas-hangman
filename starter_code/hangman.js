var hangman;

class Hangman{
  constructor(){
    this.words= [];
    this.secretWord= "";
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10

  }
  getWord(){
    
    var indexRandom = Math.floor(Math.random()*this.words.length)
    console.log(indexRandom)
    this.secretWord= String(this.words[indexRandom])
    return String(this.words[indexRandom])
  }

  checkIfLetter(keycode){
    
    if (64 < keycode && keycode < 123){
      return true
    }
    return false
  }

  checkClickedLetters(letter){
    var key = letter.charCodeAt();

    if (this.checkIfLetter(key)){
      for(var i=0; i<= this.letters.length; i++){
        if (letter == this.letters[i]){
          return false
        }
    }    
    }
    return true
  }

addCorrectLetter(index){
  this.guessedLetter += this.secretWord[index].toUpperCase()
  this.checkWinner()
}

checkGameOver(){
  if(this.errorsLeft=== 0){
    return true
  }
  return false 
}

checkWinner(){

var guessedLetterArr = this.guessedLetter.toLowerCase().split('')
var secretWordArr = this.secretWord.toLowerCase().split('')

if (secretWordArr.sort().toString() === guessedLetterArr.sort().toString()){
  return true
}
return false
}


addWrongLetter(){
this.errorsLeft--
this.checkGameOver()
}


}

//test
var obj= new Hangman()

obj.getWord()
//test ende

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
//   if(hangman.checkClickedLetters()){
// hangman.addCorrectLetter
//   } else {
//     hangman.addWrongLetter
//   }

};
