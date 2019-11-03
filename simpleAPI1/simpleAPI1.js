

const button = document.querySelector('button')


button.addEventListener('click', ()=>{
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then(response => {
      //console.log(response.message)
      let dog = response.message
      document.querySelector('img').src = dog
    })
})
