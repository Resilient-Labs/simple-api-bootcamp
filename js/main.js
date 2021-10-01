// Goal: Display data returned from an api
// CREDIT TO https://docs.thecatapi.com/

document.querySelector("button").addEventListener("click", cuteCats)

function cuteCats() {

    const url = `https://api.thecatapi.com/v1/images/search`

    fetch(url)
      .then(res => res.json())
      .then(data => {

        document.querySelector('img').src = data[0].url  

        console.log(data)

    })

      .catch(err => {
        console.log(`error ${err}`)
    })
 }