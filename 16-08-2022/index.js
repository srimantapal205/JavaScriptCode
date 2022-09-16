document.writeln(`<h1>Javascript CodePractice</h1>`);

function printSubHeading(sh) {
    return document.writeln(`<h3>${sh}</h3>`)
}
function printSubHeading2(sh) {
    return document.writeln(`<h4>${sh}</h4>`)
}
function printPara(para) {
    return document.writeln(`<p>${para}</p>`)
}

printSubHeading("Hoisting")
printPara(2 + 2)
printPara(-"2" + 2)
printPara("2" + 2)
printPara(-2 + "2")
printPara(-"2" + "2")
printPara(+"2" + 2)
printPara(+"2" + 2)


//printPara(testUser);

let testUser = "I am Test user"

printSubHeading("JavaScript Objects")

// In this object key value are called propertyes.

//Object method is an object property caontaining a function definition
let objp = `
we can define a object in 4 ways.<br>
1. using Object literal.<br>
const x ={}<br>
x.Name="TestUser"<br>

2. The another way is that to define a object in Javascript  using new Object()<br>

const y = new Object()<br>

y.name ="testUser"<br>

* JavaScript object are mutable that means we can referance the object in other varible.<br>
but not value.<br>

const z = y;<br>
z.name = "Sri"<br>

const cars ={
    carname:"BMW",
    from:"US",
    color:"Red",
    model:"xYz",
    origin : function(){
        return this.carname+""+this.from
    }
}
`
printPara(objp)

printSubHeading("JavaScript Object Properties")


let prop = `

Propertyes are the value associted with Javascript. It's same as varible that is attached to the objects,

And a property of an object os the characteristics  of the object. <br>

the access of an object with dot-notation<br>

eg: obj.name = "Test"<br>

printPara(prop)<br>
printSubHeading2('Using  for...in Loop in object');<br>

function getObject(obj) {<br>
    let sprop = "";<br>
    for (const x in obj) {<br>
        sprop += obj[x] + ", ";<br>
    }<br>
    return sprop<br>
}
const student = {<br>
    id: 1,<br>
    name: 'Xyz',<br>
    class: 'ii',<br>
    favSubject: 'Math'<br>
}
printPara(getObject(student))<br>
student.nationality = "Indian";<br>
student.age = 5;<br>
printPara(getObject(student))<br>
delete student.age;<br>


printPara(getObject(student))<br>
`
printPara(prop)
printSubHeading2('Using  for...in Loop in object');

function getObject(obj) {
    let sprop = "";
    for (const x in obj) {
        sprop += obj[x] + ", ";
    }
    return sprop
}
const student = {
    id: 1,
    name: 'Xyz',
    class: 'ii',
    favSubject: 'Math'
}
printPara(getObject(student))
student.nationality = "Indian";
student.age = 5;
printPara(getObject(student))
delete student.age;
printPara(getObject(student))











