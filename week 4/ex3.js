let dolla = 1.12;

let output = "";
let eurost = "euro";

for(let euro = 1; euro <= 20;euro ++){
    output += euro + " euro is worth " + (euro*dolla) + " dollars<br>";
    eurost = "euros";
}

document.getElementById("output").innerHTML = output;