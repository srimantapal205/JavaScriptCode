 fetch('http://www.omdbapi.com/?s=batman&y=2018&apikey=369e0d5a')
    .then(response => response.json())
    .then(data => console.log(data))