
const getInfo = document.querySelector('input')

function resetResults() {
  const row = document.querySelector('.row');
  row.innerHTML = '';
} // this function is to restart the search input. Once a new keyword is inserted in the search bar then a new set will display


// function to add the fetch and the variables to get the information from the API
function getMovies(){

  resetResults()
  let movie = document.querySelector('input').value
  const url = `http://www.omdbapi.com/?apikey=e2fdb3da&s=${movie}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(movie)
      console.log(data)

      //added a forloop to get more than one movie recommendation

      for (let i = 0; i < data.Search.length; i += 3){
        let poster = data.Search[i].Poster
        let title = data.Search[i].Title
        let year = data.Search[i].Year

        // create elements for the movie section
        let movieSection = document.createElement('div')
        movieSection.classList.add('movie')

        let movieTitle = document.createElement('h2')
        movieTitle.innerText = title

        let moviePoster = document.createElement('img')
        moviePoster.src = poster

        let movieYear = document.createElement('h3')
        movieYear.innerText = year

        // append the elements to the movie section
        movieSection.appendChild(movieTitle)
        movieSection.appendChild(moviePoster)
        movieSection.appendChild(movieYear)

        // select the row element and append the movie section
        let row = document.querySelector('.row')
        row.appendChild(movieSection)

        
        
      }

      
      // movieTitle.innerText = ''
      // moviePoster.innerText = ''
      // movieYear.innerText = ''
    })
    .catch(error => console.log(error));
}
resetResults()
document.querySelector('button').addEventListener('click', getMovies)



