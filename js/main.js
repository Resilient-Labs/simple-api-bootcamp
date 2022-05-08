document.querySelector('button').addEventListener('click', getCharacter)

function getCharacter(){
    let character = document.querySelector('input').value
    let url = `https://rickandmortyapi.com/api/character/?name=${character}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log(data.results[0].image)
      document.querySelector('img').src = data.results[0].image
      console.log(data.results[0].status)
      document.querySelector('span').innerText = data.results[0].status
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
