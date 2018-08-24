// var hangman;

class Hangman{
  constructor(words){
    this.words = words
    this.secretWord = 'alex'
    this.wrongletters = []
    this.guessedLetter = []
    this.errorsLeft = 10
    this.newWord = []
  }

  getWord(){
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(pressed){
    if(pressed >= 65 && pressed <= 90){
    console.log("we are right");
      return true
    }else {
      return false
    }
  }


  checkClickedLetters(pressed){

      if(this.wrongletters.indexOf(pressed) >= 0){
        console.log('letter is pressed')
        alert ("You have already chosen this letter");

      }else{

        if(this.secretWord.includes(pressed) === true){
          this.guessedLetter.push(pressed)
          this.wrongletters.push(pressed)

          console.log(`{this.guessedLetter}`)
        }else{
          this.wrongletters.push(pressed)
          this.errorsLeft -=1
          hangmanCanv.drawHangMan()

        }
    }

  }


  checkGameOver(){
    if(this.errorsLeft === 0 ){
      alert("you lose!!!!")
      return true
    }
  }

  checkWinner(){

    if(this.guessedLetter.length === this.secretWord.length){

      alert('you win')
    }else{
      return('keep playing')
    }
  }
}



document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman('alex');
  hangmanCanv = new HangmanCanvas(hangman.secret)
};


document.onkeydown = function(e) {
  if(hangman.checkIfLetter(e.keyCode)){
    console.log(e.key)
    hangman.checkClickedLetters(e.key)
    hangman.checkWinner()
  }

};
