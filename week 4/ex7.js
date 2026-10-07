let number = Math.floor(Math.random() * 100) + 1;
let guess = -1;
let attempts = 6;
let tries = 1;
while(true){
    guess = prompt("attempt: " + (tries + 1) + "guess a number fron 1 to 100");
    if (guess != number){
        tries++
        if(guess > number){
            alert("game number is lower");
        }
        if(guess < number){
            alert("game number is higher");
        }
        
        if(tries == attempts){
            break
        }
        alert("incorect try again");
    }
    else{
        alert("good guess number is: " + guess);
        break
    }
}

alert("game over");