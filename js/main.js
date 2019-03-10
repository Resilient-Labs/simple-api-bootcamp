//when user types a food item into the search the api returns recipes with that food item in it

document.querySelector('form').addEventListener('submit', food)
function food(e){
  e.preventDefault();
  //put user food item into a variable
  let ingredient = document.querySelector('#food').value
  fetch(`https://api.edamam.com/search?q=${ingredient}&app_id=18b7ae22&app_key=5367d4ac72c19b6569235557c4856674`)
  .then(res => res.json())
  .then(response =>{
    //create a variable to hold the entire unordered list of recipes
    const recipesList = document.getElementById('recipes');
    //loop through every recipe hit to utilize array items
    response.hits.forEach(function(hit){
      //create li element to contain recipe template
      const recipe = document.createElement('li')
      //create variable to contain ingredients for recipe array
      const ingredients = hit.recipe.ingredientLines
      //clear recipeList whenever entering a new ingredient
      //create recipe template
      recipe.innerHTML =`
      <h2>${hit.recipe.label}</h2>
      <img src="${hit.recipe.image}" alt="${hit.recipe.label}">
      <a href="${hit.recipe.url}">link to recipe</a>
      <ul>${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>`;
      //display the recipies using the recipe template into the DOM in the ul
      recipesList.appendChild(recipe);
    }) //closes hits loop
  }) //closes response function
  .catch(err =>{
    console.log('this dont work, heres why: ' + err);
  })
} //closes food function
