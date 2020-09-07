const button = document.querySelector('button')


button.addEventListener('click', () =>{ //function to activate button
fetch('https://dog.ceo/api/breeds/image/random') //
  .then(res => res.json()) //will recieve the response in json
  .then(response => { //changes response
    let pup= response.message //creating a new variable for the respne
    document.querySelector('img').src = pup  //new variable 'pup' is representing the 'img' in HTML, this is where pics will appear
  })
})
