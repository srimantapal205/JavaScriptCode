document.writeln(`<h1>JavaScript program to get the current date</h1>`);

let toDay = new Date();
let dd = toDay.getDate();

let mm = toDay.getMonth()+1;
const yyyy = toDay.getFullYear();

if (dd<10) {
    dd = `0${dd}`
}
if (mm<10) {
    mm = `0${mm}`
}

toDay = `${mm}-${dd}-${yyyy}`;
document.writeln(`<h2>${toDay}</h2>`);

toDay = `${mm}/${dd}/${yyyy}`;
document.writeln(`<h3>${toDay}</h3>`);

toDay = `${dd}-${mm}-${yyyy}`;
document.writeln(`<h4>${toDay}</h4>`);

toDay = `${dd}/${mm}/${yyyy}`;
document.writeln(`<h5>${toDay}</h5>`);

