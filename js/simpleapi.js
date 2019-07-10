// click a button that returns a img
// fetch api

document.querySelector('form').addEventListener('submit', dogs)


function dogs(e){
  e.preventDefault()
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(myJson => {
      console.log(myJson)
      if(myJson.media_type == "text"){
        document.querySelector('img').src = myJson.message
      }else{
        document.querySelector('img').src = myJson.message
      }
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("NAH, not having it!!")
  });
}
