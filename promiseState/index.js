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
 
 