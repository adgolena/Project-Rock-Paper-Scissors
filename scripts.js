
let choice = ['Rock','Paper','Scissor'];
let playerPoints = 0;
let computerPoints = 0;
let gamePlayed = 0;

function getComputerChoice(){
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log("Computer chose:"+randomChoice);
    
    return randomChoice;
}

function getPlayerChoice(){
    let randomChoice = choice[Math.floor(Math.random()*choice.length)];
    
    console.log("Player chose:"+randomChoice);
    return randomChoice;
}



 



function playRound(pSelection, cSelection){
    
    if((pSelection=='Paper'&& cSelection=='Rock')
    ||(pSelection=='Rock'&& cSelection=='Scissor')
    ||(pSelection=='Scissor'&& cSelection=='Paper')){
        console.log("Player Wins");
        playerPoints++;
    }
    else if(pSelection==cSelection){
        console.log("Draw")
    }
    else{
        console.log("Computer Wins")
        computerPoints++;
    }
    return;
   
}




function game(){

    for(let i=0; i<5;i++)
    {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        gamePlayed++;
        
    }
    console.log('Number of Games Played:'+gamePlayed);
    console.log('Player:'+playerPoints+ '    '+'Computer:'+computerPoints);
}

game();
 