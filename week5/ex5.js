let pEl = document.getElementsByTagName("li");
let index = 0;
do{
    pEl[index].textContent = "line item " + ++index;
}while(index < pEl.length);