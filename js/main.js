  const button = document.querySelector('button').addEventListener('click',getYugioh)
  let imageA = document.querySelector('.card')
  let costAmount = document.querySelector('#cost')
  let description = document.querySelector('h3')
  let cardError = document.querySelector('#error')

  function getYugioh(){
    cardError.classList.add('hide')
  let selection = document.querySelector('input').value
  let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${selection}`
  fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
      console.log(data)
      description.classList.remove('hide')
      imageA.classList.remove('hide')
      costAmount.classList.remove('hide')
      imageA.src = data.data[0].card_images[0].image_url
      costAmount.innerText = `Acording to TCGPlayer.com this card is worth $${data.data[0].card_prices[0].tcgplayer_price}`
      description.innerText = `Card Description: ${data.data[0].desc}  ${data.data[0].race} / ${data.data[0].type} `

   
    }) 
    .catch(err => { 
      cardError.classList.remove('hide')
      description.classList.add('hide')
      imageA.classList.add('hide')
      costAmount.classList.add('hide')
        console.log(`error ${err}`) 
        cardError.innerText = `No card matching your query was found in the database` 
    });
  
  }




