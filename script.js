let userScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll(".button");
const msg = document.querySelector("#msg");
const user = document.querySelector("#userScore");
const comp = document.querySelector("#compScore");

const genCompChoice = () =>{
    const options = ["Stone","Paper","Scissor"];
    const compChoice = Math.floor(Math.random() *3);
    return options[compChoice];
};

const drawGame = () =>{
    console.log("Draw game");
    msg.innerText = " Draw Game, Play Again ! ";
    msg.style.backgroundColor = "black";
};

const winGame = (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        user.innerText = `${userScore}`;
        console.log(" You Win! ");
        msg.innerText = ` You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp.innerText = `${compScore}`;
        console.log(" You Lose! ");
        msg.innerText = ` You Lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("USER =", userChoice);
    const compChoice = genCompChoice();
    console.log("COMP =", compChoice);

    //winning rules
    if(userChoice === compChoice){
           drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Stone"){
             userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissor" ? false : true;
        }
        else{
            userWin = compChoice === "Stone" ? false : true;
        }
        winGame(userWin, userChoice, compChoice);
    }
};

buttons.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        //console.log(userChoice, "was clicked");
        playGame(userChoice);
    });
});