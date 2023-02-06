`use strict`;
// elements
const userChoiceEl = document.getElementById(`isuser`);
const compChoiceEl = document.getElementById(`iscomputer`);
const scoreEl = document.getElementById(`scorenumber`);
const resultEl = document.getElementById(`result`);

// global variables
let userScore = 0;

// functions
const getCompChoice = function () {
  const weapon = [`rock`, `paper`, `scissor`];
  const randomNumber = Math.trunc(Math.random() * 3);
  const randomChoice = weapon[randomNumber];
  return randomChoice;
};

const getResult = function (userChoice, compChoice) {
  if (userChoice === `rock`) {
    if (compChoice === `rock`) {
      return `draw`;
    } else if (compChoice === `paper`) {
      return `lose`;
    } else if (compChoice === `scissor`) {
      return `win`;
    }
  } else if (userChoice == `paper`) {
    if (compChoice === `rock`) {
      return `win`;
    } else if (compChoice === `paper`) {
      return `draw`;
    } else if (compChoice === `scissor`) {
      return `lose`;
    }
  } else if (userChoice == `scissor`) {
    if (compChoice === `rock`) {
      return `lose`;
    } else if (compChoice === `paper`) {
      return `win`;
    } else if (compChoice === `scissor`) {
      return `draw`;
    }
  }
};

const updateScore = function (userChoice, compChoice, result) {
  if (result === `win`) {
    userScore++;
    scoreEl.innerText = userScore;
    userChoiceEl.innerText = userChoice;
    compChoiceEl.innerText = compChoice;
    resultEl.innerText = `you win`;
  } else if (result === `lose`) {
    userScore--;
    scoreEl.innerText = userScore;
    userChoiceEl.innerText = userChoice;
    compChoiceEl.innerText = compChoice;
    resultEl.innerText = `you lose`;
  } else if (result === `draw`) {
    userScore;
    scoreEl.innerText = userScore;
    userChoiceEl.innerText = userChoice;
    compChoiceEl.innerText = compChoice;
    resultEl.innerText = `draw`;
  }
};

const playGame = function (weapon) {
  const userChoice = weapon;
  const compChoice = getCompChoice();
  const result = getResult(userChoice, compChoice);
  updateScore(userChoice, compChoice, result);
};

// events
