const createPromise = new Promise((resolve, reject) => {
    resolve ('Hello World');
 } );
 createPromise.then((value) => { console.log(value); } )

 createPromise.then(value => { console.log('This is inside the onFullfill function'); } );
 console.log('This is written after myPromise.then');

 //Calculate Squre using Promise

 function calculateSqure(number){
    const promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'))   
            }
            const result = number * number; 
            resolve(result);
         },1000 )
     } )
     return promise;
 }

 calculateSqure(4)
    .then(value => {console.log(value)}, reason =>{ console.log(reason)} 
    )
 


    // Using Promise create a program  in a string first letter should be capetal
    function capitalize(text) {
        return text[0].toUpperCase() + text.substr(1);
    }
    
    function capitalize(text) {
        return new Promise((resolve, reject) => {
            if (typeof text !== 'string') {
                return reject (new Error('Argument must be a string'));
            }
            const textResult  = text[0].toUpperCase() + text.substring(1);
            resolve(textResult) 
        })
    }

    capitalize('publishing and graphic design').then(value => console.log(value), reason => console.log(reason));