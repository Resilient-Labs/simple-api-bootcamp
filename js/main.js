document.querySelector('button').addEventListener('click', pokiInfo)

function pokiInfo(){
  const rand = document.querySelector('input').value
  const random = rand.toLowerCase();
  const link = `https://pokeapi.co/api/v2/pokemon/${random}`
  fetch(link)
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    document.getElementById('span1').innerText = `${data.name} is a ${data.types[0].type.name} type`
    document.getElementById('span2').innerText = `${data.name} has the abiliy ${data.abilities[0].ability.name}`
    document.getElementById('span3').innerText =  `${data.name} has a height of ${data.height}`
    document.getElementById('span4').innerText =  `${data.name} has a weight of ${data.weight}`
    document.querySelector('img').src = data['sprites']['front_default']
    
  })
}