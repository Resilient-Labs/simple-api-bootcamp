function getQuote() {
    let selection = document.querySelector('button')
   
    //sting interpolation //
    const url = (`https://api.kanye.rest/text=${selection}`) // template literal

    fetch(url) //fetch is requesting something from an API
        .then(res => res.json()) // parse response as JSON 
        .then(data => {

            console.log(data)
            document.querySelector('#quote').innerText = data.quote
        })
    
        .catch(err => {
            console.log(`error ${err}`)
        }); //for catching errors
}


document.querySelector('button').addEventListener('click', getQuote)//once clicked the function gets called
