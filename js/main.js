document.querySelector('.submitBtn').addEventListener('click', runTime)

function runTime() {
    const pokemon = document.querySelector('.pokemonName').value
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(url)
        .then(res => res.json()) // doesn't check for a JSON, it actually takes the response and parses it to a JSON object. Often times a fetch call will return an html, and that would be the response. res.json will parse the info, parse = translate response to a JSON
        .then(data => {
            console.log(data)
            document.querySelector('.name').innerText = data.name
            document.querySelector('.pokePic').src = data.sprites.front_default
        })
        .catch(err => {
            console.log(`error ${err}`)
            document.querySelector('.name').innerText = 'Are you sure that\'s a pokemon? Check your spelling and try again...'
        })

}