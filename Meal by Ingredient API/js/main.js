document.querySelector('form').addEventListener("submit", getMealsByIngredient)
let ul = document.querySelector("ul")

function getMealsByIngredient (e) {
  let ingredient = document.querySelector('input').value
  e.preventDefault()
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      ul.innerHTML = ""
      document.querySelector('input').value = ""
      console.log(response)
      response.meals.forEach( (meal, i) => {
        let img = document.createElement('img')
        let li = document.createElement("li")
        img.setAttribute("src", `${meal.strMealThumb}`);
        ul.appendChild(li);
        li.appendChild(img)
        li.appendChild(document.createTextNode(`${meal.strMeal}`))
    })

   })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
