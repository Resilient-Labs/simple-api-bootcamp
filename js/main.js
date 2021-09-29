// Display data returned from an api

document.querySelector('button').addEventListener('click', getLyrics)

function getLyrics() {
    const artist = document.querySelector('#artist').value
    const song = document.querySelector('#song').value
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = song
            document.querySelector('h3').innerText = data.lyrics
        })
        .catch(err => {
            console.log('error')
        })
}