//Goal: Display data returned from an api
document.querySelector('button').addEventListener('click', getSeasons)

function getSeasons(){
    let showName = document.querySelector('input').value
    fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data[0])
            if(data[0] !== undefined){
                document.querySelector('h4').innerText = ''
                document.querySelector('h3').innerText = `${data[0].show.name}(${data[0].show.premiered.substring(0, 4)})`
                document.querySelector('h2').innerText = data[0].show.rating.average
                document.querySelector('img').style.display = 'block'
                document.querySelector('img').src = data[0].show.image.medium
            }else{
                document.querySelector('h4').innerText = 'Show not found'
                document.querySelector('h3').innerText = ''
                document.querySelector('h2').innerText = ''
                document.querySelector('img').style.display = 'none'
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
