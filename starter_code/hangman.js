

class Hangman {
constructor (){
this.words = ["hola","como","estas","adios","jp"]
this.secretWord = ' '
this.letters = []
this.guessedLetter = ""
this.arrayLetters =[]
this.errorsLeft = 10
}
getWord () {
  var self = this
  var random = Math.floor(Math.random()*self.words.length)
  return self.words[random]
  }

checkIfLetter(keyCode){
  if(keyCode >= 65 && keyCode <= 90){
    return true
  } return false
}

checkClickedLetters(key){
  for(var letra of this.letters){
    if(key === letra){
      return false
    } 
  } return true

}
addCorrectLetter(letra){
   var self = this
for(var j = 0; j<self.secretWord.length; j++){
  if(self.secretWord[j]== letra){
    self.arrayLetters.splice(j,1,letra)
  }
  }
  self.guessedLetter = self.arrayLetters.join('')
  self.checkWinner()
}

addWrongLetter(){
  var self = this
for(var j = 0; j<self.secretWord.length; j++){
  if(self.secretWord[j]!= letra){
    self.errorsLeft--
  }
  }
  self.checkGameOver()
}

checkGameOver(){
  var self = this
  if(self.errorsLeft === 0){
    return true
  }return false
}
checkWinner(){
  var self = this
  if(self.secretWord === self.guessedLetter){
    return true
  } return false
}


}
hangman = new Hangman();
var seccion = document.getElementsByClassName("container")


document.getElementById('start-game-button').onclick = function () {
  if(hangman.secretWord==" "){
    hangman.secretWord = hangman.getWord()
    for(var i = 0;i<hangman.secretWord.length;i++){
      var letraDiv = document.createElement("div")
      letraDiv.setAttribute("class","letra")
      seccion[0].appendChild(letraDiv)
    }
  }

};


document.onkeydown = function (e) {

};
