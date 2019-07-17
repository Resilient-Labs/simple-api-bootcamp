//this app is for images and videoS from NASA
//NASA API key : qodkuyKgxvT7QDDMpOtZQ83g57OKLgQyqAVTjqxs
//https://api.nasa.gov/api.html#Images

document.getElementById("searchMe").addEventListener("click", doSearch);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSearch() {
  fetch("https://images-api.nasa.gov/search?q=moon")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      //the function below was created because my json has 100 img
      const random = getRandomInt(0, 99);
      document.getElementById("imageS").src = response.collection.items[random].links[0].href;
    })
    .catch(err => {
      alert("sorry, there are no results for your search")
    });
}
