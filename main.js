//Enable your user to enter a city + country and return the temperature in Fahrenheit
//creating a eventListener for the function 


document.querySelector('button').addEventListener('click', getFood)

function getFood() {
   

 
	
   
    let yumYum = document.querySelector('#input').value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
            'X-RapidAPI-Key': 'adcb157487mshbfd65850fc06260p18d6ecjsnbd845fcb0ea1'
        }
    };

    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${yumYum}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('#h21').innerText =data.hits[0].recipe.label
            document.querySelector('#img1').src = data.hits[0].recipe.image
            document.querySelector('#h21').innerText = data.hits[0].recipe.ingredientLines
            document.querySelector('#h22').innerText = data.hits[1].recipe.label
            document.querySelector('#img2').src = data.hits[1].recipe.image
            document.querySelector('#h22').innerText = data.hits[1].recipe.ingredientLines
            document.querySelector('#h23').innerText = data.hits[2].recipe.label
            document.querySelector('#img3').src = data.hits[2].recipe.image
            document.querySelector('#h23').innerText = data.hits[2].recipe.ingredientLines
            

        })

    //document.querySelector('#h21').innerText = data.hit[0].receipe.label
   // document.querySelector('#img1').src = data.hits[0].receipe.image
   // document.querySelector('#ingredient1').innerText = data.hits[0].receipe.ingredientLines


   /* if (data.media_type === "image") {
        document.querySelector('img').src = data.hdurl
    } else if (data.media_type === "video") {
        document.querySelector('iframe').src = data.hdurl
    } else {
        alert('unsupported media type')*/
    
        .catch(err => console.error(err));   
}




   
