document.querySelector("#button").addEventListener("click", searchCrypto)

function searchCrypto(){
let crypto = document.querySelector('#crypto').value.toLowerCase()
const url = (`https://api.lunarcrush.com/v2?data=assets&key=7go5ymwp08iu332bz58dz8&symbol=${crypto}`)

fetch(url)
    .then(res => res.json())
    .then(data => {
          console.log(data)
          document.querySelector('#name').innerHTML = data.data[0].name
      if(data.data[0].high > 1){
      document.querySelector('#print').innerHTML = '$ ' + Math.floor(data.data[0].high)
      }else{
      document.querySelector('#print').innerHTML = '$ ' + data.data[0].high
      }

    })
    .catch(err => {alert("Error - couldn't find results, sorry!")
    })
}

//this project was worked on by hayden 2
