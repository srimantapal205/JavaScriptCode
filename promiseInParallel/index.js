function askFirstDealear() {
   return new Promise((resolve, reject) => { setTimeout(() => resolve(80000), 1000 ) } )
}

function askSecondDealer() {
   return new Promise((resolve, reject) => { setTimeout(() => {reject('Not Suitable Car'),2000 } ) } )
}

function askThirdDealer() {
   return new Promise((resolve, reject) => { setTimeout(() => {resolve(123456789), 3000 } ) } )
}

// Promise.all([
//    askFirstDealear().catch((error) => { return error } ), 
//    askSecondDealer().catch((error) => { return error } ), 
//    askThirdDealer()]).catch((error) => { return error } )
//          .then(prices => {
//             console.log(prices)
//          })
//          .catch((error) => { 
//             console.log(error)
//           } );
      
Promise.allSettled([askFirstDealear(),askSecondDealer(),askThirdDealer()]);
