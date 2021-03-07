

const btn = document.getElementById('button');
const images = document.getElementById('dogPic')
const section = document.querySelector('.smaller')
// let count = 0


btn.addEventListener('click', getRandomDog);


function getRandomDog() {
    // let apiKey = "T0jznlsubW13V7xCOLsFgaXlMTwg8HId"
    // fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${apiKey}&limit=1`)
    // .then(res => res.json()) 
    // .then(giffy => {
    //   document.querySelector("img").src = giffy.data[0].images.original.url
    // })    
    // count++

	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				section.innerHTML = `<img src=${data.url} alt="images dogs " />`;
			}
   
	});
}


