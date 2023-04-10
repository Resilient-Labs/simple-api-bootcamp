document.querySelector('button').addEventListener('click', getActivity)

function getActivity(){
    let selection = document.querySelector('input').value
    const url = `http://www.boredapi.com/api/activity?participants=${selection}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)

    document.querySelector('h2').innerText = data.activity
    document.querySelector('h3').innerText = data.type

    if( selection <= 0 ){
        return ("ERROR")
    }
    })
}