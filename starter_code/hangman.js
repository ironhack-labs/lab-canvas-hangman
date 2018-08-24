






document.getElementById('start-game-button').onclick = function () {
  console.log("game started")

  hangman = new HangmanGame(arrayOfWords);
  hangCanvas = new HangmanCanvas(hangman.secretWord);

  hangCanvas.clearWindow(); // clear previus games
  hangCanvas.drawStartGameTemplate ();
};


document.onkeydown = function (event) {

  let keyPressed = event.key;
  let codeOfKey = event.keyCode;
  hangman.checkIfLetter(codeOfKey);

};


//////////////////////////////////

//-------- Global variables 

const arrayOfWords = ["alban", "albania","French Guiana", "french Polynesia", "french Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya"];

///---------------

  class HangmanGame {
        constructor (arrayOfWords) {
          this.secretWord = [];
          this.errorsMade = 1;
          this.guessedWord= [];
          this.clickedLetters = [];
          this.getWord(arrayOfWords);
        };

      getWord(wordsArray) {
        let random = Math.floor(Math.random() * wordsArray.length);
        this.secretWord = wordsArray[random].toUpperCase().split(''); // replace 0 with random
       };

      checkIfLetter(keyCode) {
        if (keyCode >= 65 && keyCode <= 90) {
          let letter = String.fromCharCode(keyCode);
          this.checkClickedLetters(letter);
        } else {return false}
      };

      checkClickedLetters(letter) {
          if (!this.clickedLetters.includes(letter)) {
            this.clickedLetters.push(letter);
            
            if (this.secretWord.includes(letter)) {
              this.addCorrectLetter(letter);
            }
          else {
            hangCanvas.drawHangman(this.errorsMade);
            this.errorsMade++;
            hangCanvas.drawWorngLetter(letter,this.errorsMade);
            this.checkGameOver();
          }

        }
      };

      addCorrectLetter(letter) {
        this.secretWord.forEach((arg,i) => {
          if (arg === letter) {
            this.guessedWord.push(letter);
            hangCanvas.drawCorrectLetter(letter, i);
          }
        });
        this.checkWinner();
      };

      checkGameOver() {
        if (this.errorsMade === 8) {
          setTimeout(() => {
            alert (`Game Over '_' \n The answer is: ${this.secretWord.join('')}`);
          },200);
          hangCanvas.gameOver()
        }

      };

      checkWinner() {
        if (this.guessedWord.length === this.secretWord.length) {
          setTimeout(() => {
            alert ("You One");
          },200);
          hangCanvas.gameWinner()
        }

      }

  } // End class hangmanGame