let x = prompt("Enter a number: ")
let y = prompt("Enter a number: ")
let z = prompt("Enter a number: ")

//base case
if(x>0 && y>0 && z>0){
    document.getElementById("answer").innerText = "Znakot e pozitiven(+)";
}else if(x<0 && y<0 && z<0){
    document.getElementById("answer").innerText = "Znakot e negativen(-)";
}else if(x>0 && y<0 && z<0){
    document.getElementById("answer").innerText = "Znakot e pozitiven(+)";
}else if(x<0 && y>0 && z<0){
    document.getElementById("answer").innerText = "Znakot e pozitiven(+)";
}else{
    document.getElementById("answer").innerText = "Znakot e negativen(-)";
}