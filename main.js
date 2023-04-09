

function getEpisode(){
    let selection = document.querySelector('input').value.toLowerCase()
    console.log(selection)
    // console.log(selection)
    const url = (`https://rickandmortyapi.com/api/episode?=${selection}`)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.results)
        data.results.forEach(show => {
            if(selection === show.name.toLowerCase()){
                document.querySelector('#name') .innerText= show.name
                document.querySelector('#airDate').innerText = show.air_date
                document.querySelector('#episode').innerText = show.episode
            }
        })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', getEpisode)