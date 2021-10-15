document.querySelector('#button').addEventListener('click', findPokemon)


function findPokemon(){
  let pokemon = document.querySelector('#pokemonInput').value
  let pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`.toLowerCase()
  fetch(pokeApi)
  .then(res => res.json())
  .then(data => {
    //pokemon name
      let pokeName = data.species.name
      pokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
      document.querySelector('.pokeTextLight').innerText = pokeName
      
    //pokemon sprite
      document.querySelector('.pokeImage img').src = data.sprites.front_default

    //pokedex entry
      document.querySelector('.entryDex').innerText = `#${data.game_indices[0].game_index}`
    // //pokemon ability
      document.querySelector('.ability').innerText = data.abilities[0].ability.name

    //pokemon types
      document.querySelector('.typeOne').innerText = data.types[0].type.name
      document.querySelector('.typeTwo').innerText = data.types[1].type.name
    //pokemon height
      document.querySelector('.height').innerText = `${data.height} in`

    //pokemon weight
      document.querySelector('.weight').innerText = `${data.weight} lbs`
  })
  .catch(err => {
    console.log(`${err} Cant find Information`)
  })
}