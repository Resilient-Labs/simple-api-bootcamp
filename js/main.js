const button = document.querySelector('button').addEventListener('click', getStats)
let image = document.querySelector('img')
let imageBack = document.querySelector('#back')
let shinyImg = document.querySelector('#shinyFront')
let shinyBack = document.querySelector('#shinyBack')
let dream = document.querySelector('#dream')


function getStats(){
  let selection = document.querySelector('input').value 
  let url = `https://pokeapi.co/api/v2/pokemon/${selection}`

  fetch(url) 
  .then(res => res.json()) // parseresponse as JSON 
  .then(data => { 
    console.log(data)
    document.querySelector('ul').innerHTML = ''
    for(let i = 0; i < 5; i++){ 
      let moves = data.moves[i].move.name 
      let moveList = document.createElement('li'); 
      moveList.innerText = moves 
      document.querySelector('ul').appendChild(moveList)
    }
    
    document.querySelector('h2').innerText = data.name
    image.src = data.sprites.front_default
    imageBack.src = data.sprites.back_default
    shinyImg.src = data.sprites.front_shiny
    shinyBack.src = data.sprites.back_shiny
    dream.src = data.sprites.other.dream_world.front_default
  })

  .catch(err => { 
      console.log(`error ${err}`) 
  })
  
}

//for(let i = 0; i < data.moves.length; i++){ 
//let moves = data.moves[i].move.name 

