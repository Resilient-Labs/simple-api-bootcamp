//"https://api.spoonacular.com/recipes/complexSearch?apiKey=74e96d1004b14f41b1ec9395b8bfa684&"
// "https://api.spoonacular.com/recipes/716429/information?apiKey=74e96d1004b14f41b1ec9395b8bfa684&search?query=apple&number=2"

//goal is to input any type of food item, and immediately get a new recipe for that.

document.querySelector("button").addEventListener("click", recipeFinder);

function recipeFinder() {
  let theFood = document.querySelector("input").value;
  let url = `https://api.spoonacular.com/food/search?apiKey=74e96d1004b14f41b1ec9395b8bfa684&query=${theFood}&number=7`;
  // `https://api.spoonacular.com/food/search?query=${theFood}&number=2&apiKey=74e96d1004b14f41b1ec9395b8bfa684`
  console.log(theFood);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //create elements with that data.property
      //append the child to the pa

      //set an inner text to blank
      //
      console.log(data);
      document.querySelector("#foodOutput").innerText = data.query;
      // data.searchResults[0].results.forEach(
      //   (recipe) =>
      //     (document.querySelector("#recipeOutput").innerText += recipe.name)
      // );
      data.searchResults[0].results.forEach((recipe) =>
        console.log(recipe.name)
      ); //issue printing the whole array
      let recipeList = data.searchResults[0].results;
      for (let i = 0; i < recipeList.length; i++) {
        let p = document.createElement("p");
        let text = document.createTextNode(recipeList[i].name);
        p.appendChild(text);
        document.querySelector(".theRecipes").appendChild(p);

      }
    });
}


// function deleteList(){

// }
