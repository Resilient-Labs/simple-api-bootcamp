document.querySelector('button').addEventListener('click' , findDigi)

function findDigi(){
    // const name = document.querySelector('input').value
    
    const url = `https://digimon-api.herokuapp.com/api/digimon`
    
    fetch(url)
    .then(res => res.json())
    .then(response => {
        response.forEach( (data) => {
        console.log(data)
        const list = document.querySelector("ol")
        const sentence = document.createElement("li")
        
        let name = data.name
        let level = data.level
        
        sentence.innerHTML = `${name} || ${level}`
       

        // this adds li to ol 
        list.appendChild(sentence) 
       
    })
})
    .catch(err => {
        console.log(`error ${err}`)
    })
    
}
