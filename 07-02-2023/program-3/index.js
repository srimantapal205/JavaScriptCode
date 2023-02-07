document.writeln(`<h1>JavaScript function to find the area of a triangle</h1>`);

function getTrangleArea(s1,s2,s3) {
    const perimeter = (s1+s2+s3)/2;
    const area = Math.sqrt(perimeter*((perimeter-s1)*(perimeter-s2)*(perimeter-s3)))
    document.writeln(`<h2>Area of a triangle : ${area}</h2>`)
}

getTrangleArea(8,8,10)

