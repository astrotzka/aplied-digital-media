let length = "0";
let width = "0";
do{
    length = Number(prompt("Enter length(from 1-10): "))
    width = Number(prompt("Enter wdith(from 1-10): "))
}while (length > 10 && length < 1 || width > 10 && width < 1)
let area = length*width;
document.getElementById("head").innerHTML = "Area is: " + area + "<br>";
for( row = 1; row<= width; row++){
    for (col = 1; col<= length; col++){
        document.write("*");
    }
    document.write("<br>")
    
}