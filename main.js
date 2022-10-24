
function loadPage(){
    let countryCode = 'us'

    let lang = 'en'

    let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&language=${lang}&apiKey=7803c3ef7fd8494a92997942717ca853&pageSize=5`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.articles)

            let articles = data.articles

            console.log(articles[4])

           for(let i=0 ; i < 5; i++){
                
                let placeImg =  document.getElementById(`img${i}`)
                    placeImg.src = articles[i].urlToImage

                let placeTitle =  document.getElementById(`title${i}`)
                    placeTitle.innerText = articles[i].title

                let placeDescription =  document.getElementById(`blurb${i}`)
                    placeDescription.innerText = articles[i].description

                let placeAuthor = document.getElementById(`author${i}`)
                    placeAuthor.innerText = articles[i].author

                let placeDate = document.getElementById(`date${i}`)
                    placeDate.innerText = articles[i].publishedAt

                let storyPlace =  document.getElementById(`story${i}`)

                    storyPlace.href = articles[i].url
                 } 
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

loadPage()

let filter = document.querySelector('#submit')

filter.addEventListener('click', newPage)

function newPage(){
    countryCode = document.querySelector('#countryCode').value.toLowerCase()

    lang = document.querySelector('#languageCode').value
    
    let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&language=${lang}&apiKey=7803c3ef7fd8494a92997942717ca853&pageSize=5`

    console.log(countryCode)
    console.log(lang)
    console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })
        .catch(err => {
            console.log(`error ${err}`)
        }) 
}
