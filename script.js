//your code here
let count = document.getElementById("evaluatedText");

count.addEventListener("input",counttext);

function counttext(){
let a=count.value.trim().length;
document.getElementById("letterCount").innerText = a;
}