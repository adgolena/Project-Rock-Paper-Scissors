
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



 



function playRound(pSelection){
    let result = '';
    //console.log("player selection is: " + pSelection.id.);
    const cSelection = getComputerChoice();
    if((pSelection=='Paper'&& cSelection=='Rock')
    ||(pSelection=='Rock'&& cSelection=='Scissor')
    ||(pSelection=='Scissor'&& cSelection=='Paper')){
        result = "Player Wins";
        playerPoints++;
        
    }
    else if(pSelection==cSelection){
        result = "Draw";
    }
    else{
        result = "Computer Wins";
        computerPoints++;
    }
    /*
    const container = document.querySelector('resultDiv');
    const content = document.createElement('div');
    content.textcontent = result;
    
    container.appendChild(content);*/
 
    document.getElementById('resultDiv').innerHTML = result;
    gamePlayed++;
    game();
    return;
   
}




function game(){

   
    //console.log('Number of Games Played:'+ gamePlayed);
   if(gamePlayed<5){
        document.getElementById('score').innerHTML = 'Player:'+playerPoints+ '    '+'Computer:'+computerPoints;
        return;
   }else if(gamePlayed=5)
   {
        if(playerPoints>computerPoints){
            document.getElementById('winner').innerHTML = 'Player Wins!';
            document.getElementById('score').innerHTML = 'Player:'+playerPoints+ '    '+'Computer:'+computerPoints;
        }else
        {
            document.getElementById('winner').innerHTML = 'Computer Wins!';
            document.getElementById('score').innerHTML = 'Player:'+playerPoints+ '    '+'Computer:'+computerPoints;
            disableButton();
            //butttons.disabled = true;
        }
        

   }
   
}
   
    


//game();


//const rockBtn= document.querySelector('.rock');
//rockBtn.addEventListener('click',game());
//rockBtn.addEventListener('click',alertFunction);



const butttons = document.querySelectorAll('button');

butttons.forEach((button) => {
    console.log("working")
    button.addEventListener('click',()=>{
        playRound(button.id)
    });
});

function disableButton(){
    butttons.forEach(button =>{
        button.disabled = true;
    });
}

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

 // alertFunction();





 