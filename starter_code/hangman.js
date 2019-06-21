let hangman;
let blah;

class Hangman{
  constructor(){
    this.words =["Bruce","Leee","Bruce","Willis", "Bruce", "Springsteen"];
    this.secretWord;
    this.letter =[];
    this.guessedLetter =[];
    this.errorsLeft = 5;
    this.correctWords=[];

  }

getWord () {

 let randomWord = Math.floor(Math.random()*this.words.length);
 this.words[randomWord];
 this.secretWord = this.words[randomWord];

 
}   

checkIfLetter (keyCode) {
if(typeof(keyCode)==="string"){
  
this.addCorrectLetter(keyCode);

}else {
  console.log("Your need to enter a letter");
}
 }

 //Check cicked Letters FIRST
checkClickedLetters (key) {

let alreadyInThere = false;

for (let i = 0; i < this.letter.length; i++){
  if (key === this.letter[i]){
    
    console.log("wrong");

    alreadyInThere = true;

  }
}

  if(alreadyInThere===false){
    
    this.checkIfLetter(key);
  }
  

}

addCorrectLetter(key) {
let letterEntered = false;
  this.letter.push(key);

  let secret = this.secretWord.toLowerCase().split("");
  //Error Here
  for(let i=0; i < secret.length; i++ ){
    if (key ===secret[i]){
      this.correctWords.push(key);
    }else{
      letterEntered = true;
    }
  }

  if(letterEntered ===true){

    this.addWrongLetter(key);
  }
 
 this.guessedLetter.push(key);
 }

addWrongLetter(key){
  this.checkWinner();
  this.errorsLeft--;

if (this.errorsLeft==0){

    this.checkGameOver();

  }
 }

checkGameOver () {

  alert("Game Over");

 }

checkWinner() {

if(this.secretWord.length === this.guessedLetter.length){
  alert("You Won");
}
}
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  blah = new HangmanCanvas();
  hangman.getWord();
  blah.secret = hangman.secretWord;
  blah.createBoard(blah.secret);

};

document.onkeydown = function (e) {
   
if(e.keyCode >=64 || e.keyCode <=90){
hangman.checkClickedLetters(e.key);
}else{
  console.log("Incorrect");
}

blah.error = hangman.errorsLeft;
  blah.checkingErrors(blah.error);


};
