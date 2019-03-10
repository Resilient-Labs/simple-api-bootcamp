let apiURL = "https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg,png,gif&format=json&order=RANDOM&page=0&limit=10&category_ids&breed_ids";
let apiKey = "cb2733b2-c65b-4377-b86c-bebcbe3b2da3";


document.querySelector('button').addEventListener('click', cat)

function cat(e) {
  e.preventDefault()
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response);

      document.querySelector('img').src = response[0].url
      // if (responser[0].url == "image") {
      //   document.querySelector('img').src = response[0].url
      // } else {
      //   document.querySelector('iframe').src = response.url
      // }

    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
}
