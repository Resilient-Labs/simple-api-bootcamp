// Simple API 1
// Goal: Display data returned from an api

let app_id= "53817eeb"
let app_key= "882ca7fe936a9cf2855f28173728b055"


document.querySelector('button').addEventListener('click', getRecipe)
function getRecipe(){
  const userItems = document.querySelector('#item').value

  console.log(userItems)
  const url = `https://api.edamam.com/search?q=${userItems}&app_id=${app_id}&app_key=${app_key}`
// const variabe go inside the function//
  console.log(url)

  let saveforlater =""
  fetch(url)
    .then(res => res.json()) //this is just the syntax//parse response as JSON//
    .then(data=>{
      console.log(data)
      const results = data.hits //.hits is one of the responses from console.log(url of this specific API)//

      console.log(data.hits[0].recipe.ingredients[0].text)//console log to show 1 of the ingredients from the array//
      //how to call the array, use []//


      //the recipe is not an array, the results is the array. Recipe is an property of the elements inside array//
      for (j=0; j< results.length; j++){
        const picture = results[j].image
        const newPicture = document.createElement('img')
        const recipe = results[j].recipe
        const newRecipe = document.createElement('p')

        document.querySelector('.dishes').appendChild(newRecipe)
        newRecipe.innerHTML = recipe.label //it's label beause the name of the property inside recipe//
        //////////////////////////////
        document.querySelector('.dishes').appendChild(newPicture)
        newPicture.src = recipe.image
        //appendChild means you're adding things to the end of the targeted HTML section/element//
        //creating a loop to repeat creation of each ingredient//
        //here I am looping over the ingredients//
        for (i=0; i< results[j].recipe.ingredients.length; i++){
          const ingredient = results[j].recipe.ingredients[i]
          const newElement = document.createElement('p')
          newElement.innerHTML = ingredient.text
          document.querySelector('.dishes').appendChild(newElement)
              //Need to .createElement so that the text in the DOM does not get replaced//
          saveforlater = ingredient.text
        }
      }

    })
    .catch(err =>{
      alert(`error ${err}`)
    })
    ///Loop practice//
  for (let i = 0; i<3;i++){
    console.log(i)
  }// the i loop will print out 012 //
  console.log('break')
  for (let i= 0; i<3; i++){
    for (let j=0; j<3; j++){
      console.log('result'+i,'ingredient'+j)

    }// j loop  will print out 012  012 012
  }// the i loop will print  000 111 222


}
