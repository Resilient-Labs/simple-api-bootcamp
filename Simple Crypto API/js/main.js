document.querySelector('button').addEventListener('click', getPrice)

URL = `https://api.coingecko.com/api/v3/coins/list`

function getPrice(){
    let coin = document.querySelector('.name').value
    fetch(`https://api.coingecko.com/api/v3/coins/${coin}?tickers=true&market_data=true&community_data=false&developer_data=false`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.price').innerText = data.error
        document.querySelector('.price').innerText = 'Current Market Price ' + data.market_data.current_price.usd + ' USD'
        document.querySelector('.marketCap').innerText = data.market_data.market_cap.usd + ' USD in Total Market Cap'
        document.querySelector('.marketRank').innerText = 'Ranked #' + data.market_data.market_cap_rank
        document.querySelector('.ticker').innerText = 'Ticker: ' + data.symbol
        
    })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
}