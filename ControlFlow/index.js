//Javascript ternary operators

let age =  18;
let message ='';
age >= 16 ? (message ="You can Derive"):(message="You can Not Drive");

console.log(message);

let speed = 90;
let message2 = speed >= 120 ? 'To Fast' : speed >= 80 ? 'Fast' : 'OK';
console.log(message2) 



//JavaScript switch case statement

let day = 3;
let dayname;
switch (day) {
    case 1 :
        dayname = 'Sunday';
        break;
    case 2:
        dayname = 'Monday';
        break;
    case 3:
        dayname = 'Tuesday';
        break;
    case 4:
        dayname = 'Wednesday';
        break;
    case 5:
        dayname = 'Thursday';
        break;
    case 6:
        dayname = 'Friday';
        break;
    case  7:
        dayname = 'Saturday'; 
        break;
    default:
       dayname = 'Invalid Day';
}

document.writeln(`<p>Today is :${dayname}</p>`);

//the JavaScript comma operator

let board = [1,2,3,4,5,6,7,8,9];
let s = "";
for (let i = 0, j = 1; i < board.length; i++, j++) {
    s += board[i] + ' ';
    if (j%3===0) {
        console.log(s);
        document.write(`<span>${s}</span><br>`)
        s = ' ';
    }
}
