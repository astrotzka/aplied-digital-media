let number = Math.floor(Math.random() * 10) + 1;
let guess = -1;
while(guess != number){
    guess = prompt("Guess a number from 1 to 10");
    if(guess != number){
        alert("try again");
    }else{
        break;
    }
}

alert("good guess. Number is " + number);