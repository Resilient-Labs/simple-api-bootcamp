//simple #1 - GIF API

document.querySelector('button').addEventListener('click', getGIF)

function getGIF() {
    const mood = document.querySelector('input').value
    fetch(`https://tenor.googleapis.com/v2/search?q=${mood}&key=AIzaSyAHgIEia3Ch3_dyq7_lLaxVTkOtiVyNZwQ&client_key=my_test_app&limit=8`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.results[0].media_formats.gif.url)
        document.querySelector('img').src = data.results[0].media_formats.gif.url
    })


    .catch(err => {
        console.log(`error ${err}`)
    })
}