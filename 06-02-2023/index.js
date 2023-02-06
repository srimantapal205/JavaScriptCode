document.writeln(`<h1> Display the current day and time:</h1><br><br>`)

const toDay = new Date();
const day = toDay.getDay();
const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.writeln(`<h2>Today Is: ${dayList[day]} ! :)</h2>`);

let hour = toDay.getHours();
const minute = toDay.getMinutes();
const second = toDay.getSeconds();
let prepand = (hour >=12)? " PM" :" AM";
hour = (hour >=12)? hour - 12 : hour;

if(hour === 0 && prepand ===" PM"){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = " Noon";
    }else{
        hour = 12;
        prepand = " PM"
    }
}

if (hour === 0 && prepand === " AM") {
    if (minute === 0 && second === 0 ) {
        hour = 12;
        prepand = "Midnight"
    } else {
        hour = 12;
        prepand = " AM"
    }
}
document.writeln(`<h2>Current Time: ${hour}${prepand}: ${minute} : ${second}</h2>`);