document.querySelector('button').addEventListener('click', getCats)

function getCats(){
  const url = `https://api.thecatapi.com/v1/images/search`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data[0].url  
    })
    .catch(err => {
          console.log(`error ${err}`)
      });
  document.querySelector('img').style.display = 'inline-block'
}