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
