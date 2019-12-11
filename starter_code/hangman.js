let hangman;

class Hangman {
  constructor() {
    this.words = ['Hello', 'How are you', "I'm doing ok"];
    this.secretWord = 'Ironhack';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.secretWord;
    // words[Math.random() * this.words.length]
  }

  checkIfLetter(keyCode) {
    console.log(keyCode);
    if (typeof keyCode === 'number' && keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(key) {
    // return this.letters.includes(key) === -1;
    if (this.letters.includes(key) === -1) {
      console.log(this.letters);
      this.letters.push(key);
      return this.letters.includes(key) === -1;
    } else return this.letters.includes(key) === -1;
  }

  addCorrectLetter(i) {
    for (let j = 0; j < this.letters.length; j++) {
      let pressedLetter = this.letters[j].toUpperCase();
      let secretWord = this.secretWord[i].toUpperCase();
      if (pressedLetter === secretWord) {
        this.guessedLetter += pressedLetters;
      }
    }
  }

  addWrongLetter(letter) {
    if (this.secretWord.includes(letter) === -1) {
      this.errorsLeft--;
    }
  }

  checkGameOver() {}

  checkWinner() {}
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};
hangman = new Hangman();
document.onkeydown = e => {
  // console.log(event.key);
  hangman.checkIfLetter(e.keyCode);
  hangman.checkClickedLetters(`${event.key}`);
  hangman.addCorrectLetter(event.key);
  hangman.addWrongLetter(event.key);
};
// document.addEventListener('keydown', function(event) {
//   console.log(event.which);
// });

// document.addEventListener('keydown', function(event) {
//   hangman.checkIfLetter(event.keyCode);
//   hangman.checkClickedLetters(`${event.key}`);
//   console.log(event);

//   document.body.innerHTML = `
//     &nbsp;&nbsp;&nbsp;
//     <b>which: ${event.which}</b>
//     <br>&nbsp;
//     <b>keyCode:</b> ${event.keyCode}
//     <br>&nbsp;&nbsp;&nbsp;
//     <b>shiftKey:</b> ${event.shiftKey}
//     </br>&nbsp;&nbsp;&nbsp;&nbsp;
//     <b>altKey:</b> ${event.altKey}
//     <br>&nbsp;&nbsp;&nbsp;
//     <b>ctrlKey:</b> ${event.ctrlKey}
//     <br>&nbsp;&nbsp;
//     <b>metaKey:</b> ${event.metaKey}
//     <br>&nbsp;&nbsp;
//     <b>key:</b> ${event.key}
//   `;
// });
