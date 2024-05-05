let computerScore = 0;
let humanScore = 0;
const getComputerChoice = () => {
    let x=Math.random();
    if(x<=0.33){
        return "scissors";
    }
    else if(x<=0.66){
        return "paper";
    }
    else{
        return "rock";
    }
}

const getHumanChoice = () => {
    let x= (prompt("What is your choice?")).toLowerCase();
    while(x!="scissors" && x!="rock" && x!="paper"){
        x = (prompt("Invalid input! Please enter your choice again.")).toLowerCase();
    }
    return x;
}

const playRound = () => {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    if(computerChoice===humanChoice){
        console.log(`Tie! Both of you picked ${computerChoice}.`)
    }
    else if((computerChoice==="scissors" && humanChoice=="paper") || (computerChoice==="rock" && humanChoice==="scissors") || (computerChoice==="paper" && humanChoice==="rock")){
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else{
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

const playGame = () => {
    for(let i=0;i<5;i++){
        playRound();
    }
    console.log(`Final score`);
    if(computerScore===humanScore){
        console.log(`You tied with the Computer! ${humanScore}-${computerScore}`);
    }
    else if(computerScore>humanScore){
        console.log(`You lost against the Computer! ${humanScore}-${computerScore}`);
    }
    else{
        console.log(`You won against the Computer! ${humanScore}-${computerScore}`);
    }
}

playGame();