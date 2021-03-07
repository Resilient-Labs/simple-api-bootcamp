document.querySelector('input').addEventListener('keydown', onKeyPress)
document.querySelector('button').addEventListener('click', getFood)

function onKeyPress(event) {
  if (event.key === `Enter`) {
    getFood();
  }
}

function getRecipes(ingredient) {
  const recipeURL = `http://www.recipepuppy.com/api/?i=${ingredient}`

  // We use allorigins as a CORS proxy to bypass Chrome security policy
  // because recipepuppy.com has not updated to return the proper headers from its API
  const apiLink = `https://api.allorigins.win/get?url=${encodeURIComponent(recipeURL)}`;
  return fetch(apiLink);
}

async function getFood(){
  let ingredient = document.querySelector('input').value
  document.querySelector('input').value = ""

  // clear the body upon new search
  let tableBody = document.querySelector(`tbody`)
  tableBody.innerHTML = ""

  const recipeResponse = await getRecipes(ingredient).then(response => response.json())
  debugger
  const recipes = JSON.parse(recipeResponse.contents);

  recipes.results.forEach( (recipe) => {
    tableBody.innerHTML += `<tr>
      <td><a href = ${recipe.href}>${recipe.title}</a></td>
      </tr>`
	});
  console.log(recipes)
  if(recipes.results.length === 0) {
    alert("Ingredient not found in our recipes. Try something else.")
  }
}
