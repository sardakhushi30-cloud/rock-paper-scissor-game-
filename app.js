let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const container = document.querySelector(".game-container");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "😐 It's a Draw! Try again.";
  msg.style.backgroundColor = "#334155";

 
  container.classList.remove("win", "lose");
  container.classList.add("draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
  
 
  container.classList.remove("win", "lose", "draw");

  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `🎉 You WIN! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#22c55e";

   
    container.classList.add("win");

  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `💀 You LOSE! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#ef4444";

   
    container.classList.add("lose");
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    
    choice.style.transform = "scale(0.9)";
    setTimeout(() => {
      choice.style.transform = "scale(1)";
    }, 150);

    playGame(userChoice);
  });
});