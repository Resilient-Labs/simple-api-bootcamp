const button = document.querySelector('button')


//let apiKey =
document.querySelector('button').addEventListener('click',()=> {
let userAnswer = document.querySelector('input').value


//console.log(url);

  fetch(`https://pokeapi.co/api/v2/pokemon/${userAnswer}`)
  .then(res => res.json())
  .then(response => {
    console.log(response.types[0].type.name)
    let result = document.querySelector('h3');
result.innerHTML = `${userAnswer} is a ${response.types[0].type.name} type Pokemon`



  })

})



// const button = document.querySelector('button');
// const apiKey = "https://api.planet.com/data/v1/"
// let planet = document.querySelector('')




//
// fetch('https://api.planet.com/data/v1/')
// .then(res => res.json())
// .then(response => {
//   console.log(response)

//})
