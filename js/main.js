//goal is to get a currency and covert it into another currency for the crypto space.

//create event listeners
document.querySelector('button').addEventListener('click', triggeredEventListener)




//create functing to fire when event listener triggers
function triggeredEventListener ( ){
    
    // grabs input value
    let fromCurrency = document.querySelector('#currencyOne').value
    let toCurrency = document.querySelector('#currencyTwo').value

    //API KEY
    let api_Key = process.env.API_KEY

    //create fetch syntax
    fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${api_Key}`)
    .then( res => res.json())
    .then(response => {
        console.log()
        
        document.querySelector('#ConversionResults').innerHTML = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        
    })
    .catch(err =>{
        console.log(`Error: ${err}`)
    })

}
