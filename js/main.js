document.querySelector('button').addEventListener('click',getCharacter)

function getCharacter() {
    const character = document.querySelector('input').value
    console.log(character)
    fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
 let Array = [data]
    for(let i = 0; i < 12 ; i++){
        const fullName = data[i].name 
        const nick = data[i].nickname
        const occ = data[i].occupation
        const image = data[i].img
        document.querySelector('h2').innerText = fullName
        document.querySelector('.bday').innerText = nick
        document.querySelector('.occ').innerText = occ
        document.querySelector('img').src = image
    }
    
})
.catch(err => { 
    console.log(`error ${err}`)
})
}

