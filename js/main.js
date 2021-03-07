const dog_btn = document.getElementById('dog_btn');
const dog_result = document.getElementById('dog_result');

dog_btn.addEventListener('click', randomDog);


function randomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}




























// https://catfact.ninja/fact
// https://api.thecatapi.com/v1/images/search


// document.querySelector('button').addEventListener('click', getData)
//
// function getData() {
//   let date = document.querySelector('button').value
//   // template literal
//   let apiLink = `https://api.thecatapi.com/v1/images/search`
//   fetch(apiLink)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//
//       document.querySelector('img').src = data[0].url
//
//
//       console.log(data)
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     })
//
// }
