let kat = "https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg,png,gif&format=json&order=RANDOM&page=0&limit=10&category_ids&breed_ids";
document.querySelector('button').addEventListener('click', cat)
function cat(e) {
  e.preventDefault()
  fetch(kat)
    .then(res => res.json())
    .then(response => {
      console.log(response);

      document.querySelector('img').src = response[0].url
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("No catz for you ma dawg")
    });
}
