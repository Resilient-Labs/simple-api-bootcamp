document.querySelector('button').addEventListener('click', () => {
    getFetch();
    getFetch2();
    hideMessageShowBorder();
    });

function hideMessageShowBorder(){
    let message = document.querySelector('.welcomeMessage')
        message.style.display = "none"
    
    document.querySelector('div').classList.add('results-container')
        
}



function getFetch(){
    const poke1 = document.querySelector('input').value.toLowerCase()
    const pokeApi1 = 'https://pokeapi.co/api/v2/pokemon/'+ poke1

    fetch(pokeApi1)
        .then(res => res.json()) 
        .then(data => {
            console.log(data)
            document.querySelector('.name').innerText = data.name.toUpperCase()
            document.querySelector('.pokedex').innerText = 'POKEDEX#: ' + data.id
            document.querySelector('.sprite1').src = data.sprites.front_default
            document.querySelector('.sprite2').src = data.sprites.front_shiny
            document.querySelector('.types').innerText = 'TYPE: ' + data.types[0].type.name.toUpperCase()
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}


function getFetch2(){
    const poke1 = document.querySelector('input').value.toLowerCase()
    const pokeApi2 = 'https://pokeapi.co/api/v2/pokemon-species/'+ poke1
  
    fetch(pokeApi2)
        .then(res => res.json()) 
        .then(data => {
            console.log(data)

            document.querySelector('.descriptions').innerText = 'DESCRIPTION: ' + data.flavor_text_entries[0].flavor_text

            document.querySelector('.habitat').innerText = 'HABITAT: ' + data.habitat.name.toUpperCase()

            // document.querySelector('.evolutions').src = data.evolves_from_species.url
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}


