const scores = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};

document.addEventListener("DOMContentLoaded", updateScoreboard);

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") result = "draw";
      else if (computerChoice === "paper") result = "lose";
      else result = "win";
      break;

    case "paper":
      if (computerChoice === "rock") result = "win";
      else if (computerChoice === "paper") result = "draw";
      else result = "lose";
      break;

    case "scissors":
      if (computerChoice === "rock") result = "lose";
      else if (computerChoice === "paper") result = "win";
      else result = "draw";
      break;

    case "reset":
      resetScore();
      updateScoreboard();
      return;

    default:
      console.log("Error");
      return;
  }

  document.getElementById(
    "result"
  ).innerText = `You picked ${playerChoice}. The computer picked ${computerChoice}. The result is a ${result}.`;

  if (result === "win") scores.wins += 1;
  else if (result === "lose") scores.losses += 1;
  else scores.draws += 1;

  localStorage.setItem("scores", JSON.stringify(scores));

  updateScoreboard();
}

function getComputerChoice() {
  const computerChoice = Math.random();
  let result = "";

  if (computerChoice >= 0 && computerChoice < 1 / 3) {
    result = "rock";
  } else if (computerChoice >= 1 / 3 && computerChoice < 2 / 3) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

function updateScoreboard() {
  document.getElementById("wins").innerText = scores.wins;
  document.getElementById("losses").innerText = scores.losses;
  document.getElementById("draws").innerText = scores.draws;
}

function resetScore() {
  localStorage.removeItem("scores");

  scores.wins = 0;
  scores.losses = 0;
  scores.draws = 0;

  document.getElementById("result").innerText = "...";
}
