document.querySelector('button').addEventListener('click',joe)
function joe(){
  let pokeman= document.querySelector('.pokemon').value
  const getPokemon=async id =>{
  const url=`https://pokeapi.co/api/v2/pokemon/${id}`
  const res= await fetch(url)
  const pokemon= await res.json()
  console.log(pokemon)
  document.querySelector('h2').innerText=`${pokeman} is a ${pokemon.types[0].type.name} type Pokemom`
  document.querySelector('h3').innerText=`The first apperance of ${pokeman} was in Pokemon ${pokemon.game_indices[0].version.name}`
  document.querySelector('h4').innerText=`Speed: ${pokemon.stats[5].base_stat}`
  document.querySelector('img').src=pokemon.sprites.front_default
  document.querySelector('h5').innerText=`Attack: ${pokemon.stats[1].base_stat} `
}
getPokemon(pokeman)
}
