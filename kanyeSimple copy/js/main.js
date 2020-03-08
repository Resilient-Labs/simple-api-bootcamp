const startButton = document.querySelector('.startButton')
startButton.addEventListener('click', showQuote)
function showQuote(){
fetch("https://api.kanye.rest")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response.quote)
      //document.querySelector('p').innerHTML= repsonse.quote
      //document.body.innerHTML = response.quote
      document.getElementById('quoteTag').innerHTML = response.quote
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
