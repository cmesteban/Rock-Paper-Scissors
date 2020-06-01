function game(){
    function computerPlay(){
        let compSelection = Math.floor(Math.random() * 3);
        
        if(compSelection ==0) return "rock";
        if(compSelection ==1) return "paper";
        return "scissors";
    }
    
    function playerPlay(){
        let playerPrompt = prompt("")
    }
}