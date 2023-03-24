console.log('Create Promise');

const myPromise =  new Promise((resolve, reject) => {
   resolve('value');
   resolve('value2');
   reject('resaon')
});
console.log(myPromise);