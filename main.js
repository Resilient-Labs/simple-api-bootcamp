function animeYell() {
    const animeQuote = 'https://animechan.vercel.app/api/random'
    fetch(animeQuote)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    const aQ = document.querySelector('#animequote')
    const aS = document.querySelector('#animeSource')
    aQ.innerText = data.quote
    aS.innerText = `-${data.character}, ${data.anime}`
    
    })
    .catch(err => {
    console.log(`error ${err}`)
    });

}
document.querySelector('#button').addEventListener('click', animeYell)