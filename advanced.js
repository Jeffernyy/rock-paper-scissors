const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

const results = {
  // rock
  rockrock: "draw",
  rockpaper: "lose",
  rockscissors: "win",

  // paper
  paperrock: "win",
  paperpaper: "draw",
  paperscissors: "lose",

  // scissors
  scissorsrock: "lose",
  scissorspaper: "win",
  scissorsscissors: "draw",
};

const scores = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  draws: 0,
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("wins").innerText = "Loading...";
  document.getElementById("losses").innerText = "Loading...";
  document.getElementById("draws").innerText = "Loading...";

  getLastResult();
});

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = results[playerChoice + computerChoice];

  localStorage.setItem(
    "lastResult",
    (document.getElementById(
      "result"
    ).innerText = `You picked ${playerChoice}. The computer picked ${computerChoice}. The result is a ${result}.`)
  );

  result === "win"
    ? (scores.wins += 1)
    : result === "lose"
    ? (scores.losses += 1)
    : (scores.draws += 1);

  localStorage.setItem("scores", JSON.stringify(scores));

  updateScoreboard();

  if (playerChoice === "reset") {
    resetScore();
  }
}

function resetScore() {
  localStorage.removeItem("scores");
  localStorage.removeItem("lastResult");

  scores.wins = 0;
  scores.losses = 0;
  scores.draws = 0;

  updateScoreboard();

  document.getElementById("result").innerText = "...";
}

function updateScoreboard() {
  document.getElementById("wins").innerText = scores.wins;
  document.getElementById("losses").innerText = scores.losses;
  document.getElementById("draws").innerText = scores.draws;
}

function getLastResult() {
  const seconds = 5;
  let timeleft = seconds + 1;

  const timer = setInterval(() => {
    timeleft--;

    document.getElementById(
      "result"
    ).innerText = `Getting the last result ${timeleft} seconds...`;

    document.getElementById("wins").innerText = "Loading...";
    document.getElementById("losses").innerText = "Loading...";
    document.getElementById("draws").innerText = "Loading...";

    if (timeleft <= 1) {
      clearInterval(timer);

      setTimeout(() => {
        const lastResult = localStorage.getItem("lastResult");

        if (lastResult) {
          document.getElementById("result").innerText = lastResult;
          updateScoreboard();
        } else {
          document.getElementById("result").innerText = "Enjoy the game!";

          document.getElementById("wins").innerText = "No score found!";
          document.getElementById("losses").innerText = "No score found!";
          document.getElementById("draws").innerText = "No score found!";
        }
      }, 1000);
    }
  }, 1000);
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    playGame(btn.dataset.choice);
  });
});
