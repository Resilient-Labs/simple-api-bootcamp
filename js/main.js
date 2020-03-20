// API used: https://spoonacular.com/food-api/docs Endpoint:https://spoonacular.com/food-api/docs#Search-Recipes


let key = 'c85a7b4e85b94cec969a547038779071'


let searchThis, diet, exclude, intol //parms for api query string parm
let sec = document.querySelector(`section`)

document.querySelector(`button`).addEventListener(`click`, onClick)

function onClick(){

  if(sec.hasChildNodes() === true){ //removes all children from sec
    
    while (sec.firstChild) {
      sec.removeChild(sec.lastChild);
    }


}
                                                    
 searchThis = document.querySelector(`#search`).value   // gets user selections
 diet = document.querySelector(`#diet-opt`).value
 exclude = document.querySelector('#exclude').value
 intol = document.querySelector(`#intol-opt`).value
 getRecipes()

}


function getRecipes(){  // fetches 10 recipes
  
fetch(` https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${searchThis}&diet=${diet}&excludeIngredients=${exclude}&intolerance=${intol}&number=10&instructionsRequired=true`)

    .then(res => res.json()) 
    .then(response => {
      console.log(response)

      if(response.results.length === 0){alert(`no results are found`) }

      formTopList(response.results)

    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })



  }
function formTopList(items){  // formats response to DOM

  for(let i = 1; i <= items.length;i++){
                                                 // * IMPROVEMENT: create an "li" containing the new created elements for semantic reasons.
   let title = document.createElement(`h4`)
   let span1 = document.createElement(`span`)
   let span2 = document.createElement(`span`)

   title.textContent = items[i-1].title
   span1.textContent = `Estimated Cooktime: ${items[i-1].title}`
   span2.textContent = `Servings: ${items[i-1].servings}`
   span2.style.borderBottom =`1px solid black`
   

   document.querySelector(`section`).classList.add("box")
   document.querySelector(`section`).appendChild(title)
   document.querySelector(`section`).appendChild(span1)
   document.querySelector(`section`).appendChild(span2)

  }


}
  

