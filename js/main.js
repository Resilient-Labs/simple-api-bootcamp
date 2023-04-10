document.querySelector("button").addEventListener('click', definition);
document.querySelector("button").addEventListener('click', clear);




function definition(){
  clear()
  let word = document.querySelector("#word").value
  const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=9358d42e-49e5-45ea-8819-7961985ff7f4`
  
fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector(".pronoun").innerText = data[0].fl
      // document.querySelector(".define").innerText = data[0].shortdef[0]
        for(i = 0; i < data[0].shortdef.length; i++){
          const list = document.createElement('li')
          list.innerText = data[0].shortdef[i]
          document.querySelector('.define').appendChild(list)
        }
    }) 
  
    
    .catch(err => {
        console.log(`error ${err}`)
    });
}
function clear(){
  Array.from(document.querySelector('.define').children).forEach(li => li.remove())
}