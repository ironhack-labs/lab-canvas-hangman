var hangman;
class Hangman {
constructor(){
  this.words=['Ironhack','Octocat','Lead Teacher','Teacher Assitant','Ironbeers']
  this.secretWord= this.words[Math.floor(Math.random()*this.words.length)]
  this.letters =[]
  this.guessedLetter = ''
  this.errorsLeft = 10
 }
 getWord = () => {
  return this.secretWord
}
checkIfLetter = (keyCode) =>{
  if(keyCode > 64 && keyCode < 91 ){
    return true
  }
  else{
    return false
  }
}
checkClickedLetters = (key) => {
  let valor = true
  for(let i = 0; i < this.letters.length; i++){
    if(this.letters[i]== key){
      valor = false
    }
  }
  return valor
}
checkGameOver = () => {
  if(this.errorsLeft<=0){
    return true
  }
  else{
    return false
  }
}
checkWinner = () => {
  let correctlength = this.secretWord
  let user = this.guessedLetter
  let final= 0
  for (let i = 0; i< user.length ; i++ ){
    for ( let j = 0 ; j < correctlength.length ; j++){
      if ( user[i] == this.secretWord[j]){
          final++
          correctlength = correctlength.replace(/`${checar}`/g, "")
          console.log(correctlength)
      }
    }
  }
  if ( final == correctlength.length){
    return true
  }
  else{
    return false
  }
}
addCorrectLetter = (i) => {
  let valor = this.secretWord[i]
  valor = valor.toLocaleUpperCase()
  this.guessedLetter = this.guessedLetter + valor
  this.checkWinner(this.guessedLetter)
}
addWrongLetter = (letter) => {
  this.errorsLeft--
}
}
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  let a = hangman.secretWord
  let b = new HangmanCanvas()
  b.createBoard()
  b.drawLines(hangman.secretWord)
};


document.onkeydown = function (e) {

};
