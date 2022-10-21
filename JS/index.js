// Goal: Display data returned from an api

// this api will return a character from the legend of zelda series


document.querySelector('button').addEventListener('click', getFetch)

const body = document.querySelector('body');
const h2 = document.querySelector('body h2');
const span = document.querySelector('body span');

function getFetch() {

    let url = `https://zelda.fanapis.com/api/characters`
 

    fetch(url)
    .then(res => res.json())
    .then(info => {



        h2.innerHTML = info.data[0].name;
        span.innerHTML = info.data[0].description;
        

        // document.querySelector('img').src = info.data[0].appearances[0];
    
      
        console.log(info)
     
        



    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}