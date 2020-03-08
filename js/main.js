//GOAL Display data returned from an api
  //let useranswer = prompt("anime your looking for")
  const clickthis = document.querySelector('.clickthis');
  clickthis.addEventListener('click', () => {
  const input = document.querySelector('input').value;
    fetch(`https://api.jikan.moe/v3/search/anime?q=${input}&page=1`)
        .then(res => res.json())
        .then(response => {
          console.log(response)
          response.results[0].image_url
          //alert(response.results[0].image_url)
          document.getElementById('image').src=response.results[0].image_url
        })
  })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
