//let d1 = 4;
//let d2 = 2;
//document.write(d1 + " + " + d2 + " = " + (d1 + d2));
//document.write("\n");
//document.write(d1 + " - " + d2 + " = " + (d1 - d2));
//document.write("\n");
//document.write(d1 + " * " + d2 + " = " + (d1 * d2));

let first = prompt("Enter first number", 4);
let second = prompt("Enter second number", 2);
let add = Number(first) + Number(second);
let sub = first - second;
let product = first * second;

let output = first + " + " + second + " = " + add + "<br>";
output += first + " - " + second + " = " + sub + "<br>";
output += first + " * " + second + " = " + product;

document.getElementById("result").innerHTML = output;