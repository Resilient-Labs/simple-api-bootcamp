let quote = document.querySelector('#kanye')
let btn = document.querySelector('button')
btn.addEventListener('click', getNewQuote )
let url = 'https://api.kanye.rest'


function getNewQuote() {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    quote.innerText = data.quote

  })



  

}