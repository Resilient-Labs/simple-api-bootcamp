//function to grab the data
document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){
    //const quote = document.querySelector('input').value
    const ron = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`
//the quotes have to be put into an array
    fetch(ron) //fetch data from the array
        .then(res => res.json())
        .then(data => {
            console.log(data.hdurl)
            document.querySelector('h2').innerText = data
        })
        .catch(error => {
            console.log(`error${error}`)
        })
}



// https://public-apis.io/ron-swanson-quoutes-api