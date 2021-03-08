document.querySelector('button').addEventListener('click', searchCard)

function searchCard(){
    let cardName = document.querySelector('input').value
    // always use https://
    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.data[0].name
    document.querySelector('h3').innerText = data.data[0].atk
    document.querySelector('#race').innerText = data.data[0].race
    document.querySelector('#type').innerText = data.data[0].type
    document.querySelector('h5').innerText = data.data[0].desc
    })
    }