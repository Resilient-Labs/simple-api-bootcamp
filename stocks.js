document.getElementById('button1').addEventListener('click', checkStock)

function checkStock(){


let stockSymbol = document.getElementById('stockSymbol').value

let url1 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&outputsize=compact&apikey=M8TBD0YRPNI0LRQE`

fetch(url1)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data) 

    let stock = data[`Meta Data`]
    let stockSymbol = stock[`2. Symbol`]
    document.getElementById('stockName').innerText = stockSymbol
    console.log(stockSymbol)

    let stockInfo = data['Time Series (5min)']
    console.log(stockInfo)

    let date = formatDate(yesterday)
    console.log(date)

    let lastDate = stockInfo[`${date} 19:50:00`]
    

    if(lastDate === undefined){
        lastDate = stockInfo[`${date} 20:00:00`]
        console.log(data)
    }

    let openCost = lastDate [`1. open`]
    document.getElementById('dailyOpen').innerText = openCost

    let dailyHigh = lastDate[`2. high`]
    document.getElementById('dailyHigh').innerText = dailyHigh

    let dailyLow = lastDate[`3. low`]
    document.getElementById('dailyLow').innerText = dailyLow

    let dailyClose = lastDate[`4. close`]
    document.getElementById('dailyClose').innerText = dailyClose

    let dailyVolume = lastDate[`5. volume`]
    document.getElementById('dailyVolume').innerText = dailyVolume
  })


.catch(err => {
    console.log(`error ${err}`)
    });  
}
  

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}