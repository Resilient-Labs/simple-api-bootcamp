//Simple API 1

  // let url = `https://api.jikan.moe/v4/anime?q=bleach&sfw`



document.querySelector('button').addEventListener('click', anime)

function anime(){
  let selection = document.querySelector('input').value
  let url = `https://api.jikan.moe/v4/anime?q=${selection}&sfw`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {

   console.log(data.data[0])
   console.log(data.data[0].trailer.embed_url)

  let name = data.data[0].title_english
  let plot = data.data[0].synopsis
  console.log(plot)
   console.log(name)
   let image = data.data[0].images.jpg.image_url
   let video = data.data[0].trailer.embed_url
   if(video !== null){
    document.querySelector("iframe").classList.remove("hidden")
    document.querySelector("iframe").src = video
   }else{
    document.querySelector("iframe").classList.add("hidden")
   }
      document.querySelector('h3').innerText = name
      document.querySelector('img').src = image
      document.querySelector("iframe").src = video
    document.querySelector('h4').innerText = plot
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}