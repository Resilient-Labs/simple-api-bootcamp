document.querySelector('form').addEventListener('submit', dogs)


function dogs(e){
  e.preventDefault()
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
      console.log(response)
      if(response.media_type == "text"){
        document.querySelector('img').src = response.message
      }else{
       document.querySelector('img').src = response.message
      }
  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
}
