document.querySelector('button').addEventListener('click', getWeather)

function getWeather() {
    const url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=95126682&app_key=0f2861679f02814dff4dbfb672f5b302&cuisineType=Japanese";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const randomNum = Math.floor(Math.random() * 20) + 1;
            document.querySelector('p').innerText = data.hits[randomNum].recipe.ingredientLines
            document.querySelector('img').src = data.hits[randomNum].recipe.image
            document.querySelector('h2').innerText = data.hits[randomNum].recipe.label
            const calories = Math.floor(data.hits[randomNum].recipe.calories)
            document.querySelector('span').innerText = calories

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
