/*
1.) get user hand
2.) calculate random computer hand
3.) compare hands
4.) display results
*/

var userHand;
var randHandNum;
var resultsDiv = document.querySelector(".results");
var gameResultColor = document.querySelector("body");
var isPlaying = true;
var computerHand;
var userWins = 0;
var comWins = 0;

while(isPlaying === true){
  userHand = prompt("rock, paper, or scissors?");
  randHandNum = Math.floor(Math.random() * 3)

  while(userHand !== "rock" && userHand !== "paper" && userHand !== "scissors"){
    userHand = prompt("not quite. rock, paper, or scissors?");
  }

  if(randHandNum === 0){
    computerHand = "computer threw rock, fam!";
  } else if(randHandNum === 1){
    computerHand = "computer threw paper, fam!";
  } else if(randHandNum === 2){
    computerHand = "computer threw scissors, fam!";
  } else {
    computerHand = "error";
  }

  if(userHand === "rock"){
    if(randHandNum === 0){
      resultsDiv.innerHTML = computerHand + " it's a tie!";
      gameResultColor.style.backgroundColor = "lightyellow";
    } else if(randHandNum === 1){
      resultsDiv.innerHTML = computerHand + " you lose!";
      gameResultColor.style.backgroundColor = "red";
      comWins++;
    } else if (randHandNum === 2){
      resultsDiv.innerHTML = computerHand + " you win!";
      gameResultColor.style.backgroundColor = "lightgreen";
      userWins++;
    } else {
      resultsDiv.innerHTML = "error";
    }
  } else if(userHand === "paper") {
    if(randHandNum === 0){
      resultsDiv.innerHTML = computerHand + " you win! ";
      gameResultColor.style.backgroundColor = "lightgreen";

      userWins++;
    } else if(randHandNum === 1){
      resultsDiv.innerHTML = computerHand + "it's a tie!";
      gameResultColor.style.backgroundColor = "lightyellow";
    } else if (randHandNum === 2){
      resultsDiv.innerHTML = computerHand + " you lose! ";
      gameResultColor.style.backgroundColor = "red";

      comWins++;
    } else {
      resultsDiv.innerHTML = "error";
    }
  } else if(userHand === "scissors"){
    if(randHandNum === 0){
      resultsDiv.innerHTML = computerHand + " you lose! ";
      gameResultColor.style.backgroundColor = "red";

      comWins++;

    } else if(randHandNum === 1){
      resultsDiv.innerHTML = computerHand + " you win! ";
      gameResultColor.style.backgroundColor = "lightgreen";

      userWins++;

    } else if (randHandNum === 2){
      resultsDiv.innerHTML = computerHand + "it's a tie!";
      gameResultColor.style.backgroundColor = "lightyellow";

    } else {
      resultsDiv.innerHTML = "error";
    }
  } else {
    resultsDiv.innerHTML = "sorry! we don't support " + userHand;
  }

  resultsDiv.innerHTML += "<p>user: " + userWins + "</p>";
  resultsDiv.innerHTML += "<p>com: " + comWins + "</p>"; 


  if(userWins === 3){
    isPlaying = false;
    resultsDiv.innerHTML += "<p>you are truly a winner!</p>";
  }

  else if(comWins === 3){
    isPlaying = false;
    resultsDiv.innerHTML += "<p>the com won!</p>";
  }

  if(userWins <3 && comWins < 3){
  isPlaying = confirm("do you want to play again?");
}
}
