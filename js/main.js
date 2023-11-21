document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
    fetch("https://api.kanye.rest")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
       console.log(data.message)
       document.querySelector('#results').innerText = data.quote
    })
    .catch(err => {
        console.log(`error ${err}`)
});

}