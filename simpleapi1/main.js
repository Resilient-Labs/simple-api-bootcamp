

document.querySelector('button').addEventListener('click',getQuote)

function getQuote(){

    fetch(`https://api.kanye.rest`)
    .then(res => res.json())
    .then(quote =>{
        document.querySelector('h2').innerText = quote.quote
    })
}