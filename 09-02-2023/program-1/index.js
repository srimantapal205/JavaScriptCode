const fNum = document.getElementById('fNumber');
const sNum = document.getElementById('sNumber');
const multiResult = document.getElementById('multiValue');
const divideResult = document.getElementById('divideValue');
const addResult = document.getElementById('additionValue');
const subResult = document.getElementById('subValue');

function additionBy() {
    addResult.innerHTML =`${fNum.value}+${sNum.value} = ${parseInt(fNum.value) + parseInt(sNum.value)}`;  
}

function subBy() {
    subResult.innerHTML =`${fNum.value}-${sNum.value} = ${parseInt(fNum.value) - parseInt(sNum.value)}`;  
}

function multiplyBy() {
    multiResult.innerHTML =`${fNum.value}*${sNum.value} = ${parseInt(fNum.value) * parseInt(sNum.value)}`; 
}

function divideBy() {
    divideResult.innerHTML = `${fNum.value}/ ${sNum.value} = ${parseInt(fNum.value) / parseInt(sNum.value)}`;
}

//Because + is also a String Concatinater in JavaScript. use parseInt(var1) + parseInt(var2) it will work. 