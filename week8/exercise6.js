let rows = 0;
while(true){
    rows = prompt("Enter number of rows in triangle: ");
    if(rows < 2 || rows > 9){
        alert("Number of rows must be a value from 2 to 9 inclusive");
    }else{
        break;
    }
}

let triangle = "";
let count = 0;
for(let i = 1; i <= rows; i++){
    for (j = 1; j<= length; j++){
        triangle += "* ";
        count++
    }
    triangle += "<br>"
}
document.getElementById("triangle").innerHTML = triangle;
document.getElementById("stars").textContent = "Total number of asterisks is " + count;