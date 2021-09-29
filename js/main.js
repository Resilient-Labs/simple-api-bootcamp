// show fish facts
document.querySelector('button').addEventListener('click', getCatFact)

function getCatFact(){

    const url = `https://meowfacts.herokuapp.com/`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('span').innerText = data.data
            console.log(data)
        })
        .catch(err => console.log(err))
}
