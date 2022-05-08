
//input elements
const input = document.querySelector('.titleInput')
const yearinput = document.querySelector('.yearInput')
const filmtypeinput = document.querySelector('.filmTypeInput')
const button = document.querySelector('.button')

//display elements
const poster = document.querySelector('.poster')
const title = document.querySelector('.title')
const released = document.querySelector('.released')
const ratings = document.querySelector('.ratings')
const gnre = document.querySelector('.genre')
const dir = document.querySelector('.director')
const plt = document.querySelector('.plot')
const displaysection = document.querySelector('.displaySection') 

//Api fetch and eventlistener fuction to run api
button.addEventListener('click', function () {
    fetch('http://www.omdbapi.com/?apikey=972bee00&t='+input.value+'&type='+filmtypeinput.value +'&y='+yearinput.value+'&plot=full')
        .then(res => res.json())
        .then(data => {
            let titleValue = data['Title']
            let releasedValue = data['Released']
            let ratingsValue = data['imdbRating']
            let genreValue = data['Genre']
            let directorValue = data['Director']
            let plotValue = data['Plot']
            let posterValue = data['Poster']

            dir.innerText += directorValue
            title.innerText += titleValue
            poster.src += data.poster
            plt.innerText += plotValue
            gnre.innerText += genreValue
            released.innerText += releasedValue
            ratings.innerText += ratingsValue
            poster.innerHTML += `<img src="${data.Poster}">`

            console.log(poster)
            console.log(posterValue)
            console.log(data)
        })

        .catch(err => alert('Please Correctly spell title of a movie, series or episode. The year and film type are optional.'))
})