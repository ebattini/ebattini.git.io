var endResult = document.querySelector(".result");
var superTryAgain = true;

while(superTryAgain){
  var tryAgain = true;
  var userGuess;
  var lives = 0;
  var easyRandNum = Math.floor((Math.random() * 20)+1);
  var medRandNum = Math.floor((Math.random() * 40)+1);
  var highRandNum = Math.floor((Math.random() * 60)+1);
  var difficulty = prompt("easy, medium, or hard");

  while(difficulty !== "easy" && difficulty !=="medium" && difficulty !== "hard"){
    difficulty = prompt("Hmm, that's not an option. EASY, MEDIUM, OR HARD: ");
  }

  if(difficulty === "easy"){
    alert("You selected the easiest difficulty!");
    while(tryAgain && lives < 6){
      userGuess = prompt("Guess the random number between 1-20. You have 6 attempts: ");

      if(userGuess > easyRandNum){
        alert("your guess is too high!");
        lives++;
      }

      else if (userGuess < easyRandNum) {
        alert("your guess is too low!");
        lives++;
      }

      else{
        alert("your guess was right!!");
        lives++;
        tryAgain = false;
      }

    }
    console.log(lives);

    if(lives === 6){
      endResult.innerHTML = "<p>you lose! you ran out of lives, the correct number was " + easyRandNum + ". You used " + lives + " tries!</p>";
    }

    else{
      endResult.innerHTML = "you win!! the number was " + userGuess + "! Congrats! It only took you " + lives + " tries!";
    }

  }

  else if(difficulty === "medium"){
    alert("You selected the medium difficulty!");
    while(tryAgain && lives < 4){
      userGuess = prompt("Guess the random number between 1-40. You have 4 attempts: ");

      if(userGuess > medRandNum){
        alert("your guess is too high!");
        lives++;
      }

      else if (userGuess < medRandNum) {
        alert("your guess is too low!");
        lives++;
      }

      else{
        alert("your guess was right!!");
        lives++;
        tryAgain = false;
      }

    }
    console.log(lives);

    if(lives === 4){
      endResult.innerHTML = "<p>you lose! you ran out of lives, the correct number was " + medRandNum + ". You wasted " + lives + " tries!</p>";
    }

    else{
      endResult.innerHTML = "you win!! the number was " + userGuess + "! Congrats! It only took you " + lives + " tries!";
    }

  }

  else if(difficulty === "hard"){
    alert("You selected the highest difficulty! Good luck!");
    while(tryAgain && lives < 3){
      userGuess = prompt("Guess the random number between 1-60. You have 3 attempts: ");

      if(userGuess > highRandNum){
        alert("your guess is too high!");
        lives++;
      }

      else if (userGuess < highRandNum) {
        alert("your guess is too low!");
        lives++;
      }

      else{
        alert("your guess was right!!");
        lives++;
        tryAgain = false;
      }

    }
    console.log(lives);

    if(lives === 3){
      endResult.innerHTML = "<p>you lose! you ran out of lives, the correct number was " + highRandNum + ". You wasted " + lives + " tries!</p>";
    }

    else{
      endResult.innerHTML = "you win!! the number was " + userGuess + "! Congrats! It only took you " + lives + " tries!";
    }

  }

  superTryAgain = confirm("Do you wish to try again?");
}
