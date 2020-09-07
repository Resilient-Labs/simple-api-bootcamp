
function searchRecipe (){
let userAnswer = document.querySelector("input").value
document.querySelector("input").value = ""
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userAnswer}`)
  .then(response => response.json())
  .then(data => {
    document.getElementsByTagName("h2")[0].src = data.meals[0].strMeal
    document.getElementsByTagName("img")[0].src = data.meals[0].strMealThumb
    document.getElementsByTagName("p")[0].innerHTML = data.meals[0].strInstructions
    console.log(data.meals[0])
  })
  .catch(err => {
  console.log(`error ${err}`)
  alert("Sorry, there are no results for your search")
});
}
document.querySelector("button").addEventListener('click', (e) => {
  searchRecipe()
})
document.querySelector("input").addEventListener("keypress", (e) => {
if(e.key === "Enter"){
  searchRecipe()
}
})
