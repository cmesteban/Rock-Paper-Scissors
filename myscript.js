game();
function game(){
    //Variables for the DOM
    const playerChoice = document.querySelectorAll('.playerWeapons');
    const roundFirst = document.getElementById("first");
    const roundSecond = document.getElementById("second");
    const liveScore = document.getElementById("liveScore");

    //variables for score and round info
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;

    //Players choose a weapon by clicking which calls other functions which plays the round
    playerChoice.forEach(playerWeapons => {
        playerWeapons.addEventListener('click', (e) =>{

            //play a round with computer and player selections
            let cpuPick = computerChoice();
            let roundResult = playRound(e.srcElement.id, cpuPick);

            //trigger the animation for player
            animationPlayer(e.srcElement.id);
            animationCPU(`CPU${cpuPick}`);

            //display the round number and round result
            roundFirst.textContent = `Round ${roundCount++}`;
            roundSecond.innerHTML = roundResult;

            //update the score
            if(roundResult.includes("You Win")){
                playerScore++;
            }else if(roundResult.includes("You Lose")){
                computerScore++;
            }

            //Display the score
            liveScore.textContent = playerScore + " - " + computerScore;

            //Display Final Result
            if(playerScore==3 || computerScore==3){
                if(playerScore>computerScore){
                    roundFirst.textContent = 'YOU BEAT THE COMPUTER!';
                    roundSecond.textContent = `You: ${playerScore} vs CPU: ${computerScore}`;

                }else{
                    roundFirst.textContent = 'YOU LOST TO THE COMPUTER :(';
                    roundSecond.textContent = `You: ${playerScore} vs CPU: ${computerScore}`;
                }
            

                //reset the scores and roundCount to play another game
                playerScore =0;
                computerScore=0;
                roundCount=1;
            }
        });
    });
}

//Computer random pick and then return choice
function computerChoice(){
    switch (Math.floor(Math.random() * 3)){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

//Play a round and return the result
function playRound(playerSelection, computerSelection){
    let result = null;

    if(playerSelection==computerSelection){
        result = `You both played ${computerSelection} <br> It's a Draw!`;
    }else if((playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")){
        result = `${playerSelection} beats ${computerSelection} <br> You Win!`;
    }else{
        result = `${computerSelection} beats ${playerSelection} <br> You Lose!`;
    }
    return result;
}

//player image animation when you click
function animationPlayer(imageID){
    const imageToAnimate = document.getElementById(`${imageID}`);
    imageToAnimate.classList.add('playerImgAnimation');
    imageToAnimate.addEventListener("animationend", function(){
        imageToAnimate.classList.remove("playerImgAnimation");
    });
}

//computer image animation
function animationCPU(imageID){
    const imageToAnimate = document.getElementById(`${imageID}`);
    imageToAnimate.classList.add('computerImgAnimation');
    imageToAnimate.addEventListener("animationend", function(){
        imageToAnimate.classList.remove("computerImgAnimation");
    });
}