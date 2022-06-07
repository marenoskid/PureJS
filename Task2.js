function NumberFormat(){
    let number = prompt("Enter the phone number");
    let string = number.toString();
    let stringFirst = "";
    let stringSecond = "";
    let stringThird = "";

    for(let i=0;i<3;i++){
        stringFirst += string[i];
    }
    for(let i=3;i<6;i++){
        stringSecond += string[i];
    }
    for(let i=6;i<9;i++){
        stringThird += string[i];
    }
    let finalNum;
    finalNum = stringFirst + "/" + stringSecond + "-" + stringThird;
    if(stringFirst == "070" || stringFirst == "071" || stringFirst == "072"){
        document.getElementById("operator").innerText = "T-Mobile"
    }
    if(stringFirst == "075" || stringFirst == "076"){
        document.getElementById("operator").innerText = "One"
    }
    if(stringFirst == "077" || stringFirst == "078"){
        document.getElementById("operator").innerText = "Vip"
    }
    document.getElementById("number").innerText = finalNum;



}