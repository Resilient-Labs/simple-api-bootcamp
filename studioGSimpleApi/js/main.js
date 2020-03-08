
// let movieTitle = prompt('What is your favorite Studio Ghibli Film? capital letters')
// fetch(`https://ghibliapi.herokuapp.com/films?&title=${movieTitle}`)

document.getElementById('generator').addEventListener('click', function(){

  const movieTitle = Math.round(Math.random()*20)
  fetch(`https://ghibliapi.herokuapp.com/films`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        document.getElementById('title').innerHTML = response[movieTitle].title
        document.getElementById('description').innerHTML = response[movieTitle].description
        // NextCall(response.status)

      })
});




// function NextCall(zebra){


// 1. Show all the movies available

// http://www.YoutubeRepeater.com/watch?v=QZhI2qD3WHM&s=2040&e=2135
