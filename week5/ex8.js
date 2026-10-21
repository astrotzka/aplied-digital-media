let numbers = document.querySelector("#table");
let html = "<table>";
html += "<tr><th>number</th><th>square</th><th>cubed</th></tr>";
for(let i = 1; i <= 10; i++){
    html += "<tr><td>"+i+"</td><td>"+Math.pow(i,2)+"</td><td>"+Math.pow(i,3)+"</td></tr>";
}
html += "</table>";
numbers.innerHTML = html;