
const btn = document.getElementById('button');
const images = document.getElementById('catPic')
const section = document.querySelector('.showPic')


btn.addEventListener('click', getRandomCat);


function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
            section.innerHTML = `<img src=${data.file} alt="cat" />`
        // .catch(err =>  {
        //     console.log(`error ${err}`)
        // })

   
	});
}

