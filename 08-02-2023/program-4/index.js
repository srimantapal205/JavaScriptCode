document.writeln(`<h1> Calculate number of days left until next Christmas.</h1>`)

document.writeln(` <br><br> <hr> <br><br>`);

const toDay = new Date();
const cmas = new Date(toDay.getFullYear(), 11,25)
if (toDay.getMonth()==11 && toDay.getDate()>25) {
    cmas.setFullYear(cmas.getFullYear()+1)
}
const oneDay = 1000*60*60*24;

const getDays = Math.ceil((cmas.getTime()-toDay.getTime())/(oneDay));


document.writeln(`<h2>${getDays} days left until Christmas!</h2>`)