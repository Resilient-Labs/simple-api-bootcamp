//alert("hello world")
//    "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"





     //this is a variable that will be used several times. this is the prompt at the start.
  document.querySelector("button").addEventListener("click", getRandomGif )
  const apiKey = "8Pwa2g7ZLdP25x0SFCwTZz8I1ypGHKsM";
  function getRandomGif(){
    let keyword = prompt("Enter a gif ")//this is a variable that will be used several times. this is the prompt at the start.
  fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}`) //the template literal makes it so what ever is entered will be shown.
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
    let randomNum = Math.floor(Math.random() * Math.floor(response.data.length)); //this is the random selection of the gifs. the length is out of how many are available.
        console.log(response)
          console.log(randomNum)
      document.querySelector("iframe").src = response.data[randomNum].url //iframes is for video. document.query goes to html to react to what is selected "iframe"



      })
      .catch(err => {             //this is for the user to see if there request could not be completed
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

}




// fetch(giphyAPI)
// .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//       console.log(JSON.stringify(response, null, 1))}
