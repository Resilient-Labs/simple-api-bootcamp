
document.querySelector('button').addEventListener('click', char)

function char() {
  const url = `https://last-airbender-api.fly.dev/api/v1/characters`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
        
        let A = Math.floor(Math.random()*20) 
        let charTen = data[A].name
        let imgTen = data[A].photoUrl
        document.querySelector('h3').innerText = charTen
        document.querySelector('img').src =imgTen
      

      

    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}