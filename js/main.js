// const CoinGecko = require('coingecko-api')
// const CoinGeckoClient = new CoinGecko();

// const func = async() => {
//     let data = await CoinGeckoClient.coins.markets();
//     let data2 = data.data
//     data2.map(coin => {
//         let coinId = coin.id;
//         // let coinName = coin.name;
//         // let coinPrice = coin.current_price;
//         // let coinDay = coin.market_cap_change_24h;
//         // let coinVolume = coin.circulating_supply;
//         // let coinMarketCap = coin.market_cap;
//         console.log(coin.id)
        
//     })
//     document.querySelector('#tbody').innerHTML = `<tr>${coinId}</tr>`
// }
// func()

document.querySelector('button').addEventListener('click', getCoin)

function getCoin() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const val = document.querySelector('input').value;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      for(let i=0; i<data.length; i++) {
        //   console.log(data[i])
          if(val === data[i].id) {
              document.querySelector('#results').innerHTML = 
              `<h1>
              Coin Name: ${data[i].name}
              </h1>
              <h2>Current Price: ${data[i].current_price}</h2>
              <h2>24h High: ${data[i].high_24h}</h2>
              <h2>Market Cap: ${data[i].market_cap}</h2>`
          }
      }
             
    })
    .catch(err => {
        console.log(`error ${res.error}`)
    })
}
getCoin()


