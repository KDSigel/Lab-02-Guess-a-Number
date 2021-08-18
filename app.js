// import functions and grab DOM elements
const guessInput = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#submit-btn');
const triesRemaining = document.querySelector('#tries-remaining');
const highLowWinLose = document.querySelector('#high-low-win-lose');

// initialize global state
let correctNumber = Math.ceil(Math.random() * 20);
let guessesLeft = 3;

console.log(correctNumber);

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitBtn.addEventListener('click', () => {
    let guess = Number(guessInput.value);
    let matchOrNot = compareNumbers(guess, correctNumber);
    let howManyLeft = (guessesLeft--);

    if (matchOrNot === 0) {
        highLowWinLose.textContent = 'Bang on!';
        triesRemaining.textContent = '';
        submitBtn.style.display = 'none';
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

function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return 0;
    if (guess < correctNumber) return -1;
    if (guess > correctNumber) return 1;
}