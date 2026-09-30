let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);

let result = document.getElementById("result");

result.innerHTML = "<pre>"+dice1+"\t"+dice2+"</pre>";

document.getElementById("image1").setAttribute("src", "images/dice"+dice1+".png");
document.getElementById("image2").setAttribute("src", "images/dice"+dice2+".png");

if(dice1 == 1 && dice2 == 1){
    document.getElementById("se").textContent = "Snake eyeys";
    document.body.style.color = "red";
}