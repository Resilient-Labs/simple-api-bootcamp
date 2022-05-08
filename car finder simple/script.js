document.querySelector('button').addEventListener('click', getCar)

function getCar(){
    let make = document.querySelector('#make').value
    let type = document.querySelector('#type').value
    let year = document.querySelector('#year').value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
            'X-RapidAPI-Key': 'b789b2c408msh5fd26b2f70ddca0p16bf13jsnb25cac59113f'
        }
    };
    
    fetch(`https://car-data.p.rapidapi.com/cars?limit=10&page=0&year=${year}&make=${make}&type=${type}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.querySelector('.one').innerText = response[0].make + ' ' + response[0].model + ' ' + response[0].year
            document.querySelector('.two').innerText = response[1].make + ' ' + response[1].model + ' ' + response[1].year
            document.querySelector('.three').innerText = response[2].make + ' ' + response[2].model + ' ' + response[2].year
            document.querySelector('.four').innerText = response[3].make + ' ' + response[3].model + ' ' + response[3].year
            document.querySelector('.five').innerText = response[4].make + ' ' + response[4].model + ' ' + response[4].year
            document.querySelector('.six').innerText = response[5].make + ' ' + response[5].model + ' ' + response[5].year
            document.querySelector('.seven').innerText = response[6].make + ' ' + response[6].model + ' ' + response[6].year
            document.querySelector('.eight').innerText = response[7].make + ' ' + response[7].model + ' ' + response[7].year
            document.querySelector('.nine').innerText = response[8].make + ' ' + response[8].model + ' ' + response[8].year
            document.querySelector('.ten').innerText = response[9].make + ' ' + response[9].model + ' ' + response[9].year
        })
        .catch(err => console.error(err));
}