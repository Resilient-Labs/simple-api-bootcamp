// const capitalizeFirstLetter = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  

const getPokemon = () => {
    const input = document.querySelector('input').value.toLowerCase()
    const api = `https://pokeapi.co/api/v2/pokemon/${input}`
    fetch(api)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById('typeText').innerText = `${data.name} is an ${data.types[0].type.name} type Pokemon`
      document.querySelector('img').src = data['sprites']['front_default']
})
}

document.querySelector('button').addEventListener('click', getPokemon)
