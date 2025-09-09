document.addEventListener("DOMContentLoaded", () => {
  const playerScoreEl = document.getElementById("player-score");
  const computerScoreEl = document.getElementById("computer-score");
  const playerChoiceEl = document.getElementById("player-choice");
  const computerChoiceEl = document.getElementById("computer-choice");
  const resultTextEl = document.getElementById("result-text");
  const choiceButtons = document.querySelectorAll(".choice-btn");

  let playerScore = 0;
  let computerScore = 0;
  const choices = ["rock", "paper", "scissors"];
  const emojiChoices = {
    rock: "✊",
    paper: "✋",
    scissors: "✌",
  };

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };
  const getWinner = (player, computer) => {
    if (player === computer) {
      return "draw";
    }
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "player";
    }
    return "computer";
  };

  const updateGame = (playerChoice, computerChoice) => {
    const winner = getWinner(playerChoice, computerChoice);

    playerChoiceEl.textContent = emojiChoices[playerChoice];
    computerChoiceEl.textContent = emojiChoices[computerChoice];

    if (winner === "player") {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      resultTextEl.textContent = "You win!";
    } else if (winner === "computer") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultTextEl.textContent = "Computer wins!";
    } else {
      resultTextEl.textContent = "It's a draw!";
    }
  };

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerChoice = button.dataset.choice;
      const computerChoice = getComputerChoice();
      updateGame(playerChoice, computerChoice);
    });
  });
});
