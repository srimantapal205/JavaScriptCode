document.writeln(`<h1>Javascript code practice</h1>`)
document.writeln(`<h4>Call, Apply and Bind</h4>`)

//the call invokes the function with given this value and arguments provode one byu one.
let stu1 = {fname:"Johon", lname:"Miler"}
let stu2 = {fname: "Mike", lname:"Petar"}

function testCall(gt1, gt2) {
    document.writeln(
        gt1+ ""+this.fname+""+this.lname+", "+gt2 
    )
}

testCall.call( stu1, "Hello", "How are you? <br>")
testCall.call( stu2, "Hello", "How are you? <br>")


let uname = {
    firstName:"Shreenita",
    lastName: "Pal"
};

let getFullName = function(homeTown){
    document.writeln(
        this.firstName +" "+ this.lastName +" from "+homeTown + "<br>"
    )
}
//function borrowing
getFullName.call(uname, "Berhampur");
let uname2 = {
    firstName : "Srimanta",
    lastName:"Pal"
}

getFullName.apply(uname2, ["Murshidabad"]);

//bind method
let getMyname = getFullName.bind(uname2, "Murshidabad..")
document.writeln(getMyname)
getMyname()



document.writeln(`<h4>Array slice method</h4>`)
let arr = [1,2,3,4,5,6,7]
document.writeln(arr +'<br>')
document.writeln(arr.slice(0,-1) +'<br>')
document.writeln(arr.slice(0,-2) +'<br>')



document.writeln(`<h4>Array splice method</h4>`)
let arr1 = [9,8,7,6,5,4,3,2,1]
document.writeln(arr1.splice(0,2) +'<br>')
document.writeln(arr1.splice(1) +'<br>')
document.writeln(arr1.splice(2) +'<br>')




document.writeln(`<h4>Higher order function</h4>`)
//const firstOrderFunction = () => console.log("Hi, I am first order function");
const firstOrderFunction = () => {document.writeln("Hi, I am first order function")};
const highorderFunction = (return1stOrderFunc) => {return1stOrderFunc()};
highorderFunction(firstOrderFunction);

document.writeln(`<h4>Unary Function</h4>`)
//Unary function is function which is accepted exctly one argument. it's also called single argument function
const unaryFun = (x) => {document.writeln(x + 10)}
unaryFun(5)

document.writeln(`<h4>the currying function</h4>`)
 let multi =  (x,y) => {document.writeln(x*y + "<br>")}

 let multiByTwo = multi.bind(this, 2);
 multiByTwo(5)

// Using closure

let multiPly = function (x) {
    return function (y) {
        let z = x*y;
      document.writeln(z + "<br>")
    }
}
let multi4 = multiPly(8);
multi4(8)

//another way to use curring function

const curryUnaryFunc = (a) => (b) => (c) => {
    let t = a+b+c;
    document.writeln(t);
}
curryUnaryFunc(1)(2)(3);




document.writeln(`<h4> pure function</h4>`)
let num = [];

const impureFunc = (n) => num.push(n);

const pureFun = (n) => (argNumArray) => argNumArray.concat([n])

document.writeln(impureFunc(6))
document.writeln("<br>"+num+"<br>")
document.writeln(pureFun(7)(num))
document.writeln("<br>"+num)




