document.querySelector("button").addEventListener('click', function(){
fetch("https://api.thecatapi.com/v1/images/search?api_key=f160dc15-ee68-4382-b494-358425fd18ec")
   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
   .then(response => {
     let cat = response[0]
     let catImage = cat.url
     document.querySelector("img").src = catImage
       console.log(response)
   })
   .catch(err => {
       console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
   });
 })
