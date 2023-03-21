//document.writeln(`<h1>Example of an asynchronous function,</h1>`);


function print1() {
    const number1 = 1;
    console.log(number1);
}

function print2() {
    function getNumber() {
        return 2
    }
    const number2 = getNumber();
    console.log(number2);
}

// function print3() {
//     const fs = require('fs');
//     fs.readFile('./number3.txt', 'utf-8', function (err, number3) {
//         console.log(number3);
//         print4();
//     })
// }


function print3() {
    const callBack = function (err, number3) {
        console.log(number3);
        print4();
    };
    const fs = require('fs');
    fs.readFile('./number3.txt', 'utf-8', callBack )
}

function print4() {
    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();



function printNumber(number){
    console.log(`------------------------------------------`)
    console.log(number);
}
const numbers = [1,2,3,4,5];
numbers.forEach(printNumber);


function f(callback) {
    setTimeout(() => callback(), 0 )
}
f(() => console.log('This is callback using settimeout method'))

console.log('Hello World')

function f2(callback) {
    callback();
}
f2(() => console.log('This is callback without settimeout method'));

console.log('hello world 2')
