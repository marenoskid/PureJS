function add(){
    let firstReal = document.getElementById("firstNum");
    let firstImaginary = document.getElementById("firstNumImaginary");
    let secondReal = document.getElementById("secondNum");
    let secondImaginary = document.getElementById("secondNumImaginary");

    let finReal = parseInt(firstReal.value) + parseInt(secondReal.value);
    let finImaginary = parseInt(firstImaginary.value) + parseInt(secondImaginary.value);

    document.getElementById("finalNum").value = finReal;
    document.getElementById("finalNumImaginary").value = finImaginary;
}
