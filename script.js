//sorry lazy css rn ill edit this again later


document.querySelector('button').addEventListener('click', getArtwork)

function getArtwork(){
// let artworkVal = document.querySelector('input').value
let url = `https://acnhapi.com/v1a/art/`;

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'animal-crossing-new-horizons1.p.rapidapi.com',
//         'X-RapidAPI-Key': '33b8442f0amsh8a1d74649b4471bp13e100jsne2ea3d6922c8'
//     }
// };
let rand = Math.floor(Math.random() *43)

fetch(url)
.then(res => res.json())
.then(artwork => {
        console.log(typeof artwork)
        console.log(rand)
        document.querySelector('h2').innerText = artwork[rand].name["name-USen"]
        document.querySelector('img').src = artwork[rand].image_uri
        document.querySelector('h3').innerText = artwork[rand]["museum-desc"]
})
.catch(err => {
    console.log(`error ${err}`)
});
}