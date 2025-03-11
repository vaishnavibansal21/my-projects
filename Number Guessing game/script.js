let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".low");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let preGuess = [];
let attempts = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    preGuess.push(guess);
    if (attempts === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is too loww`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is too highh`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  attempts++;
  remaining.innerHTML = `${11 - attempts}`;
}

function displayMsg(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame() {
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(event){
  randomNumber=parseInt(Math.random() * 100 + 1);
  preGuess=[]
  attempts=1
  guessSlot.innerHTML=''
  remaining.innerHTML = `${11 - attempts}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame=true
  });
}
