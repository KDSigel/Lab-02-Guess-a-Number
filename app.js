// import functions and grab DOM elements
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const triesRemaining = document.querySelector('#tries-remaining');
const tooHighOrLow = document.querySelector('#too-high-or-low');
const winLose = document.querySelector('#win-or-lose');

// initialize global state
let correctNumber = Math.ceil(Math.random() * 20);
// let howManyLeft = 4;

console.log(correctNumber);
// console.log(howManyLeft);

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitBtn.addEventListener('click', () => {
    const guess = guessInput.value;

    console.log(guess);
});

function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;
}