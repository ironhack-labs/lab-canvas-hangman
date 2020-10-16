// window.jasmine.getEnv().randomizeTests(false);
window.jasmine.getEnv().configure({
  random: false
});

const testWords = ['hello', 'world', 'foo', 'bar'];

describe('Hangman Game', () => {
  let hangman;

  beforeEach(() => {
    hangman = new Hangman(testWords);
  });

  describe('Hangman class constructor', () => {
    describe('words', () => {
      it('should be an array of words', () => {
        expect(hangman.words).toBeDefined();
        expect(hangman.words).toBeInstanceOf(Array);
      });

      it('should have all of the words passed in the array in the constructor', () => {
        expect(hangman.words.length).toEqual(testWords.length);
        expect(hangman.words).toEqual([...testWords]);
      });
    });

    describe('secretWord', () => {
      it('should be a string', () => {
        expect(hangman.secretWord).toBeDefined();
        expect(typeof hangman.secretWord).toBe('string');
      });

      it('should hold the value of one of the words in the array', () => {
        expect(hangman.words.includes(hangman.secretWord)).toBeTrue();
      });
    });

    describe('errorsLeft', () => {
      it('should be at the starting value', () => {
        expect(hangman.errorsLeft).toEqual(10);
      });
    });

    describe('guessedLetters', () => {
      it('should be an empty string', () => {
        expect(typeof hangman.guessedLetters).toBe('string');
        expect(hangman.guessedLetters.length).toEqual(0);
      });
    });

    describe('letters', () => {
      it('should be an empty array', () => {
        expect(hangman.letters).toBeInstanceOf(Array);
        expect(hangman.letters.length).toEqual(0);
      });
    });
  });

  describe('pickWord', () => {
    it('should be a function', () => {
      expect(typeof hangman.pickWord).toBe('function');
    });

    it('should return a string', () => {
      expect(typeof hangman.pickWord()).toBe('string');
    });
  });

  describe('checkIfLetter', () => {
    it('should be a function', () => {
      expect(typeof hangman.checkIfLetter).toBe('function');
    });

    it('should return a boolean', () => {
      let keyCode = 43;
      const result = hangman.checkIfLetter(keyCode);
      expect(typeof result).toBe('boolean');
    });

    it('should return false if given keycode of not a letter', () => {
      expect(hangman.checkIfLetter(43)).toEqual(false);
      expect(hangman.checkIfLetter(60)).toEqual(false);
      expect(hangman.checkIfLetter(100)).toEqual(false);
    });

    it('should return true if given keycode of a letter', () => {
      expect(hangman.checkIfLetter(65)).toEqual(true);
      expect(hangman.checkIfLetter(76)).toEqual(true);
      expect(hangman.checkIfLetter(90)).toEqual(true);
    });
  });

  describe('checkClickedLetters', () => {
    it('should be a function', () => {
      expect(typeof hangman.checkClickedLetters).toBe('function');
    });

    it('should return a boolean', () => {
      hangman.letters.push('I');
      expect(typeof hangman.checkIfLetter('N')).toBe('boolean');
    });

    it('should return true if letter has not been clicked', () => {
      hangman.letters.push('I', 'R', 'P');
      expect(hangman.checkClickedLetters('F')).toEqual(true);
    });

    it('should return false if letter has been clicked', () => {
      hangman.letters.push('I', 'R', 'P');
      expect(hangman.checkClickedLetters('R')).toEqual(false);
    });
  });

  describe('addCorrectLetter', () => {
    it('should be a function', () => {
      expect(typeof hangman.addCorrectLetter).toBe('function');
    });

    it('should add letters to guessedLetters string', () => {
      hangman.addCorrectLetter('R');
      expect(hangman.guessedLetters).toEqual('R');
    });
  });

  describe('addWrongLetter', () => {
    it('should be a function', () => {
      expect(typeof hangman.addWrongLetter).toBe('function');
    });

    it('should discount the amount of errors left', () => {
      hangman.errorsLeft = 7;
      hangman.addWrongLetter('P');
      expect(hangman.errorsLeft).toEqual(6);
    });
  });

  describe('checkGameOver', () => {
    it('should be a function', () => {
      expect(typeof hangman.checkGameOver).toBe('function');
    });

    it('should return a boolean', () => {
      expect(typeof hangman.checkGameOver()).toBe('boolean');
    });

    it('should return true if the errorsLeft is 0', () => {
      hangman.errorsLeft = 0;
      expect(hangman.checkGameOver()).toEqual(true);
    });

    it('should return false if the errorsLeft is 5', () => {
      hangman.errorsLeft = 5;
      expect(hangman.checkGameOver()).toEqual(false);
    });
  });

  describe('checkWinner', () => {
    it('should be a function', () => {
      expect(typeof hangman.checkWinner).toBe('function');
    });

    it('should return a boolean', () => {
      expect(typeof hangman.checkWinner()).toBe('boolean');
    });

    it('should return true if we guess all letters', () => {
      hangman = new Hangman(['IRONHACK']);
      hangman.guessedLetters = 'KHARCNIO';
      expect(hangman.checkWinner()).toEqual(true);
    });

    it('should return false if we haven\'t guessed all letters', () => {
      hangman = new Hangman(['IRONHACK']);
      hangman.guessedLetters = 'KHARCN';
      expect(hangman.checkWinner()).toEqual(false);
    });
  });
});
