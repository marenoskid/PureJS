let string = prompt("Enter a sentence: ");
let str = string.split(" ");
let longest = 0;
let word = "";
    for(let i=0; i<str.length; i++){
        if(longest < str[i].length){
            longest = str[i].length;
            word = str[i];
        }
    }
    document.getElementById("answer").innerText =  word;