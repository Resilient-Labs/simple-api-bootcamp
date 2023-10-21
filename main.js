//API 1:https://api.spoonacular.com/recipes/complexSearch
//key 1: cb744141e973419382d52195dc1309b2

document.querySelector('button').addEventListener('click', recipeSearch);

function recipeSearch() {
    console.log('recipeSearch runs');

    let unknown = document.querySelector('#search').value;

    const apiKey1 = 'cb744141e973419382d52195dc1309b2';
    const url1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey1}&includeInstruction=true&includeNutrition=true&query=${unknown}`

    fetch(url1)
   
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);

            // Extract and display the relevant data
            const recipes = data.results;
            const container = document.getElementById('recipes');
            container.innerHTML = ''; // Clear previous data

            if (recipes.length === 0) {
                container.innerHTML = '<p>No recipes available.</p>';
            } else {
                const ul = document.createElement('ul');
                recipes.forEach((recipe) => {
                    const li = document.createElement('li');
                    const img = document.createElement('img'); // Create an image element
                    img.src = recipe.image; // Set the image source to the recipe's image URL
                    img.alt = recipe.title; // Set the alt text for the image
                    li.textContent = `${recipe.title}`;
                    li.appendChild(img); // Add the image to the list item
                    ul.appendChild(li);
                });
                container.appendChild(ul);
                document.querySelector('#foodie').classList.toggle('hidden')
            }

        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

