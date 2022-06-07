function Palindrome(){
    let number = prompt("Enter a three digit number: ");
    let remainder,temp,final=0;
    temp = number;
    while(number > 0){
        remainder = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + remainder;
    }
    if(final == temp){
        document.getElementById("answer").innerText = "The input is palindrome";
    }else{
        document.getElementById("answer").innerText = "The input is not a palindrome";
    }
}