// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const triesRemaining = document.querySelector('#tries-remaining');
const highLowWinLose = document.querySelector('#high-low-win-lose');
const numberWon = document.querySelector('#number-won');
const numberLost = document.querySelector('#number-lost');

// initialize global state
let correctNumber = Math.ceil(Math.random() * 20);
let guessesLeft = 3;
let numberOfLoses = 0;
let numberOfWins = 0;

console.log(correctNumber);

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitBtn.addEventListener('click', () => {
    let guess = Number(guessInput.value);
    let matchOrNot = compareNumbers(guess, correctNumber);
    let howManyLeft = (guessesLeft--);

    if (howManyLeft === 0) {
        triesRemaining.textContent = 'You failed';
        submitBtn.textContent = 'try again?';
        highLowWinLose.textContent = '';
        numberOfLoses++;
        numberLost.textContent = Number(numberOfLoses);
        return;
    }
    if (matchOrNot === 0) {
        highLowWinLose.textContent = 'Bang on!';
        triesRemaining.textContent = '';
        submitBtn.style.display = 'none';
        numberOfWins++;
        numberWon.textContent = Number(numberOfWins);
        return;
    }
    if (matchOrNot === -1) {
        highLowWinLose.textContent = 'Too Low!';
        triesRemaining.textContent = howManyLeft + ' tries remaining';
    }
    if (matchOrNot === 1) {
        highLowWinLose.textContent = 'Too high!';
        triesRemaining.textContent = howManyLeft + ' tries remaining';
    }
});