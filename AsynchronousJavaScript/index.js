document.writeln(`<h1>Example of an asynchronous function,</h1>`);


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

function print3() {
    const fs = require('fs');
    fs.readFile('./number3.txt', 'utf-8', function (err, number3) {
        console.log(number3);
    })
}

function print4() {
    const number4 = 4;
    console.log(number4);
}
print1();
print2();
print3();
print4();

