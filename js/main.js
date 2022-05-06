document.querySelector('button').addEventListener('click', getCharacter)


function getCharacter(){
  let character = document.querySelector('input').value
  // let url = `https://zelda.fanapis.com/api/characters?name=${character}`
  let url = `https://zelda.fanapis.com/api/characters?name=${character}`




  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.data.length > 0){
  
    // document.querySelector('img').src = data.data[0].appearances[0]
    document.querySelector('h2').innerText = data.data[0].name
    document.querySelector('h3').innerText = data.data[0].description
    }
   
 
  }) 
  .catch(err => {
    console.log(`error ${err}`)
  })









}