//initializing values//
let totalAttempts = 5;
let attempts = 0;
let won = 0;
let lost = 0;

//form
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guess = form.querySelector("#guess");
const checkButton = form.querySelector(".btn");
const result = cardBody.querySelector(".result-t");
const message = document.createElement("p");
const remain = cardBody.querySelector(".remain")

form.addEventListener("submit" , function(event){
    event.preventDefault();
    attempts++;
    if(attempts>5){
        guess.disabled = true;
        checkButton.disabled = true;
    }else{
        checkresult(guess.value);
        remain.innerHTML = `Remaining Attempts : ${totalAttempts-attempts} `
    }
    guess.value = ""
});

function checkresult(guess){
    const randomNumber = getRandomN(5);
     if(guess == randomNumber){
         result.innerHTML = `Congratulations! You Have Won`
         won++;
     }else{
         result.innerHTML = `You Have Lost , The random number was ${randomNumber}`
         lost++;
    }
    message.innerHTML = `Won : ${won}, Lost : ${lost}`;
    message.classList.add("large-text");
    cardBody.appendChild(message);
}

function getRandomN(limit){
    return Math.floor(Math.random() * limit) +1;
}