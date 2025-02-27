const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0, computerScore = 0;

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultMessage = document.getElementById("results-msg");
const winnerMessage = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

// Get random computer choice
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

// Determine round winner
const getRoundResult = (player, computer) => {
  if (player === computer) return `It's a tie! Both chose ${player}`;
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    playerScore++;
    return `Player wins! ${player} beats ${computer}`;
  }
  computerScore++;
  return `Computer wins! ${computer} beats ${player}`;
};

// Update UI with results
const showResults = (playerChoice) => {
  const computerChoice = getComputerChoice();
  resultMessage.innerText = getRoundResult(playerChoice, computerChoice);
  playerScoreElement.innerText = playerScore;
  computerScoreElement.innerText = computerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMessage.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
};

// Reset game
const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.innerText = "0";
  computerScoreElement.innerText = "0";
  resultMessage.innerText = "";
  winnerMessage.innerText = "";
  optionsContainer.style.display = "block";
  resetGameBtn.style.display = "none";
};

// Event Listeners
document.querySelectorAll(".btn-option").forEach(button =>
  button.addEventListener("click", () => showResults(button.dataset.choice))
);

resetGameBtn.addEventListener("click", resetGame);
