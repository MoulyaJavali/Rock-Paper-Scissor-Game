let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const resetScore=document.querySelector(".reset");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");



resetScore.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userScorePara.innerText="0";
    compScorePara.innerText="0";
    msg.innerText="Play your move";
    msg.style.backgroundColor="black";
    resetScore.style.display = "none";
})

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>
{
    console.log("Game was draw!!");
    msg.innerText="Game was Draw. Try Again";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    console.log("You won!");
    msg.innerText=`You won! Your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScorePara.innerText=userScore;
    
}
else{
    compScore++;
    console.log("You lost!");
    msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScorePara.innerText=compScore;
}
}
const playGame=(userChoice)=>{
    console.log("user choice :",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice :",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=0;
        
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
}
resetScore.style.display = "none";

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
        resetScore.style.display = "inline-block";
    });
});