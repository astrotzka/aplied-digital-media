document.getElementById("header").innerHTML = "Divs";
let pEl = document.getElementsByTagName("div");
let index = 0;
do{
    pEl[index].textContent = "Div " + ++index;
}while(index < pEl.length);
