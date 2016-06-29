var userAge = prompt("how old are you?");
var isAMember = confirm("are you a member?");
var bodyEl = document.querySelector("body");

//logical AND
if (userAge >= 21 && isAMember) {
  //user is of age and a member
  bodyEl.innerHTML = "welcome to my site!"
  bodyEl.style.backgroundColor = "chartreuse";

  var wantsDrink = confirm("welcome to the site. can i get you a beverage?");

  //ternary operator
  bodyEl.innerHTML += wantsDrink ? "<p>get this person a drink, stat!</p>" : "<p>well fine, be boring.</p>";
} else {
  //user is either not of age or not a member
  if(userAge < 21 && !isAMember){
    //user is not of age AND not a member
    bodyEl.innerHTML = "you're too young, and you're no member! get out."
    bodyEl.style.backgroundColor = "tomato";
  } else if (userAge < 21) {
    //user is not of age, but is for some reason a member???
    bodyEl.innerHTML = "you're too young, kid. also, how are you a member?";
    bodyEl.style.backgroundColor = "orange";
  } else if (!isAMember) {
    //user is of age, but is not a member
    bodyEl.innerHTML = "you're no member, but you could be!";
    bodyEl.style.backgroundColor = "orange";
  }
}
