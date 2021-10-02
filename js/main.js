//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// CASS group help work together with the last .thendata to get the temp to dispaly. 

document.querySelector('button').addEventListener('click', advice)

function advice(){
    const url = `https://api.adviceslip.com/advice`
    fetch(url)
    .then(response => {
        console.log(response)
        return response.json()
        })
        .then(data =>{document.querySelector('h3').innerText= data.slip.advice
    console.log(data.slip)
    })
}
