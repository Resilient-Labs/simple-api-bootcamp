let searchText = document.getElementById('searchText');
let display = document.getElementById('joke');
// let searchForm = document.getElementById('searchForm');
searchFrom.addEventListener("submit",(event) =>{
  event.preventDefault();
  // let value = searchText.value;
  // let recipe = item.recipe;
  // let label = item.label;
  fetch( `https://sv443.net/jokeapi/v2/joke/Programming?type=single`)
   .then(response => response.json())
   .then(data => {
     console.log(data.joke)
     document.getElementById("joke").textContent = data.joke;
   });
 });
