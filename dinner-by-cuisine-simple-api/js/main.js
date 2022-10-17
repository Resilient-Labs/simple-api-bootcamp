//House Hayden: Sydnei + Susanna

document.querySelector('button').addEventListener('click', getRecipe)

function getRecipe() {

    let recipeNum = Math.floor(Math.random() * 100)

    let type = document.querySelector('input').value

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeNum}&cuisineType=${type}&app_id=739b4781&app_key=bad9f9ca164d027ad9b82ee5dc6935f3`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.count)

            if(data.count === 0){
                alert('Sorry, could\'nt find that recipe. Try again!')
            } else {

            let cuisine = data.hits[0].recipe.cuisineType
            let image = data.hits[0].recipe.image
            let name = data.hits[0].recipe.label


            document.querySelector('h2').innerText = cuisine
            document.querySelector('img').src = image
            document.querySelector('h3').innerText = name 
            console.log(cuisine)

            }

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}

//(Special thanks to Julian, Oscar and Tyana!)