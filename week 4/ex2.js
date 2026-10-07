let total = 0;
let counter = 0;
let number = 0;

do{
    number = prompt("Enter number " + counter + " (-1 to quit)");
    total += Number(number);
    counter++;
}while(number != -1);

alert(counter);
let output = document.getElementById("average");
if(total != -1){
    output.innerHTML = "<b> total: </b> " + (++total);
    output.innerHTML += "<br>";
    output.innerHTML += "<b> average: </b> " + (total/--counter);
    output.innerHTML += "<br>";
    output.innerHTML += "<b> you have entered " + counter + " amount of numbers";
}else{
    output.innerHTML = "<b>No numbers entered</b>";
}
