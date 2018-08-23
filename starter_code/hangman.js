
let wordOfRandomArray = ['marvel', 'spiderman', 'thor'];



class theHangman {
  constructor(array) {
    this.words = array;
    this.secretWord = this.getWord()
    this.letters = [];
    this.wordsGuessed = '';
    this.errorsLeft = 10;
  }


  getWord() {
  return this.words[Math.floor(Math.random()*this.words.length)];
  // console.log(getWordsArray);
  }


  checkIfPair(ran) {
  if(ran.keyCode >= 65 && ran.keyCode <= 90) { 
    
    console.log('That was a letter man, you got it')
    this.checkClickedLetters(ran)

  }
   else {
    console.log('Try a god damn letter')
  }
  // console.log(this.errorsLeft);
  }

  checkClickedLetters(a) {
    // function isLetter(str) {
    //   return str.length === 1 && str.match(/[a-z]/i);
    // } 
    // return isLetter();
    if(this.wordsGuessed.includes(a.key)) {
      console.log('That was guessed mannn')
    } else if(this.secretWord.includes(a.key)){
    console.log(this.secretWord)
     this.addCorrectLetter(a);
     console.log(this.wordsGuessed)
    } else {
      this.addWrongLetter(a)
      this.checkGameOver();
    }
  } 
  addCorrectLetter(f) {
    this.wordsGuessed += (f.key)
    this.letters.push(f.key)
    console.log('works')
    canvas.writeCorrectLetter(f.key)
    this.checkWinner()
    
    
    
  }

  addWrongLetter(g) {
    this.letters.push(g.key)
    this.errorsLeft--;
    console.log('wrong letter');
    canvas.writeWrongLetter(g.key)
    canvas.drawHangMan()
    this.checkGameOver()
  }

checkGameOver() {
  
 if(this.errorsLeft > 0) {
  console.log(`You still have ${this.errorsLeft} lives left.`)
   
  } else {
    alert('Wow, you are a real killer')
  }
 
 }

 checkWinner() {
  
  
if(this.wordsGuessed.length === this.secretWord.length) {
  
  // alert('THIS IS FOCKING RIGHT MATE, YOU ARE A WINNER')
  canvas.make_base()
  // return true;  
  } else {
    return false;
  } 

 }



//  make_base() {
//   base_image = new Image();
//   base_image.src = './images/awesome.png';
//   context.drawImage(base_image, 100, 100);
// }




}






document.getElementById('start-game-button').onclick = function () {
  hangman = new theHangman(wordOfRandomArray);
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();

};


document.onkeydown = function (e) {
console.log(e.key); 
hangman.checkIfPair(e);

};
