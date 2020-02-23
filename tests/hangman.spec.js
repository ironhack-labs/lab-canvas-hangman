describe('Hangman Game', () => {
  let hangman;
  beforeEach(() => {
    hangman = new Hangman();
  });
  describe('Words to Pick', () => {
    it('There should be an array of words', () => {
      expect(hangman.words).toBeDefined();
    });
    it('There should be at least one word to pick', () => {
      expect(hangman.words.length).toBeGreaterThan(2);
    });
  });

  describe('Secret Word', () => {
    it('secretWord should exist', () => {
      expect(hangman.secretWord).toBeDefined();
    });

    it('getWord should be a function', () => {
      expect(typeof hangman.getWord).toBe('function');
    });

    it('getWord should return a string', () => {
      expect(typeof hangman.getWord()).toBe('string');
    });

    it('secretWord should be a string', () => {
      expect(typeof hangman.secretWord).toBe('string');
    });
  });

  describe('Check if is a letter', () => {
    it('checkIfLetter should be a function', () => {
      expect(typeof hangman.checkIfLetter).toBe('function');
    });

    it('checkIfLetter should receive a number', () => {
      expect(typeof hangman.checkIfLetter).toBe('function');
    });

    it('checkIfLetter should return a boolean', () => {
      let keyCode = 43;
      hangman.checkIfLetter(keyCode);
      expect(typeof keyCode).toBe('number');
    });

    it('checkIfLetter should return false', () => {
      expect(hangman.checkIfLetter(43)).toEqual(false);
    });

    it('checkIfLetter should return true', () => {
      expect(hangman.checkIfLetter(76)).toEqual(true);
    });
  });

  describe('Check if the letter was already clicked', () => {
    it('checkClickedLetters should be a function', () => {
      expect(typeof hangman.checkClickedLetters).toBe('function');
    });
    it('checkClickedLetters should receive a string', () => {
      let key = 'P';
      hangman.checkClickedLetters(key);
      expect(typeof key).toBe('string');
    });
    it('checkClickedLetters should return a boolean', () => {
      hangman.letters.push('I');
      expect(typeof hangman.checkIfLetter('N')).toBe('boolean');
    });

    it('checkClickedLetters should return true', () => {
      hangman.letters.push('I', 'R', 'P');
      expect(hangman.checkClickedLetters('F')).toEqual(true);
    });

    it('checkIfLetter should return false', () => {
      hangman.letters.push('I', 'R', 'P');
      expect(hangman.checkClickedLetters('R')).toEqual(false);
    });
  });

  describe('Add correct letters', () => {
    it('addCorrectLetter should be a function', () => {
      expect(typeof hangman.addCorrectLetter).toBe('function');
    });
    it('addCorrectLetter should receive a number', () => {
      let key = 'N';
      hangman.checkClickedLetters(key);
      expect(typeof key).toBe('string');
    });
    it('addCorrectLetter should add letters to guessedLetter string', () => {
      hangman.secretWord = 'Ironhack';
      hangman.addCorrectLetter(1);
      expect(hangman.guessedLetter).toEqual('R');
    });
  });

  describe('Wrong letters', () => {
    it('addWrongLetter should be a function', () => {
      expect(typeof hangman.addWrongLetter).toBe('function');
    });
    it('addWrongLetter should receive a string', () => {
      let letter = 'P';
      hangman.addWrongLetter(letter);
      expect(typeof letter).toBe('string');
    });
    it('addWrongLetter should discount the amount of errors left', () => {
      hangman.errorsLeft = 7;
      hangman.addWrongLetter('P');
      expect(hangman.errorsLeft).toEqual(6);
    });
  });

  describe('Check if the game is over', () => {
    it('checkGameOver should be a function', () => {
      expect(typeof hangman.checkGameOver).toBe('function');
    });
    it('checkGameOver should return a boolean', () => {
      expect(typeof hangman.checkGameOver()).toBe('boolean');
    });
    it('checkGameOver should return false if the errorsLeft is 0', () => {
      hangman.errorsLeft = 0;
      expect(hangman.checkGameOver()).toEqual(true);
    });
    it('checkGameOver should return false if the errorsLeft is 0', () => {
      hangman.errorsLeft = 5;
      expect(hangman.checkGameOver()).toEqual(false);
    });
  });

  describe('Check if we win', () => {
    it('checkWinner should be a function', () => {
      expect(typeof hangman.checkWinner).toBe('function');
    });
    it('checkWinner should return a boolean', () => {
      expect(typeof hangman.checkWinner()).toBe('boolean');
    });
    it('checkWinner should return true if we guess all letters', () => {
      hangman.secretWord = 'IRONHACK';
      hangman.guessedLetter = 'KHARCNIO';
      expect(hangman.checkWinner()).toEqual(true);
    });
    it('checkWinner should return true if we guess all letters', () => {
      hangman.secretWord = 'IRONHACK';
      hangman.guessedLetter = 'KHARCN';
      expect(hangman.checkWinner()).toEqual(false);
    });
  });
});
