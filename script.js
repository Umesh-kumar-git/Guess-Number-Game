const form = document.querySelector("form");
let UserInput = document.querySelector("#number");
let submit = document.querySelector("#btn");
let alert = document.querySelector(".alert");
let Guess_previous_Numbers = document.querySelector(".GuessNumbers");
let result = document.querySelector(".result");
let hint_box = document.querySelector(".hint-box");
let remain =document.querySelector("#remain");
let gameOver =document.getElementById("resultWapper");

let p = document.createElement("button");


let remainig = 10;
let preGuess = [];
let RandomNumber = Math.floor(Math.random() * 100 + 1);
let PlayGame = true;

if (PlayGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(UserInput.value);
    validation(guess);
    form.reset();
    guess="";
  });

}



function validation(Guess) {
  if (isNaN(Guess)) {
    alert.innerHTML = " Please Enter valid number";
  } else if (Guess < 1) {
    alert.innerHTML = "Number should be more then 0";
  } else if (Guess > 100) {
    alert.innerHTML = "Number should be less then 100";
  } else {
    preGuess.push(Guess);
    displayPrevious(Guess);
    Hints(Guess);
    counter()
    
  }
}



function counter() {
    remainig--;
    remain.innerHTML=` Remain: ${remainig}`
}

function displayPrevious(Guess) {
  Guess_previous_Numbers.innerHTML = ` Your previous guesses: ${preGuess}`;
  overGame()
  if (RandomNumber === Guess) {
    Match();
  }
}

function Hints(Guess) {
  if (Guess > RandomNumber)
    hint_box.innerHTML = " opps! Your Number is High  ";
  else if (Guess < RandomNumber) {
    hint_box.innerHTML = " Opps! Your Number is Low ";
  }
}

function Match() {
  result.innerHTML = "Yaahooo! It's Match";
  result.style.background = "green";
  endGame();
}

function  overGame(){
    if (preGuess.length===10) {

        endGame();
        result.style.background = "red ";
       result.innerHTML="opps!  Restart"

    }
 
}

function endGame() {
  UserInput.value = " ";
  UserInput.setAttribute("disabled", "");
  PlayGame = false;
  console.log(PlayGame);
  p.innerText="Start";
  p.setAttribute('id','start-btn')
  document.getElementById("resultWapper").appendChild(p);
  newGame();
  if (PlayGame==false) {
    submit.setAttribute("disabled"," ")
  }
}

function newGame() {
  
    p.addEventListener("click", function () {
    remainig =10;
    remain.innerHTML="";
    result.innerHTML = " ";
    preGuess = [];
    result.style.background = "none";
    Guess_previous_Numbers.innerHTML=" ";
    hint_box.innerHTML="";
    UserInput.removeAttribute("disabled");
    result.style.backgrounds = " none";
    RandomNumber = Math.floor(Math.random() * 100 + 1);
    gameOver.removeChild(p);
    PlayGame=true;
    submit.removeAttribute("disabled")

  });
}