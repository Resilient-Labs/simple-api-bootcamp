//https://v2.jokeapi.dev/joke/Any?safe-mode&contains=dog

document.querySelector('#specificBtn').addEventListener('click', findJoke)
document.querySelector('#randomBtn').addEventListener('click', getRandomJoke)

function findJoke(e){
    e.preventDefault
    let word = document.querySelector('input').value
    console.log(word)

    let url = `https://v2.jokeapi.dev/joke/Any?safe-mode&contains=${word}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
    console.log(data) 
      
    if(data.type === 'twopart'){
        document.querySelector('#setup').innerText = data.setup
        document.querySelector('#delivery').innerText = data.delivery 
    }else if(data.type === 'single'){
        document.querySelector('#setup').innerText = data.joke
    }else{
        document.querySelector('#setup').innerText = "No punchline. Please try again."
    }
    //   document.querySelector('img').src = data.url
    //   document.querySelector('h3').innerText = data.explanation

    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}

function getRandomJoke(e){
    e.preventDefault
    document.querySelector('input').value = ''

    let url = `https://v2.jokeapi.dev/joke/Any?safe-mode`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
    console.log(data) 
      
    if(data.type === 'twopart'){
        document.querySelector('#setup').innerText = data.setup
        document.querySelector('#delivery').innerText = data.delivery 
    }else if(data.type === 'single'){
        document.querySelector('#setup').innerText = data.joke
    }else{
        document.querySelector('#setup').innerText = "No punchline. Please try again."
    }
    //   document.querySelector('h2').innerText = data.title
    //   document.querySelector('img').src = data.url
    //   document.querySelector('h3').innerText = data.explanation

    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}