function askFirstDealear() {
   return new Promise((resolve, reject) => { setTimeout(() => resolve(80000), 3000 ) } )
}

function askSecondDealer() {
   return new Promise((resolve, reject) => { setTimeout(() => {reject('Not Suitable Car'),5000 } ) } )
}

function askThirdDealer() {
   return new Promise((resolve, reject) => { setTimeout(() => {resolve(123456789), 8000 } ) } )
}

Promise.all([
   askFirstDealear().catch(error => {return error}),
   askSecondDealer().catch(error => {return error}),
   askSecondDealer().catch(error => {return error}),
   Promise.reject('Rejected for some reason')
])
   .then(prices =>{
      console.log(prices);
   })
   .catch(error => {
      console.log(error);
   })



const promiseAll = (arrayofPromises) => { 
   if (arrayofPromises.length === 0) {
      return Promise.resolve();
   };
 const promiseValues = [];
 let settledPromiseCount = 0;
 return new Promise((resolve, reject) => {
   arrayofPromises.forEach((promise, index)=>{
     
      if (promise instanceof Promise === false) {
          promise = Promise.resolve(promise)
      }

      promise.then(result =>{
         settledPromiseCount += 1;
         promiseValues[index] = result;
         if (settledPromiseCount === arrayofPromises.length) {
             resolve(promiseValues)
         }
      })

      .catch( reason => {
         reject(reason)
      });
   });
 });
};

const getOne = () => {
   return new Promise((resolve, reject) => { 
      setTimeout(()=>resolve(1),1000)
    } )
 };

 const getTwo = () => {
   return new Promise((resolve, reject) => { 
      setTimeout(()=>resolve(2),2000)
    } )
 };

 const getThree = () => {
   return new Promise((resolve, reject) => { 
      setTimeout(()=>resolve(3),3000)
    } )
 };
//  const getOneModified = () => {
//    return new Promise((resolve, reject) => { 
//       setTimeout(()=>reject(1),1000)
//     } )
//  };

 promiseAll([getThree(), getTwo(),getOne()])
   .then((value) => {console.log(value) } )
   .catch((err) => { console.log(err) } );

promiseAll([1,'string',true])
   .then((value) => {console.log(value) } )
   .catch((err) => { console.log(err) } );
   