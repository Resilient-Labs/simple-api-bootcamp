document.querySelector('button').addEventListener('click', getPokèmon)

function getPokèmon(){
  let nameOrIDVal = document.querySelector('input').value
  let url = `https://pokeapi.co/api/v2/pokemon/${nameOrIDVal}/`

  fetch(url.toLowerCase())
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.name
    document.querySelector('h3').innerText = data.id
    document.querySelector('img').src = data.sprites.front_default
  })
  .catch(err => {
    console.log(`err ${err}`)
  })
  playSound()
}

function playSound() {
	let sound = new Audio('sounds/button.mp3');
	sound.play();
}

// let urlTwo = `https://pokeapi.co/api/v2/generation/${nameOrIDVal}/`

// fetch(urlTwo)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     document.querySelector('h2').innerText = data.name
//     document.querySelector('h3').innerText = data.id
//     document.querySelector('img').src = data.sprites.front_default
//   })
//   .catch(err => {
//     console.log(`err ${err}`)
//   })