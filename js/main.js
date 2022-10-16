document.querySelector('.grabCat').addEventListener('click', getRandomCatImage)

function getRandomCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_0hUVEjHPVF9KAR2fhu1aK9e5NqbNduH2GK18UOwWcwQiQRFylD36vuc5U5Nj940D') 
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        const cat = document.querySelector('.theCat')
        cat.src = data[0].url
    }) 
}