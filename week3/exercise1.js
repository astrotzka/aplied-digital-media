let name = "john";
let age = 20;
let isTrue = true;
let dec = 45.27;

alert("It is " + isTrue + ". My name is " + name + " and I am " + age + " years old. " + 
    "My favourite decimal number is " + dec);

let output = document.getElementById("output");
output.innerHTML = "<p>" + "it is " + isTrue + " my nme is " + name + " and i am " + age + 
" yaers old. My favourite special number is " + dec + "</p>"; 

let sum = 0;
let numbers = [];
for(let i = 1; i <= 5; i++){
    numbers[i] = Number(prompt("Enter number: " + (i + 1)))
    //sum += Number(prompt("Enter number: " + i))
}
alert(numbers[2]);