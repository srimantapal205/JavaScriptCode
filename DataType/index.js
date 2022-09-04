document.writeln(`<h1>Data types</h1> <hr>`);
document.writeln(`<h2>Methods of primitives</h2>`);

let str ="Hello !";
str.test = 5;
document.writeln(str.test);
document.writeln(`<h2>Numbers</h2>`);

document.writeln(`<h2>Rounding</h2>`);

let num = 1.2555018945120;

let newNum = Math.round((num*100)/100);
document.writeln(newNum);
document.writeln(num.toFixed(2))

document.writeln(newNum.toFixed(2))
let fnum =6.36;

document.writeln(fnum.toFixed(1))

function readNumber() {
    let num;
    do {
       num = prompt("Enter a number please ?", 0); 
    } while (!isFinite(num));
    if (num === null || num === "" || num === undefined) {
        return null
    };
    return +num
}
//document.writeln(`Read: ${readNumber()}`);
document.writeln(`<h2>An occasional infinite loop</h2>`);

let i = 0;
// while (i != 10) {
//     i += 0.2;
//     if (i>9.8 && i<10.2) {
//         document.writeln(i)
//     }
// }

function eandomInteger(max, min) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.random(rand);
}
document.writeln(eandomInteger(1,3))
document.writeln(`<h2>Accessing characters</h2>`);

let hel =  "Helloworld";
for (const char of hel) {
    document.writeln(`<p>${char}</p>`)
}

let strn = '';
for (let i = 0; i <= 220; i++) {    
 strn += String.fromCharCode(i) +'-'+ i+',</br>';  
}
//document.writeln(strn)

function getUppercase(str) {
    return str.toUpperCase();
}
document.writeln(`<h3>${getUppercase("this is upper case")}</h3>`)

function checkSpam(strngSpam) {
    let lowerStr = strngSpam.toLowerCase();

    return lowerStr.includes('viagra')||lowerStr.includes('xxx');

}
document.writeln(checkSpam('buy ViAgRA now'))
document.writeln(checkSpam('free xxxxx')) 
document.writeln(checkSpam("innocent rabbit")) 
document.writeln(`<h2>Truncate the text</h2>`);

function truncate(tstrng, maxnum ) {
    // if (tstrng.length > maxnum) {
    //     return tstrng.slice(0, maxnum) + '...';
    // }else{
    //     return tstrng;
    // }
    return tstrng.length>maxnum ? tstrng.slice(0,maxnum-1)+'...':tstrng
}

document.writeln(truncate("What I'd like to tell on this topic is:", 10));
document.writeln(`<h2>Extract the money</h2>`);

function extractCurrencyValue(str) {
    return +str.slice(1);
}

document.writeln(extractCurrencyValue("$120"));
