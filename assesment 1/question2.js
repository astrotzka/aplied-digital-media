let dolla = 0.63;

let number = "";
let eurost = "euro";
let rounded_number = 0;


for(let euro = 1.00; euro <= 10.00;euro ++){
    number += euro + " euro is worth " + (euro*dolla).toFixed(2) + " dollars<br>";
    eurost = "euros";
    

}
document.getElementById("output").innerHTML = number;