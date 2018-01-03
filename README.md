![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Canvas Hangman

## Introduction

In this exercise, we are going to create the classic game [Hangman](https://en.wikipedia.org/wiki/Hangman_(game)). In this game, we have to figure out a secret word by guessing one letter at a time, with each error, the man will get one step closer to death! The goal is to successfully guess the word before the man gets hanged.

![](https://i.imgur.com/wrQrY1T.png)

As we have learned, we can't confront the whole game without splitting it up into smaller steps. We will split it up into three different parts: structure, logic, and game layout. This technique is known as **incremental build.**

We will separate the game logic from the iteration with the `canvas`. We should be able to play from the console first and then add the graphics.p

### Requirements

- [Fork this repo]()
- Clone this repo into your `~/code/labs`
- The images are also included in the repository

## 1. First iteration: Game Logic

:::info
In order to do the game logic, we add some **Jasmine** tests to help you. Navigate to:

```htmlmixed=
starter_code
  |___ jasmine
```
Open the `SpecRunner.html` to check them.
:::

### Hangman Constructor

First, of at all let's create our Hangman constructor. It should have the following properties:

- **words**. An array where we will store all the words that the player need to guess. We will take one of them randomly.
- **secretWord**. Here we will store the word chosen for each game.
- **letters**. An array to store the letters the user already clicked, so we do not repeat them.
- **guessedLetter**. A string to store the letters the user clicked and guessed. We will use this to know when the user wins.
- **errorsLeft**. It should start at 10, and decrease every time a user clicks on a letter that is not in the word.

### Prototypes properties

- `getWord()`. Returns a random word from our array `words`.
- `checkIfLetter`. This function should check if the key the user has typed is a letter.
- `checkClickedLetters`. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
- `checkGameOver`. Returns a bolean value, `true` if the users lose, and `false` in any other case.
- `checkWinner`. Check if the users win and return a boolean value.
- `addCorrectLetter`. Adds to the `guessedLetter` variable the letter that was pressed. Also, it should check if the user wins.
- `addWrongLetter`. Should subtract one from the variable `errorsLeft` and check if the game is over.

## 2. Second Iteration: Draw in Canvas

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3e1e1919b29ba77e77cdcec2ed7b92c5.png)

Now we need to start drawing the hangman in order to finish our game! As we said, we will do it in a different file separating it from the logic.

Let´s create a constructor `HangmanCanvas` and store in a variable our `canvas`. After storing it, we should get the context. Remember `getContext('2d')`. We also want to store in a variable the secret word.

### Creating the board

First, we need to draw the board. We should clear the `canvas`, so every time we start the game we have a clean one. We can also set up here the `width` we want to set to our lines.

### Draw the Secret Word Lines

We know the secret word so we should put one line for each of the letters the user has to guess.

### Write the Guessed Letters and the Wrong Ones

Every time a user clicks the keyboard, after checking if the letter was not already clicked, we should write it on our board. If the secret word includes the letter we should write it in the position it corresponds, and if is not included in the secret word, we will write it on the top right so the user knows which ones he already clicked.

### Draw the Hangman

The last task, we need to draw **THE HANGMAN**. You can notice the drawing is composed of lines and one circle. Go ahead and think how can we do it :wink:

## Bonus Iteration

Your game is finished! Anybody can play it, but we need to show them something when they win or lose, so go ahead and create two functions `gameOver` and `winner`, to display the images available on the `starter_code > images` folder.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1dc0d7772d204da800d078c153c12e47.png)
