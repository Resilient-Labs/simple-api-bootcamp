let favoriteAnime= prompt("Enter Your favorite anime to find a gif")
fetch(`https://api.giphy.com/v1/gifs/random?api_key=d25ica6Wn269yDBP59OVKa5c9HIYFjuH&tag=${favoriteAnime}&rating=G`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // response.forEach((el)=>{
      console.log(response.data.images.downsized_large.url)
      document.querySelector('img').src=response.data.images.downsized_large.url
    // })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
