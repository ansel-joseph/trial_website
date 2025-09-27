let input1=document.getElementById("num1");
let input2=document.getElementById("num2");
let result=document.getElementById("result");
let addition=document.getElementById("add");
let subtraction=document.getElementById("sub");
let multiplication=document.getElementById("mul");
let division=document.getElementById("div");

addition.addEventListener("click",function(){
    let num1=parseFloat(input1.value);
    let num2=parseFloat(input2.value);
    let sum = num1 + num2;
    result.innerText="The sum is: "+sum;
});

subtraction.addEventListener("click",function(){
    let num1=parseFloat(input1.value);
    let num2=parseFloat(input2.value);
    let difference = num1 - num2;
    result.innerText="The difference is: "+difference;
});

multiplication.addEventListener("click",function(){
    let num1=parseFloat(input1.value);
    let num2=parseFloat(input2.value);
    let product = num1*num2;
    result.innerText="The product is: "+product;
});
division.addEventListener("click",function(){
    let num1=parseFloat(input1.value);
    let num2=parseFloat(input2.value);
    let quotient = num1/num2;
    result.innerText="The quotient is: "+quotient;
});