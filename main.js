//  hold the elements
const num = document.querySelector(".container .inputs input");
const btn = document.querySelector(".container .inputs button");
const check = document.querySelector(".container .check");
const chances = document.querySelector(".container .chances");
const again = document.querySelector(".container .again");
//  to get the random value
const randomNum = Math.floor(Math.random() * 100) + 1;
let tests = 10;
chances.textContent = `You have ${tests} chances`;

btn.addEventListener("click", () => {
    //  check if the input is empty
  if (num.value === ""||num.value<0) {
    alert("enter a possitive number");
  } else {
    
    tests--;
    chances.textContent = `You have ${tests} chances`;
    // check if you used all the chances
    if(tests==0)
    {
        check.textContent = `Ooops you failed`;
        check.style.color = "red";
        check.style.fontSize = "20px";
        again.style.display="block";
        btn.style.display="none";
        num.style.width="260px";

    }
    // check if your number = the random 
    else if (num.value == randomNum) {
        check.textContent = `WOW that's right`;
        check.style.visibility = "visible";
        check.style.color = "rgb(21, 250, 21)";
        check.style.fontSize = "30px";
    } 
    // check if your number > the random 
    else if (num.value > randomNum) {
        num.value = "";
        check.style.visibility = "visible";
        check.textContent = `Try again your number is larger than the target`;
    } 
    // check if your number < the random 
    else if (num.value < randomNum) {
      num.value = "";
      check.style.visibility = "visible";
      check.textContent = `Try again your number is smaller than the target`;
    } 
  }
});
