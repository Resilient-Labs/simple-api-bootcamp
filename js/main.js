document.querySelector('button').addEventListener('click',getArt)

function getArt() {

const url = 'https://api.harvardartmuseums.org/image?apikey=18e6eba8-e91b-43f0-b78d-bb98314e81c6'

console.log(url);

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data);
      const n = (Math.floor(Math.random() * 10) + 1);
      document.querySelector('img').src = data.records[n].baseimageurl;


      // document.querySelector('h2').innerText = data.title
      //
      // document.querySelector('img').src = data.url
      //
      //
      // document.querySelector('h3').innerText = data.explanation


    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
