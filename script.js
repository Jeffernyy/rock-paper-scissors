const scores = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function runGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (playerChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        result = "tie";
        break;
      case "paper":
        result = "lose";
        break;
      case "scissors":
        result = "win";
        break;
      default:
        console.log("Error");
    }
  } else if (playerChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        result = "win";
        break;
      case "paper":
        result = "tie";
        break;
      case "scissors":
        result = "lose";
        break;
      default:
        console.log("Error");
    }
  } else if (playerChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        result = "lose";
        break;
      case "paper":
        result = "win";
        break;
      case "scissors":
        result = "tie";
        break;
      default:
        console.log("Error");
    }
  }

  document.getElementById(
    "display"
  ).innerText = `You picked "${playerChoice}". Computer picked "${computerChoice}". The result is "${result}".`;

  switch (result) {
    case "win":
      scores.wins = scores.wins + 1;
      break;
    case "lose":
      scores.losses = scores.losses + 1;
      break;
    case "tie":
      scores.ties = scores.ties + 1;
      break;
    default:
      console.log("Error");
  }

  document.getElementById("win").innerText = scores.wins;
  document.getElementById("lose").innerText = scores.losses;
  document.getElementById("tie").innerText = scores.ties;
}

function getComputerChoice() {
  const randomNumber = Math.random();
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    result = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    result = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    result = "scissors";
  }

  return result;
}

document.getElementById("rock").addEventListener("click", () => {
  runGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  runGame("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  runGame("scissors");
});
