document.querySelector("button").addEventListener("click", (e)=>{
  let defaultSpriteFirst = document.querySelector("input").value


fetch(`https://pokeapi.co/api/v2/pokemon/${defaultSpriteFirst}/`)
  .then(response=>response.json())
  .then(pokemon=>{
    //for(onePokemon of pokemon){

      console.log(pokemon);
      document.querySelector("#default").src = pokemon.sprites.front_default
      document.querySelector("#backDefault").src = pokemon.sprites.back_default
      document.querySelector("#shiny").src = pokemon.sprites.front_shiny
      document.querySelector("#backShiny").src = pokemon.sprites.back_shiny
    //}


  })
})
