document.querySelector('button').addEventListener('click', getCard)

function getCard(){
    const cardNum = document.querySelector('input').value
    const url = `https://api.pokemontcg.io/v2/cards/?key=58bcb12a-fa25-4a99-8249-5976f4e6b5ce`

    
    fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      console.log(data.data[cardNum])
      console.log(data.data[cardNum].images.large)
      document.querySelector('img').src = data.data[cardNum].images.large
        }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}