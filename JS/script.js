//The user will get a random recipes by typing in a key ingredient

//need event listener that runs user's input
document.querySelector('button').addEventListener('click', getQuote)

function getQuote() {
    fetch('https://programming-quotesapi.vercel.app/api/random') // no key needed
    .then(response => response.json())
    .then(quote => {
        console.log(quote)
    document.querySelector('h2').innerText = quote.author
    document.querySelector('h3').innerText = quote.quote
    })
    .catch(err => {  
        console.log(`error ${err}`)
    });
}


