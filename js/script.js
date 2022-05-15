document.querySelector('button').addEventListener('click', look)

let poke_url = "'https://pokeapi.co/api/v2/pokemon/'"

function look(){
    let srch = document.querySelector('input').value
    poke_url = `https://pokeapi.co/api/v2/pokemon/${srch}`

    fetch(poke_url)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.name
            document.querySelector('img').src = data.sprites.front_default
        })
        .catch(err=> {
            console.log(`error ${err}`)
        })
}