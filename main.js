document.querySelector('button').addEventListener('click', getPerson)

function getPerson(){

    let character = document.getElementById('input').value
    let url = `https://superheroapi.com/api/6849941748354782/search/${character}`
    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.results[0])
        console.log(data.results[0].name)
        console.log(data.results[0].image.url)

        document.getElementById('findName').innerText = data.results[0].name
        document.querySelector('img').src = data.results[0].image.url
    })
    .catch(error => {
        console.error('Error:', error);
    });
}




