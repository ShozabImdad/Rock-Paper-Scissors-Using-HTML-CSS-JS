const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#computer-score");
const uChoice = document.querySelector("#user-choice");
const cChoice = document.querySelector("#comp-choice");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
};

const drawGame = () => {
msg.innerText = "Game was Draw. Play Again!"
msg.style.backgroundColor = "#05299E";
};

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You Win!"
        userScore++;
        uScore.innerText = userScore;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = "Computer Wins!"
        compScore++;
        cScore.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generate Computer Choice 
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false:true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false:true;
        } else {
            userWin = compChoice === "rock" ? false:true;
        }

        showWinner(userWin);
    };

    uChoice.innerText = userChoice;
    cChoice.innerText = compChoice;
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});