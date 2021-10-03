document.querySelector('#submit').addEventListener('click', getInfo)

const displayDefinition = document.querySelector('#allDefinitions')

function getInfo() {
  let word = document.querySelector('#word').value
  let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=_______` 

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('#wordInput').innerText = data[0].meta.id
      for (let i = 0; i < data[0].shortdef.length; i++) {
        let displayDefinitions = data[0].shortdef[i]
        const li = document.createElement('li')

        li.innerText = displayDefinitions
        document.querySelector('#allDefinitions').appendChild(li)
      }
    })
    .catch(err => {
      document.querySelector('h2').innerText = "We're having trouble finding that word. Try again"
      console.log(`error${err}`)
    })
}