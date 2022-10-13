document.querySelector('button').addEventListener('click', getChar)

function getChar(){
    // let characterVal = document.querySelector('input').value
    let url = `https://forza-api.tk/`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    document.querySelector('img').src = data.image
    })
    .catch(err => {
    console.log(`error ${err}`)
    });
}