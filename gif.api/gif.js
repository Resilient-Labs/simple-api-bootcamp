const button = document.querySelector('#button');

button.addEventListener('click', getGif);

document.querySelector('#getText').addEventListener('keyup', event => {
  if(event.key === 'Enter') {
    getGif();
  }
})

function getGif (){
  const userText = document.querySelector('#getText').value;
  fetch(`https://api.giphy.com/v1/gifs/search?q=${userText}&api_key=7TCbBMX335sizhL4tZ9L4QHQIbNpWFkz`)
  .then(res => res.json())
  .then(response => {
    console.log(response)
    document.querySelector('img').src = response.data[0].images.downsized_large.url;

  })
}
