function pictureButtonHandler(){
    const pictureInput = document.querySelector('input')
    // console.log('the value of the input is', pictureInput.value)
    // console.log('Button is clicked')
    const url = 'https://api.unsplash.com/search/photos/?client_id=U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk&query='+pictureInput.value
console.log(url)

fetch(url)
.then(response => response.json())
.then(data =>{
    const randomNumber = Math.floor(Math.random() * data.results.length);
    console.log(data.results[randomNumber].alt_description)
    document.querySelector('h2').innerText = data.results[randomNumber].alt_description
    document.querySelector('img').src = data.results[randomNumber].urls.regular
})

}
// url
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// https://api.unsplash.com/search/photos/?client_id=U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk&query=london



// Access Key
// U593A96VvuX0wAYUrayYqBHxwVyASPltFOBkKrSctLk

// Secret Key
//TWM0c0nCr4QWVvstm9lqPnjGZe1_07Ym1b2p0v7Pr0o

const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)
