// //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getDogFact)

function getDogFact(e) {
    e.preventDefault()
    const url = `https://meowfacts.herokuapp.com/`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // document.querySelector('p').innerText = data.data["0"]
            const newParagraph = document.createElement('p')
            const catFact = data.data["0"]
            newParagraph.appendChild((document.createTextNode(`${catFact}`)))
            document.querySelector('body').appendChild(newParagraph)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}