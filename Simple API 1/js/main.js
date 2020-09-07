
var button= document.querySelector('button')
button.addEventListener('click',fetchFunction)

function fetchFunction(){
fetch(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('p').innerHTML = data.quote.quoteText;

    console.log(data);
    })
}
