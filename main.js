document.querySelector('button').addEventListener('click', getData)

function getData(){
  let pocketMonster = document.querySelector('input').value

  let apilink =`https://pokeapi.co/api/v2/pokemon/${pocketMonster.toLowerCase()}`
  
  fetch(apilink)
    .then(res => res.json()) 
    .then(data => {

         document.querySelector('h1').innerText = data.species.name.toUpperCase()
         document.querySelector('img').src = data.sprites.front_default
        // document.querySelector('h3').innertext = data.explanation
        console.log(data)
    
    })
    .catch(err =>{
    console.log('error' + err);

    })

}















// document.querySelector("button").addEventListener('click', grabData)
// function grabData(){
//     pocketMonster = document.querySelector('input').value
//     let apilink = `https://pokeapi.co/api/v2/pokemon/${pocketMonster}`
//     fetch(apilink)
//      .then(res => res.json())
//      .then(data => {
//         // document.querySelector('h1').innerText = data.species.name
//         // document.querySelector('img').src = data.sprites.front_shiny
        
//         console.log(data)
//     } )
//     .catch(err =>{
//         console.log('error'+ err)
//     })
    
// }

