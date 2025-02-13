(() => {
  const choices = ["rock", "paper", "scissors"];

  const scores = {
    wins: 0,
    losses: 0,
    draws: 0,
  };

  const message = {
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

  function runGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = message[playerChoice + computerChoice];

    const display = document.getElementById("display");
    display.innerText = `You picked "${playerChoice}". Computer picked "${computerChoice}". The result is a "${result}".`;

    if (result === "win") scores.wins++;
    else if (result === "lose") scores.losses++;
    else scores.draws++;

    updateScoreboard();
  }

  function getComputerChoice() {
    return choices[Math.trunc(Math.random() * choices.length)];
  }

  function updateScoreboard() {
    document.getElementById("win").innerText = scores.wins;
    document.getElementById("lose").innerText = scores.losses;
    document.getElementById("draw").innerText = scores.draws;
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      runGame(button.dataset.choice);
    });
  });
})();
