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
document.getElementById("rock").addEventListener("click",function(){
    console.log("nuifignrgin");
    if(Math.max(computerScore,humanScore) < 5){
        let x="rock";
        playRound(x);
    }
});
document.getElementById("paper").addEventListener("click",function(){
    if(Math.max(computerScore,humanScore) < 5){
        let x="paper";
        playRound(x);
    }
});
document.getElementById("scissors").addEventListener("click",function(){
    if(Math.max(computerScore,humanScore) < 5){
        let x="scissors";
        playRound(x);
    }
});
const playRound = (humanChoice) => {
    const computerChoice = getComputerChoice();
    var sit = document.getElementById("sit");
    var humanDisplayedScore = document.getElementById("humanScore");
    var computerDisplayedScore = document.getElementById("computerScore");
    if(computerChoice===humanChoice){
        sit.textContent=`Tie! Both of you picked ${computerChoice}.`
    }
    else if((computerChoice==="scissors" && humanChoice=="paper") || (computerChoice==="rock" && humanChoice==="scissors") || (computerChoice==="paper" && humanChoice==="rock")){
        sit.textContent=`You lost! ${computerChoice} beats ${humanChoice}`
        computerScore++;
        computerDisplayedScore.textContent = computerScore.toString();
    }
    else{
        sit.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        humanDisplayedScore.textContent = humanScore.toString();
    }
    if(computerScore==5){
        sit.textContent = `The computer managed to read your mind! You lost noob.`;
    }
    if(humanScore==5){
        sit.textContent = `You managed to somehow outwit the Computer! Good job!`
    }
}