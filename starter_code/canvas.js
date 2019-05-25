
let createBoard = () => {
  this.ctx = document.getElementById('hangman').getContext('2d');
  renderWord(hangman.secretArray);
};


let drawHangman = (errorCount) => {
  switch (errorCount){
    case 1:{
      // Draw base line

      break;
    }
    case 2:{
      //Draw pole

      break;
    }
    case 3:{
      //Draw horizontal beam

      break;
    }
    case 4:{
      //Draw rope

      break;
    }
    case 5:{
      //Draw head

      break;
    }
    case 6:{
      //Draw body

      break;
    }
    case 7:{
      //Draw ledt hand

      break;
    }
    case 8:{
      //Draw right hand

      break;
    }
    case 9:{
      //Draw right foot

      break;
    }
    case 10:{
      //Draw left foot
      
      break;
    }
  }
};

let renderWord = (wordArray) => {
  // Spit every element of the array
};

let gameOver = () => {

};

let winner = () => {

};

createBoard(wordArray);
for (let i = 1; i < wordArray.length; i ++){
  drawHangman(i);

}
