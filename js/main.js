
document.querySelector('button').addEventListener('click', getBitcoinPrice);

function getBitcoinPrice(event) {
    event.preventDefault();
    let price = document.querySelector("#price");
    let url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        price.innerHTML = data.bpi.USD.rate;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    }

