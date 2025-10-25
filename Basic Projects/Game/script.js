let randomNo = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const input = document.querySelector("#guessfield");
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastGusses");
const lowerH = document.querySelector(".lowerH");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNo}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNo) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNo) {
        displayMessage(`Number is too low!`);
    } else if (guess > randomNo) {
        displayMessage(`Number is too high!`);
    }
}

function displayMessage(message) {
    lowerH.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    input.value = "";
    guesses.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function newGame() {
    const newGamebtn = document.querySelector("#newGame");
    if (newGamebtn) {
        newGamebtn.addEventListener("click", function () {
            randomNo = parseInt(Math.random() * 100 + 1);
            prevGuess = [];
            numGuess = 1;
            guesses.innerHTML = "";
            remaining.innerHTML = `${11 - numGuess}`;
            input.removeAttribute("disabled");
            if (startOver.contains(p)) {
                startOver.removeChild(p);
            }
            playGame = true;
        });
    }
}

function endGame() {
    input.value = "";
    input.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
