let pEl = document.getElementsByClassName("p1");
let index = 0;
do{
    pEl[index].textContent = "Paragraph " + ++index;
}while(index < pEl.length);