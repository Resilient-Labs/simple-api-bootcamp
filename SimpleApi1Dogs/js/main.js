


document.querySelector('form').addEventListener('click', function(e){
  e.preventDefault()
  let dogbreed = document.querySelector("input").value
  dogbreed = dogbreed.toLowerCase()
fetch(`https://dog.ceo/api/breed/${dogbreed}/images/random`)
.then(res=> res.json())
.then(response => {
  document.querySelector("#dogRandom1").src = response.message
})
fetch(`https://dog.ceo/api/breed/${dogbreed}/images/random`)
.then(res=> res.json())
.then(response => {
  document.querySelector("#dogRandom2").src = response.message
})
fetch(`https://dog.ceo/api/breed/${dogbreed}/images/random`)
.then(res=> res.json())
.then(response => {
  document.querySelector("#dogRandom3").src = response.message
})
})
