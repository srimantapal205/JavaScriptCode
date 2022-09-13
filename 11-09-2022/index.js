document.writeln(`<h1>Javascript  Code Practice -11-09-2022</h1>`)

document.writeln(`<h3>Temporal Dead Zone</h3>`);

let tdz = function tdzFun() {let txt1 =2;
    const txt2 =1;
    console.log(txt1);
    console.log(txt2);
    

};
tdz();
document.writeln(`<h3>Immediately Invoked Function Expressio</h3>`);
(function () {
   //, debugger;
    let txt ="This is IIFE text"
    console.log(txt)
})();
//console.log(txt)




document.writeln(`<h3>decode or encode a URL in JavaScript</h3>`);
let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
let encode = encodeURIComponent(uri);
document.writeln(encode);
let decode = decodeURIComponent(encode);
document.writeln("<br>" + decode)



document.writeln(`<h3>JavaScript Memoization</h3>`);

const fiboNo = n => {
    if (n<= 1) {
       return 1
       
    }
    document.writeln('<br>'+ n)
    return fiboNo (n-1) + fiboNo(n-2)
}

document.writeln('<br>'+fiboNo(5))


/* New memoize function */

//Basic function
function  getSqure(x) {
    return x * x
}

//Using memoization function

const memo = {};
function getSqureValue(x) {
    if (memo.hasOwnProperty(x)) {
        return memo[x]
    }
    memo[x] = x*x
    return memo[x];
}


function memoize(fn, getKey) {
    const memo = {};
    return function memoized(...args){
        const key = getKey(...args)
        if (memo.hasOwnProperty(key)) {
            return memo[k]
        } 
        memo[key] = fn.apply(this, [args]);
        return memo[key]
   
    }
}

// Apply this function to getSqure 

const memoGetsqure = memoize(getSqure, num => num);

document.writeln(memoGetsqure(8))

const getDevision = (a,b) => a/b;

const memoGetDivision = memoize(getDevision, (a,b) => `${a}_${b}`);

document.writeln(getDevision(1000,5));
document.writeln(memoGetDivision(1000,5))

//Memoizing a function accepting multiple arguments
//Memoizing async functions

expensiveOperation (key, (data) => {})

//create notion as above to memoize this function:

const memo1 ={};
function memoexpensiveOperation(key, callback) {
    if (memo1.hasOwnProperty(key)) {
        callback(memos[key])
        return
    }
    expensiveOperation(key,data => {
        memo1[key] = data
        callback(data)
    })
}

const memo2 = {}, progressQueues = {};
function memoExpensiveOperation(key, callback) {
    if (memo2.hasOwnProperty(key)) {
        callback(memo2[key])
        return
    }

    if (!progressQueues.hasOwnProperty(key)) {
        // processing new key, create an entry for it in progressQueues
        progressQueues[key] = [callback]        
    }else{
        // processing a key that's already being processed, enqueue it's callback and exit. 
        progressQueues[key].push(callback);
        return
    }

    expensiveOperation(key, (data) => {
        // memoize result
        memo2[key] = data
        // process all the enqueued items after it's done
       for (let callback  of progressQueues[key]) {
           callback(data)
       }
       // clean up progressQueues
       delete progressQueues[key]

    })

}

















document.writeln(`<h3></h3>`);


document.writeln(`<h3></h3>`);


document.writeln(`<h3></h3>`);


document.writeln(`<h3></h3>`);


document.writeln(`<h3></h3>`);


document.writeln(`<h3></h3>`);


document.writeln(`<h3></h3>`);
document.writeln(`<p>${'df'}</p>`);
