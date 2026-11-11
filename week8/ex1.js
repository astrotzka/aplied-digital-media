function greeting(){
    let name = prompt("Enter name:");
    document.getElementById("greet").textContent = "hello" + name;
}

greeting();

let color = prompt("Enter favourite colour");

function printColor(color){
    document.getElementById("color").textContent = color;
}

printColor(color)

let length = prompt("Enter lenght of rectangle");
let width = prompt("enter width of rectangle");
function area(x, y){
    document.getElementById("area").textContent = "ARea: " + (x * y);
}

area(length, width)

let rows = prompt("enter number of rows in triangle");

function stars(rows){
    let count = 0;
    for(let i = 1; i <= rows; i++){
        for(let j = 0; j <= i; j++){
            count++;
        }
    }
    return count;
}

let numberOfStars = stars(rows);

document.getElementById("tristars").textContent = "stars" + numberOfStars;

let addition = () => {
    return first + ScriptProcessorNode;
}

document.getElementById("add").textContent = "Result: " + addition(3,4);