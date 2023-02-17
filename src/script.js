`use strict`

let newGuess = document.querySelector(`input`);
let submit = document.querySelector(`.submit`);
let previousGuesses = document.querySelector(`.previous`)
let remainingGuesses = document.querySelector(`.Remaining`)
let tip = document.querySelector(`.tip`);

let num = Math.trunc(Math.random() * 100 + 1)
console.log(num);
let prevguesses = [];
let remguesses = 10;
let isreset = false;

function givetip() {
    if (+newGuess.value > num && +newGuess.value <= 100) {
        tip.innerHTML = `Too high!`;
    }
    else if (+newGuess.value < num && +newGuess.value >= 1) {
        tip.innerHTML = `Too low!`;
    }
    else {
        tip.innerHTML = `Not in range. Play by the rules!`;
    }
}

function status(msg) {
    givetip();
    prevguesses.push(msg);
    previousGuesses.innerHTML = prevguesses;
    newGuess.value = ``;
    --remguesses;

    if (remguesses == 0) {
        isreset = true;
        submit.innerHTML = `Reset the game`
        tip.innerHTML = `You lost, kid 😏`
    }
    remainingGuesses.innerHTML = remguesses;
}

function doit() {
    if (isreset == false) {
        if (newGuess.value == num) {
            tip.innerHTML = `You won`;
            isreset = true;
            submit.innerHTML = `Reset the game`
        }
        else if (!newGuess.value) {
            return;
        }


        else {
            status(newGuess.value)
        }
    }
    else {
        submit.innerHTML = `submit`
        newGuess.value = ``;
        prevguesses = [];
        remguesses = 10;
        remainingGuesses.innerHTML = remguesses;
        isreset = false;
        previousGuesses.innerHTML = prevguesses;
        num = Math.trunc(Math.random() * 100 + 1)
        tip.innerHTML = `Guess!`
    }

}

submit.addEventListener(`click`, doit)