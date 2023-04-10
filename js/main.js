document.querySelector('button').addEventListener('click', getDefinition)


function getDefinition(){
  let selection = document.querySelector('input').value
  let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${selection}?key=520f516f-e5a2-497c-840e-412a89dbc9ca`
   
  fetch(url) 
    
  //converting url in a way to read script
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      document.querySelector('h2').innerText = `${data[0].fl}. ${data[0].shortdef}`
      document.querySelector('h3').innerText = `${data[1].fl}. ${data[1].shortdef}`
      document.querySelector('h4').innerText = `${data[2].fl}. ${data[2].shortdef}`
      document.querySelector('h5').innerText = `${data[3].fl}. ${data[3].shortdef}`
    })
  .catch(err => { 
    console.log(`error ${err}`) 
  }); 

}