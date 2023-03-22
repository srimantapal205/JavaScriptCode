// function createCallBackFun(){
//     const button = document.querySelector('.button');
//     button.addEventListener('Click', function (event) {
//         console.log('Button hasbeen click: ' + event)

//     })

// };



const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
xhr.onreadystatechange = () => { 
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr.responseText);
        //document.writeln(`<p>${response}</p>`)
        const breeds = Object.keys(response.message);
        const firstbreedsInTheList = breeds[0];
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://dog.ceo/api/breed/' + firstbreedsInTheList + '/images/random');
        xhr2.onreadystatechange = () => { 
        if (xhr2.readyState === XMLHttpRequest.DONE) {
            console.log(xhr2.responseText)
        }
 } 
xhr2.send(null);
    }
 } 
xhr.send(null);
