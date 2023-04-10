//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



document.querySelector('button').addEventListener('click', chuckNorris)


function chuckNorris(){

let url = 'https://api.chucknorris.io/jokes/random'

  fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('h2').innerText = data.value
    
      


      


    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });

}
