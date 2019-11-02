let ul = document.querySelector('ul')
let btn = document.querySelector('button')
let abilityOne = document.querySelector('.abilityOne')
let abilityTwo = document.querySelector('.abilityTwo')

btn.addEventListener('click', function(){
  let input = document.querySelector('.input').value
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = `https://pokeapi.co/api/v2/pokemon/${input}/`
  fetch (proxyUrl + targetUrl)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      abilityOne.textContent = response.abilities[0].ability.name
      abilityTwo.textContent = response.abilities[1].ability.name
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
})
