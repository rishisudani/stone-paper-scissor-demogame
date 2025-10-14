let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScoremsg = document.querySelector("#user-score");
const compScoremsg = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const optionId = Math.floor(Math.random() * options.length);
    return options[optionId];
};

const gameDraw = (userChoice) => {
    msg.innerText = `Game Draw. You Both Choose ${userChoice} .Play Again.`;
    msg.style.backgroundColor = '#001524' ;
};

const gameResult = (userWin,userChoice,compChoice) => {
    if (userWin) 
    {
        msg.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoremsg.innerText = userScore;
    }
    else
    {
        msg.innerText = `You Lose. Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoremsg.innerText = compScore;
    }
};

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) 
    {
        gameDraw(userChoice);        
    }
    else 
    {
        let userWin = true;

        if (userChoice === "stone") 
        {
            userWin = compChoice === "paper" ? false : true;           
        }
        else if (userChoice === "paper") 
        {
            userWin = compChoice === "scissor" ? false : true;
        }
        else if (userChoice === "scissor") 
        {
            userWin = compChoice === "stone" ? false : true;
        }
        gameResult(userWin,userChoice,compChoice);
    };
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});