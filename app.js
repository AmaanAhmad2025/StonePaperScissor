let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice)=>{
    console.log(`User's choice is: ${userChoice}`);
    const compChoice = genCompChoice()
    console.log(`Computer's choice is: ${compChoice}`);
    
    if(userChoice === compChoice){
        console.log("It's a draw");
        msg.innerText = "It's a draw";
        msg.style.backgroundColor = "black";
    }
    
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        if(userWin){
            userScore++;
            userScorePara.innerText = `${userScore}`;
            console.log("You win");
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            compScore++;
            compScorePara.innerText = `${compScore}`;
            console.log("Computer win");
            msg.innerText = `Computer win! Computer's ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});