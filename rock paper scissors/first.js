let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
    } else {
        console.log("You Lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        computerScore++;
    }
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#computer-score").innerText = computerScore;
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
