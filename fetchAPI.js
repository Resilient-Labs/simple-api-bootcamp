
const btn = document.getElementById('button3')
btn.addEventListener('click', ()=> {
// getExternalAPI
let pokemonName = document.querySelector('.pokemonName').value
  fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(res=>res.json())
  .then(response=>{
    // console.log(response.sprites.back_default)
    document.querySelector('#results').src =response.sprites.front_shiny
  })
console.log('hello')
})
