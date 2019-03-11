//Have random card generator. Users can use buttons to choose how many cards to display, default being 1. Able to use filters with parameters as well to choose what kind of cards.
//Be able to change language, check legality, and in some way use all of the parameters
//https://api.scryfall.com/catalog/card-names
document.getElementById('cardGen').addEventListener('click', card)
function card(){
  fetch(`https://api.scryfall.com/cards/random`)
  .then(res=>res.json())
  .then(response =>{
    console.log(response)
    document.getElementById('cardImg').src = response.image_uris.normal;
    // document.getElementById('cardName').innerText= response.name;
    // document.getElementById('cardDesc').innerText= response.oracle_text;
  })
}
