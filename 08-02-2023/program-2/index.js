document.writeln(`<h1>To find 1st January is being a Sunday between 2014 and 2050.</h1>`)

document.writeln(`<hr> <br><br>`);


for (let year = 2014; year <= 2055; year++) {
    
    const d = new Date(year, 0, 1)
    if (d.getDay()===0) {
        document.writeln(`<p>1st January is being a Sunday  ${year}</p>`);
    }
}


document.writeln(`<br><br><hr>`);