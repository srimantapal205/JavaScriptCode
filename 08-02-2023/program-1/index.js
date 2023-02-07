document.writeln(`<h1>Check whether a given year is a leap year in the Gregorian calendar</h1>`)

function leapYear(year) {
    return year % 100 === 0 ? year % 400 ===0 : year % 4 === 0
}

document.writeln(`<p>2016: ${leapYear(2016)}</p>`);
document.writeln(`<p>2000: ${leapYear(2000)}</p>`);
document.writeln(`<p>1700: ${leapYear(1700)}</p>`);
document.writeln(`<p>1800: ${leapYear(1800)}</p>`);
document.writeln(`<p>100 : ${leapYear(100)}</p>`);