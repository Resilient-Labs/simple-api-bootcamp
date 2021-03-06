fetch(`http://hp-api.herokuapp.com/api/characters`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let tableBody = document.querySelector('.tableBody')

    data.forEach( character => {
      let newRow = document.createElement('tr')
      let name = document.createElement('td')
      let genderAncestry = document.createElement('td')
      let actor = document.createElement('td')
      let house = document.createElement('td')
      name.innerText = character.name
      genderAncestry.innerText = `${character.gender} ${character.ancestry}`
      actor.innerText = character.actor
      house.innerText = character.house

      newRow.appendChild(name)
      newRow.appendChild(genderAncestry)
      newRow.appendChild(actor)
      newRow.appendChild(house)
      tableBody.appendChild(newRow)
    });
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
