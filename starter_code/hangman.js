let hangman;

class Hangman {
  constructor() {
    this.words = ['uno','dos','tres']
    this.secretWord = ''
    this.letters= []
    this.guessedLetters= ''
    this.errorsLeft= 3;
  }

  getWord() {

 	

 	  this.secretWord = this.words[Math.floor(Math.random() *  this.words.length)]
 	  	return this.secretWord

  }

  checkIfLetter(keyCode) {

// (keyCode >=48 && keyCode<=57 )? return Number:
// (keyCode >=65 && keyCode<= 90) return true
// (keyCode >=97 && keyCode<= 122 )? return true
// return false



if(keyCode >=48 && keyCode<=57 ){

	return Number 

}else if (keyCode >=65 && keyCode<= 90) {
	
	return true
	
}else if(keyCode >=97 && keyCode<= 122 ){
	return true
	
}else {
	return false
}



  }

  checkClickedLetters(key) {
  	let keys = []

  	keys.forEach(el => {
  		if(el!==key){
  		keys.push(key)
  		return  true 	
  		} else if(el==key){
  		}else if(typeof el === Number){
  			return true
  		}
  	})
  		return false
  }

  addCorrectLetter(i) {
  		(this.secretWord.includes(i))? this.guessedLetters+=i: checkWinner();

  }

  addWrongLetter(letter) {
  	  	 (this.secretWord.includes(letter)? true:false)
  }

  checkGameOver() {

  		return (this.errorsLeft===0)? true:false


  }

  checkWinner() {
	 (this.secretWord === this.guessedLetters)? true:false 


  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hanmanCanvas = new HanmgmanCanvas(hangman.getword())
};

document.onkeydown = (e) => {
  hangman.checkClickedLetters(e)
  hangmanCanvas.createBoard()
  hangmanCanvas.writeCorrectLetter(hangman.guessedLetter)
};
