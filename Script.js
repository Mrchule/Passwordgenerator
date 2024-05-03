const copy = document.querySelector("#copy");
const len = document.querySelector("#length");
const Capital = document.querySelector("#Capital");
const Small = document.querySelector("#Small");
const Symbol = document.querySelector("#Symbol");
const Number = document.querySelector("#Numbers");
const generate = document.querySelector("#generate");
const text=document.querySelector("#output");
console.log(copy)

const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower=upper.toLowerCase();
const numbers="0123456789";
const symbols="~!@#$%^&*()_+?><,.";

generate.addEventListener("click",generatePassword);
copy.addEventListener("click",()=>{
    alert("copy to clipboard");
    console.log(text.value)
    navigator.clipboard.writeText(text.value);
})
function getLowerCase(){
    return lower[Math.floor(Math.random()*lower.length)];
}
function getUppercase(){
    return upper[Math.floor(Math.random()*upper.length)];
}
function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){
    const num=len.value;
    let pass="";
    if(num<30){
        for(i=0;i<num;i++){
            pass+=GetX();
        } 
        text.value=pass;
        console.log(pass)
       
    }
    else  alert("Password length not more than 30");
}
function GetX(){
let x=[];
    if(Capital.checked){
        x.push(getUppercase());
    }
    if(Small.checked){
        x.push(getLowerCase());
    }
    if(Symbol.checked){
        x.push(getSymbol());
    }
    if(Number.checked){
        x.push(getNumbers());
    }
    // return x;
    return x[Math.floor(Math.random()*x.length)];
    
}