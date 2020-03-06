let key = 'c85a7b4e85b94cec969a547038779071'

let searchThis = `steak and cheese`
let diet = ``
let exclude = ``
let intol =`gluten`
let number =`10`
let required =`true`


  
fetch(` https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${searchThis}&diet=${diet}&excludeIngredients=${exclude}&intolerance=${intol}`)

    .then(res => res.json()) 
    .then(response => {
      console.log(response)
      if(response.results.length === 0){alert("no results are found") }
      formTopList(response.results)
    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
function formTopList(items){
  console.log(items.length)
  for(let i = 1; i <= items.length;i++){
    console.log("Letssssss gooooooooooo")
  }


}


