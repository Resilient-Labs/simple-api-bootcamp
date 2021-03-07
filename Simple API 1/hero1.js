
document.querySelector('button').addEventListener('click', findHero)

function findHero(){
    const id = document.querySelector('input').value
    const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
    


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.combat').innerText = data[0].serch_statsus
        document.querySelector('.strength').innerText = data.powerstats.strength
        document.querySelector('img').src = data.images.lg
        document.querySelector('.eye').innerText = data.appearance.eyeColor
        document.querySelector('.sex').innerText = data.appearance.gender
        document.querySelector('.hair').innerText = data.appearance.hairColor
        document.querySelector('.height').innerText = data.appearance.height[0]
        document.querySelector('.race').innerText = data.appearance.race
        document.querySelector('.heroname').innerText = data.name
        document.querySelector('.name').innerText = data.biography.fullName
        document.querySelector('.birth').innerText = data.biography.placeOfBirth
        document.querySelector('.alignment').innerText = data.biography.alignment
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}