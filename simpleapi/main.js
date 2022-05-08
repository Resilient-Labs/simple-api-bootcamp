
let url = 'https://www.boredapi.com/api/activity/'

document.querySelector('button').addEventListener('click', randomActivity)

function randomActivity(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('p').innerText= data.activity
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

