
// Goal: Display data returned from an api
//wow i did this with no help #progress

document.querySelector('button').addEventListener('click', getLyric)

function getLyric(){
  let artist = document.querySelector('input').value
  let title = document.querySelector('.title').value
  let url = `https://api.lyrics.ovh/v1/${artist}/${title}`
  console.log(url)

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // document.querySelector('img').src =

      document.querySelector('h3').innerText = data.lyrics
      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

}
