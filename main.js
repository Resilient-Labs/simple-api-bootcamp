let countryCode = document.querySelector('#countryCode')
countryCode.toLowerCase

let lang  = document.querySelector('#languageCode')

fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&language=${lang}&apiKey=7803c3ef7fd8494a92997942717ca853`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    }) 