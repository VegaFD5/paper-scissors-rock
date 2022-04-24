let computerSelection;
let playerSelection;

function computerPlay(){
    let answer = randomNumber();
    let paper = "paper";
    let scissors = "scissors"; 
    let rock = "rock";
   
    if(answer==0){
        return paper;
    }else if(answer==1){
        return scissors;
    }else{
        return rock;
    }
}

function computerSel(){
    let computerAnswer=computerPlay();
    return computerAnswer;
}

function playerSel(){
    let playerAnswer = prompt("Please make a choose: Paper, Scissors\
    or Rock");
    return playerAnswer;



}
    


function randomNumber(){
    let num = Math.floor(Math.random()*3);
    return num;    
}



function playRound(computerSelection, playerSelection){
    computerSelection = computerSel();
    playerSelection = playerSel();

   
    
    if(playerSelection===computerSelection){
        
        console.log("It's a draw");
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("Computer wins");
    }else if(playerSelection =="rock" && computerSelection == "scissors"){
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("player wins");
    }else if(playerSelection =="paper" && computerSelection == "scissors"){
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("computer wins");
    }else if(playerSelection =="rock" && computerSelection == "paper"){
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("computer wins");
    }else if(playerSelection =="scissors" && computerSelection == "paper"){
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("player wins");
    }else if(playerSelection =="paper" && computerSelection == "rock"){
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("player wins");
    }
}


function game(){
    for(let i=0; i <5; i++){
        playRound(computerSelection, playerSelection);
        if
    }
}

game();



