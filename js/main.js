let key = 'c85a7b4e85b94cec969a547038779071'

// let number =`10`
// let required =`true`




let searchThis
let diet
let exclude 
let intol


document.querySelector(`button`).addEventListener(`click`, onClick)

function onClick(){

 searchThis = document.querySelector(`#search`).value 
 diet = document.querySelector(`#diet-opt`).value
 exclude = document.querySelector('#exclude').value
 intol = document.querySelector(`#intol-opt`).value
 getRecipes()

}


function getRecipes(){
  
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
function formTopList(items){

  for(let i = 1; i <= items.length;i++){
   let img = document.createElement(`img`)
   let title = document.createElement(`h4`)
   let span1 = document.createElement(`span`)
   let span2 = document.createElement(`span`)

   img.src = items[i-1].image
   title.textContent = items[i-1].title
   span1.textContent = `Estimated Cooktime: ${items[i-1].title}`
   span2.textContent = `Servings: ${items[i-1].servings}`
   

   document.querySelector(`section`).appendChild(img)
   document.querySelector(`section`).appendChild(title)
   document.querySelector(`section`).appendChild(span1)
   document.querySelector(`section`).appendChild(span2)


   // console.log( items[i-1])
  }


}
  

