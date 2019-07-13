let i = 0
document.querySelector("#searchButton").onclick = () => {
  console.log("hello")
  document.querySelector("#searchButton").innerHTML = "Next Photo 📷"
  let input = document.querySelector("input").value
  console.log(`input is ${input}`)
  fetch(`https://pixabay.com/api/?key=13024749-40ad10dbd14058aa91e290f33&q=${input}&image_type=photo`)
  //process json to proper format
  .then(response => response.json())
      // Non-farArrowFx format
      // fatArrowFunction auto returns
      //   .then(
      //     function(response){
      //     return response.json()
      //   }
      // )
  .then(response => {
    console.log(response)
    console.log(response.hits[0].largeImageURL)
    document.querySelector("#fetchedImg").src = response.hits[i].largeImageURL
  })
      // Non-farArrowFx format
      // .then(
      //   function(response){
      //     console.log(response)
      //   }
      // )
  .catch(error => {
    console.log(`error ${error}`)
    alert("sorry, there are no results for your search")
  })
  i++
}






// https://pixabay.com/sk/service/about/api/
// https://pixabay.com/api/docs/
// EXAMPLE
// https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo
// API key:
// 13024749-40ad10dbd14058aa91e290f33
