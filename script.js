
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

const totalScore={playerScore:0, computerScore:0}


function getComputerChoice() {
  const rpsChoice=['Rock','Paper','Scissors'];
  const randomChoice=Math.floor(Math.random()*3);
return rpsChoice[randomChoice];
}




function getResult(playerChoice, computerChoice) {

//score=1 user wins
let score=0;
  if (playerChoice==computerChoice)
  {
    score=0;
  }
  // all conditions in which human wins
  else if(playerChoice=='Rock' && computerChoice =='Scissors'){
    score=1
  }

    else if(playerChoice=='Paper' && computerChoice =='Rock'){
    score=1
  }

    else if(playerChoice=='Scissors' && computerChoice =='Paper'){
    score=1
  }
//computer wins
  else{
    score=-1;
  }
  return score;
}

  console.log(getResult('Rock', 'Paper'))



// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {


  const resultDiv=document.getElementById('result');
  const handsDiv=document.getElementById('hands')

  if (score==-1)
    resultDiv.innerText=("You Lose\n Computer Won")
  else if (score==1)
    resultDiv.innerText=("You Won \n Computer Loss")
  else
    resultDiv.innerText=("Match Draw")
}




// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
console.log({playerChoice})

  let compChoice=getComputerChoice();
  console.log({compChoice})

  const score=getResult(playerChoice, compChoice)
  console.log(score)

  totalScore['playerScore']+=score;

  showResult(score,playerChoice,compChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
 
  const rpsButton=document.querySelectorAll('.rpsButton')

  rpsButton[0].onclick=()=>{
    console.log(rpsButton[0].value)
    
  }

  rpsButton.forEach(rpsButton=>{
    rpsButton.onclick=()=>onClickRPS(rpsButton.value);
  })

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *




  // Add a click listener to the end game button that runs the endGame() function on click
const endGameButton=document.getElementById('endGameButton');
  endGameButton.onclick=()=>endGame(totalScore);
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
totalScore['playerScore']=0;
  const resultDiv=document.getElementById('result');
  const handsDiv=document.getElementById('hands')

  resultDiv.innerText='';
  
}

playGame()
